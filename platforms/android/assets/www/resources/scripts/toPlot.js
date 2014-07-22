var map;

document.addEventListener("deviceready", function() {
    var plot = $.parseJSON(localStorage.mPlot);
    console.log(plot);

    $('#mapType').html("Map");
    $('#time').html(plot.time);
    console.log("plots time :" + plot.time);
    $('#distance').html(parseInt(plot.distance)+"Kms") 
    console.log("plots distance " + parseInt(plot.distance));
    var clicks = true;

    var div = document.getElementById("map_canvas");
    map = plugin.google.maps.Map.getMap(div);

    $(".mapType").click(function() {
        if (clicks) {
            map.setMapTypeId(plugin.google.maps.MapTypeId.ROADMAP);
            clicks = false;
            var type = document.getElementById('mapType');
            type.innerHTML = "Map";
        } else {
            map.setMapTypeId(plugin.google.maps.MapTypeId.HYBRID);
            clicks = true;
            var type = document.getElementById('mapType');
            type.innerHTML = "Earth";
        }
    });

     window.plugins.navBar.setMenu([
    {
        text: 'Home',
        click: function() {
            map.refreshLayout();
            map.setVisible(false);
            window.location = "index.html";
        }
    },

    {
        text: 'History',
        click: function() {
            map.refreshLayout();
            map.setVisible(false);
           window.location = "history.html";
        }
    }
    ], function(e) {
        console.log(e);
    });


    window.plugins.navBar.setTabs([
    { 
        text: plot.name,
        selected:false,
        select: function() {
            map.refreshLayout();
            map.setVisible(true);
        }
    }], function(e) {
        console.log(e);
    }
    );

    window.plugins.navBar.setNavigationMode(window.plugins.navBar.NAVIGATION_MODE_TABS);
    window.plugins.navBar.setSelectedTab(0);
    window.plugins.navBar.show();

    map.clear();
    points.plotLine(plot.location);

}, false);

document.addEventListener("backbutton", function(){
 if(confirm("Going back to History ?")){
        window.location = "history.html";
    }
}, false);
