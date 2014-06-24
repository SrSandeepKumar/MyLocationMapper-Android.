// block of code : BOC
var map;
document.addEventListener("deviceready", function() {
    var button = $("#button")[0];
    // button.addEventListener("click", onBtnClicked, false);

    var div = document.getElementById("map_canvas");
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    map = plugin.google.maps.Map.getMap(div);

    map.getVisibleRegion(function(latLngBounds) {
  alert(latLngBounds.northeast.toUrlValue() + ", " + latLngBounds.southeast.toUrlValue()); 
});

    // function onBtnClicked() {
    // alert("clicked");
    // map.showDialog();
    // var GOOGLE = new plugin.google.maps.LatLng(12.9667,77.5667);
    // var abc = new plugin.google.maps.LatLng(position.coords.latitude,position.coords.longitude);
    function onSuccess(position) {
        var abc = new plugin.google.maps.LatLng(position.coords.latitude,position.coords.longitude);
        // alert('pos: '+ position.coords.latitude);
        map.addMarker(
            {
                'position': abc,
                'title': "You are Here"
            }, function(marker) {
                marker.showInfoWindow();
            }
        );
    }
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    map.getMyLocation(function(location) {
        
        alert(1);

    });
        


}, false);

// B.O.C for getting the user location
// map.getMyLocation(function(location){
//     var msg = ["Your Current Location : \n",
//     "latitude :" +location.latLng.lat , 
//     "longitude :" +location.latLng.lng,
//     "speed :" +location.speed,
//     "time :" +location.time,
//     "bearing :"+location.bearing].join('\n');

//     map.addMarker({
//       'position':  location.lng,
//       'msg': Message},
//       function (marker){
//         marker.showInfoWindow();
//     });
// });

// }, false);


 // document.addEventListener("deviceready", onDeviceReady, false);

 //    // device APIs are available
 //    //
 //    function onDeviceReady() {
 //        navigator.geolocation.getCurrentPosition(onSuccess, onError);
 //    }

 //    // Display `Position` properties from the geolocation
 //    //
 //    function onSuccess(position) {
 //        var div = document.getElementById('map_canvas');

 //        div.innerHTML = 'Latitude: '             + position.coords.latitude         + '<br/>' +
 //                        'Longitude: '            + position.coords.longitude        + '<br/>' +
 //                        'Altitude: '             + position.coords.altitude         + '<br/>' +
 //                        'Accuracy: '             + position.coords.accuracy         + '<br/>' +
 //                        'Altitude Accuracy: '    + position.coords.altitudeAccuracy + '<br/>' +
 //                        'Heading: '              + position.coords.heading          + '<br/>' +
 //                        'Speed: '                + position.coords.speed            + '<br/>';
 //    }

 //    // Show an alert if there is a problem getting the geolocation
 //    //
 //    function onError(error) {
 //            alert('code: '    + error.code    + '\n' +
//                   'message: ' + error.message + '\n');
//         }


// var myLatlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);


       /*// Marker icon on the map -- for now its set to australia 
    var myLatlng = new google.maps.LatLng(12.9667,77.5667);
    alert("Marker");
    var mapOptions = {
      zoom: 4,
      center: myLatlng
    };
   // map = new google.maps.Map(div, mapOptions);

// To add the marker to the map, use the 'map' property
    var marker = new google.maps.Marker({
        'position': myLatlng,
        'map': map,
    });

*/


/*
// B.O.C for getting the user location
map.getMyLocation(function(location){
    var msg = ["Your Current Location : \n",
    "latitude :" +location.latLng.lat , 
    "longitude :" +location.latLng.lng,
    "speed :" +location.speed,
    "time :" +location.time,
    "bearing :"+location.bearing].join('\n');

    map.addMarker({
      'position':  location.lng,
      'msg': Message},
      function (marker){
        marker.showInfoWindow();
    });
});

// BOC for obtaining the visible region
map.getVisibleRegion(function(latLngBounds){
    alert(latLngBounds.northeast.toUrlValue()+","+latLngBounds.southeast.toUrlValue());
});

// BOC to Detect in the bounds or not
  var point = new plugin.google.maps.LatLng(0, 0);
  var isContained = latLngBounds.contains(point);
  alert(point.toUrlValue() + " is" + (isContained ? " " : " not ") + " contained in this bounds.");

// from https://developers.google.com/maps/articles/geolocation -- for finiding out the current location
var initialLocation;
var siberia = new google.maps.LatLng(60, 105);
var newyork = new google.maps.LatLng(40.69847032728747, -73.9514422416687);
var browserSupportFlag =  new Boolean();

function initialize() {
  var myOptions = {
    zoom: 6,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);

  // Try W3C Geolocation (Preferred)
  if(navigator.geolocation) {
    browserSupportFlag = true;
    navigator.geolocation.getCurrentPosition(function(position) {
      initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
      map.setCenter(initialLocation);
    }, function() {
      handleNoGeolocation(browserSupportFlag);
    });
  }
  // Browser doesn't support Geolocation
  else {
    browserSupportFlag = false;
    handleNoGeolocation(browserSupportFlag);
  }

  function handleNoGeolocation(errorFlag) {
    if (errorFlag == true) {
      alert("Geolocation service failed.");
      initialLocation = newyork;
    } else {
      alert("Your browser doesn't support geolocation. We've placed you in Siberia.");
      initialLocation = siberia;
    }
    map.setCenter(initialLocation);
  }
}
*/
