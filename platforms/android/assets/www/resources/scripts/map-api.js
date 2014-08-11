var map;
var q=1;
var abc;
window.locArray = [];
var time;
errorInGettingPostion = false;
document.addEventListener("deviceready", function() {


    var button = $("#button")[0];
    var bstart = $("#bstart")[0];
    var bstop = $("#bstop")[0];
    var watchID = null ;
    var clicks = false;
    $('#mapType').html("Map");
    $('#time').html("00:00:00");
    $('#distance').html("0Km");
    var options = { maximumAge: 3000, timeout: 10000, enableHighAccuracy: true };
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

    var watchID = navigator.geolocation.getCurrentPosition(onSuccess1, onError1,options);     
}, false);


function onSuccess1(position) {
    errorInGettingPostion = false;
    map.clear();
    var abc = new plugin.google.maps.LatLng(position.coords.latitude,position.coords.longitude);

    map.animateCamera({
        'target': abc,
        'tilt': 60,
        'zoom': 18,
        'bearing': 140
    });

    map.addMarker(
    {
        'position': abc,                
    }, function(marker) {
});

}

function onError1(error) {
    window.plugins.toast.showLongCenter('Could not determine your current Location , Kindly ensure GPS and Internet is enabled !');
    errorInGettingPostion = true;
}

