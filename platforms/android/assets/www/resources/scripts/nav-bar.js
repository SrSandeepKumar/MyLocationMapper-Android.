document.addEventListener('deviceready', function() {

window.plugins.navBar.setMenu([
{
    text: 'Start',
    click: function() {
        alert("start");
        watchPosition();
        alert('bye - start');
        show();
        start();
    }
},

{
    text: 'Stop',
    click: function() {

        alert('In the stop section');

        storeLoc(locArray);
        stop();
        alert("after storeLoc");
        findDistance();
        alert("after findDistance");
        locArray.length = 0;

        if (watchID != null) {
            navigator.geolocation.clearWatch(watchID);
            watchID = null;
        }

        storeLoc(locArray);

        locArray.length = 0;

        alert('bye - stop');
    }
}
], function(e) {
    console.log(e);
});


window.plugins.navBar.setTabs([
{ 
    text: ' map',
    selected:true,
    select: function() {
        map.setVisible(true);
    }
},

{ 
    text: ' history',
    selected: false,
    select: function() {
        map.refreshLayout();
        map.setVisible(false);
        window.location = "history.html";

}
}

], function(e) {
    console.log(e);
}
);

window.plugins.navBar.setNavigationMode(window.plugins.navBar.NAVIGATION_MODE_TABS);
window.plugins.navBar.setSelectedTab(0);
window.plugins.navBar.show();
});

function watchPosition(){
    alert('hi - watchPosition');
    var option = { timeout: 30000 };
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, option);
}

function onSuccess(position){
    alert('navbar-onSuccess');
    var abc = new plugin.google.maps.LatLng(position.coords.latitude,position.coords.longitude);
    locArray.push(abc);
    plotLine(locArray);

    map.addMarker(
    {
        'position': abc,
'title': "You are Here"
}, function(marker) {
    marker.showInfoWindow();
});

    map.animateCamera({
        'target': abc,
        'tilt': 60,
        'zoom': 18,
        'bearing': 140
    });
}


function plotLine(dots){
    map.addPolyline({
        points: [
        dots
        ],
        'color' : '#AA00FF',
        'width': 10,
        'geodesic': true
    }, function(polyline) {

        setTimeout(function() {
            polyline.remove();
        }, 5000);
    });
}

function onError(error) {
    alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
}

function storLoc(pos){


}


function storeLoc(pos){
    
   var d = new Date();
   alert("in storeLoc");
   /* var sth = get localstorage.nar
    sth.push(JSON.stringify({"location":pos,"date":d}));
    localstorage.setItem('nar', sth);*/
    var nar = new Date().getTime();
    var formattedDate = native5.utils.DateUtils.formatDate(new Date(), {"format" : "d M -h:i a"});
    console.log(formattedDate);
    localStorage.setItem( 'nar'  ,JSON.stringify({"location":pos, "displayDate": formattedDate , 'idd': nar}));
    
}

 
function findDistance(){   
    alert("in findDistance");
    var retrievedObject = JSON.parse(localStorage.getItem('nar'));
    alert(retrievedObject.location[0]);
    var lat1 = parseInt(retrievedObject.location[0].lat);
    alert(1);
    var lon1 = parseInt(retrievedObject.location[0].lng);
    alert(2);
    var l = retrievedObject.length ;
    alert(3);
    var lat2 = parseInt(retrievedObject.location[1].lat);
    alert(4);
    var lon2 = parseInt(retrievedObject.location[1].lng);
    alert("after taking all the info");


    var radlat1 = Math.PI * lat1/180;


    alert(radlat1);

    var radlat2 = Math.PI * lat2/180;

    alert(radlat2);

    var radlon1 = Math.PI * lon1/180;

    alert(radlon1);

    var radlon2 = Math.PI * lon2/180;

      alert(radlon2);

    var theta = lon1-lon2;


    var radtheta = Math.PI * theta/180;

        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);


    dist = Math.acos(dist);
    alert(dist);


    dist = dist * 180/Math.PI;
    alert(dist);

    dist = dist * 60 * 1.1515;
alert(dist);
    dist = dist * 1.609344;

   /* if (unit=="K") { dist = dist * 1.609344 };

    if (unit=="N") { dist = dist * 0.8684 };*/


    alert(dist+"km");

    alert(last);

    
   alert(dist);/*




    
    $distance = document.getElementById('distance');

    $dictance.innerHTML = dist ;
*/
}
