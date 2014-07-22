document.addEventListener('deviceready', function() {
    window.plugins.navBar.setMenu([ ], function(e) {
        console.log(e);
    });

    window.plugins.navBar.setTabs([
    { 
        text: ' map',
        selected:false,
        select: function() {
            window.location = "index.html";
        }
    },
    { 

        text: ' history',
        selected: true,
        select: function() {
            map.refreshLayout();
            map.setVisible(false);
        }
    }], function(e) {
        console.log(e);
    }
    );

    window.plugins.navBar.setNavigationMode(window.plugins.navBar.NAVIGATION_MODE_TABS);
    window.plugins.navBar.setSelectedTab(1);
    window.plugins.navBar.show();
});

var count = 0;
function display(){
    console.log(count);
    count++;
    console.log("In display block, times: " + count);
    var getNar = JSON.parse(localStorage.getItem('nar'));
    console.log("Nar from DB" +getNar);
    var obj = getNar.length;
    console.log("length of localStorage"+obj);
    for (var index = 0; index < getNar.length; index++) {
        console.log(getNar[index].idd);
        console.log(getNar[index].name);
        console.log(getNar[index].desc);
        console.log(getNar[index].displayDate);
    }

    if(getNar.length !== null) { 
        var toDisplay = "";
        for (var index = 0; index < getNar.length; index++) {

            toDisplay = "<div class='panel panel-default'><div class='panel-heading'><h4 class='panel-title'><a class='col-xs-8 col-sm-8 col-md-8 col-lg-8' data-toggle='collapse' data-parent='#accordion' href=#" + getNar[index].idd + ">" + getNar[index].name + "</a><i class=' toPlot fa fa-map-marker fa-1x fa-1x col-xs-2 col-sm-2 col-md-2 col-lg-2'data-position=" + index + "></i><i class=' toDelete fa fa-trash-o fa-1x col-xs-01 col-sm-01 col-md-01 col-lg-01' data-position=" + index + "></i></h4></div><div id="+getNar[index].idd+" class='panel-collapse collapse'><div class='bg-info panel-body' style='text-align:left;'><small><strong>Name :</strong> <small>" + getNar[index].name + "</small><br/><small><strong> Description : </strong></small><small>" +getNar[index].desc + "</small> .<br/><small><strong> Date :</strong></small><small> " + getNar[index].displayDate + "</small><br/> <small><strong>Time Taken: </strong></small><small>" + getNar[index].time + "</small>.<br/><small><strong>Distance :</strong></small> <small>" + parseInt(getNar[index].distance) + "Kms</small>.<br/></div></div></div></div>";
            $(".list").append(toDisplay);
        }

        
    }
    return getNar;
}

$(document).ready(function(){
    var retrievedObject = display();
    console.log(retrievedObject.idd);

    $(".toDelete").on('click',function(){
        if(confirm("Are you sure to delete this Run?")) {
            var position = parseInt($(this).data("position"));
            console.log(position);
            var nar = $.parseJSON(localStorage.nar);
            console.log(nar);
            console.log(nar.length);
            nar.splice(position,1);
            console.log(nar.length);
            localStorage.setItem("nar" , JSON.stringify(nar));
            console.log(nar);
            $(this).parents(".panel").remove();
            console.log(localStorage);
        }
    });

    $(".toPlot").click(function(){   
        var mPlot;
        if(confirm("Are you sure to Plot this Run?")) {
        var position = parseInt($(this).data("position"));
        console.log(retrievedObject[position]);
        var temp =  localStorage.setItem("mPlot",JSON.stringify(retrievedObject[position]));
        console.log(temp);
        console.log(mPlot);
        location.href = "toPlot.html";
    }
    });

});

document.addEventListener("backbutton", function(){
if(confirm("Going back to Map ?")){
        window.location = "index.html";
    }

    
}, false);
