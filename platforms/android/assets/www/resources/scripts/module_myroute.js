

	var locationArray;

	$(document).ready(function(){
	

		var locations = $.ajax({
			type: "POST",
			url: "http://apps.prod.native5.com/zrGINj8Bf1409730469/home/getRoutes",
			success: function(data) { console.log(data); }
		});

		locations.fail(function() {
			console.log( "error" );
			window.plugins.toast.showLongCenter(' Unable to load Data Please check for Network Connection !', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
		});

		locations.done(function(data) {
			locationArray = data.message.location;
			
			var toList = "<ul class='table-view list-row'>";

			$.each(locationArray,function(key, location) {

				toList += "<li data-location = '" + JSON.stringify(location) + "'style='display: flex;' class='table-view-cell media js-location'><div class='media-body col-xs-4 col-sm-4 col-md-4 col-lg-4' style='font-size: 1.2em'>" + location.name + "<p>" + location.desc + " </p></div><div class='fa-1x fa-1x col-xs-4 col-sm-4 col-md-4 col-lg-4'> Distance <p>"  + location.distance + "Kms </p></span></div><i class='fa fa-map-marker fa-2x fa-1x fa-1x col-xs-2 col-sm-2 col-md-2 col-lg-2' style='display: inline -block;'></i></li>";
			});			

			toList += "</ul>";

			$("#list").append(toList);

			$("#list .js-location").each(function() {
				$(this).on("click", function() {
					var location = $(this).data("location");
					//toPlotTheRoute(location);

					var mPlot;
					if(confirm("Are you sure to Plot this Route?")) {
						console.log(location);
						localStorage.setItem("mPlot",JSON.stringify(location));
						var temp =  localStorage.getItem("mPlot");

						console.log(temp);
						
						window.location = "toPlot.html";
					}

				});
			});

		});

		
		console.log("from MyRoutes.js");
	});


document.addEventListener("backbutton", function(){
if(confirm("Going to Map ?")){
        window.location = "home.html";
    }    
}, false);



