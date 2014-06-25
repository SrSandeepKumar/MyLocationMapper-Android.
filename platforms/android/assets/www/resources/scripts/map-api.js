// block of code : BOC
var map;
var q=1;
document.addEventListener("deviceready", function() {
    var button = $("#button")[0];
    bstart.addEventListener("click", onBtn1Click, false);
    bstop.addEventListener("click", onBtn2Click, false);



    var div = document.getElementById("map_canvas");
    navigator.geolocation.getCurrentPosition(onSuccess, onError);




    map = plugin.google.maps.Map.getMap(div);

  

    function onBtn1Click() {
    alert("Starting location tracking");
    // map.showDialog();
    // var GOOGLE = new plugin.google.maps.LatLng(12.9667,77.5667);
  }

  function onBtn2Click() {
    alert("Stopping location tracking");
    
  }


    var abc = new plugin.google.maps.LatLng(position.coords.latitude,position.coords.longitude);

    function onSuccess(position) {
        var abc = new plugin.google.maps.LatLng(position.coords.latitude,position.coords.longitude);
       alert(abc);
            
            map.addMarker(
            {
                'position': abc,
                'title': "You are Here"
            }, function(marker) {
                marker.showInfoWindow();
            });

alert(q);
         
      map.getVisibleRegion(function(latLngBounds) {
alert(latLngBounds.northeast.toUrlValue() + ", " + latLngBounds.southeast.toUrlValue()); 


 
       
}
);



    }
    
    


}, false);


function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

       alert(abc); 

       map.getMyLocation(function(location) {
        
        alert(1);

    });
        alert(3);
