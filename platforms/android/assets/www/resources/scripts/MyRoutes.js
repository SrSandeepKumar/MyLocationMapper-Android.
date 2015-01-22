 var locationArray;
 var indexVal;

document.addEventListener('deviceready', function() {

	var locations = $.ajax({
		type: "POST",
		url: "http://192.168.2.42/native5-app-hello-world/home/getRoutes",
		success: function(data) {
			// Do nothing.
		}
	});

	locations.fail(function() {
		// alert("Check for Network Connection ! ");
		 window.plugins.toast.showLongCenter(' Unable to load Data Please check for Network Connection !', function(a){console.log('toast success: ' + a)}, function(b){console.log('toast error: ' + b)});
	});

	locations.done(function(data){
		 locationArray = data.message.location;
		var length = locationArray.length;
		var toList = "<ul class='table-view list-row'>";

		 // alert(1);

		for (indexVal = 0; indexVal < length ; indexVal++) {
			toList += "<li style='display: inline-flex;' class='table-view-cell media' data-position=" + indexVal + "><div class='media-body col-xs-8 col-sm-8 col-md-8 col-lg-8'>" + locationArray[indexVal].name + "<p class='qwerty'>" + locationArray[indexVal].desc + " </p></div><div class='fa-1x fa-1x col-xs-2 col-sm-2 col-md-2 col-lg-2'> Distance <span style='font-size: 0.7em;'>" + locationArray[indexVal].distance + "Kms</span></div><i class='fa fa-map-marker fa-3x fa-1x fa-1x col-xs-2 col-sm-2 col-md-2 col-lg-2' data-position=" + locationArray[indexVal].rowIndex + "></i></li>";			
		}

		toList += "</ul>";

		$("#list").append(toList);
	});

	$( "#list" ).click(function() { 
        var mPlot;
        //var position = 1 ;
        // console.log($(this).indexVal);
        if(confirm("Are you sure to Plot this Run?")) {
        var position = parseInt($(this).data("position"));
        // console.log(position);
        var temp =  localStorage.setItem("mPlot",JSON.stringify(locationArray[position]));
        // console.log(temp);
        // console.log(mPlot);
        window.location = "toPlot.html";
    }
	});
});

