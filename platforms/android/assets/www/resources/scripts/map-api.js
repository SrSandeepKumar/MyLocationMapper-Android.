    // block of code : BOC
    var map;
    var q=1;
    var abc;
    document.addEventListener("deviceready", function() {
        var button = $("#button")[0];
        var bstart = $("#bstart")[0];
        var bstop = $("#bstop")[0];
        var watchID = null ;
        var options = { maximumAge: 3000, timeout: 10000, enableHighAccuracy: true };
        var div = document.getElementById("map_canvas");
        map = plugin.google.maps.Map.getMap(div);
        var watchID = navigator.geolocation.watchPosition(onSuccess, onError,options);

    }, false);

    function onSuccess(position) {

         var abc = new plugin.google.maps.LatLng(position.coords.latitude,position.coords.longitude);

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

        $( "#bstart" ).on("click",function() {
            alert("Starting location tracking");
            /*  var count = 0 ;
                var locArray = [];
           
                locArray[count] = abc;
                count++;
                alert(count);
           */
        });

        $( "#bstop" ).on("click",function() {
            // clearInterval(tracker);
            if (watchID != null) {
            navigator.geolocation.clearWatch(watchID);
            watchID = null;
        }

        });
    }

    function onError(error) {
        alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
    }












         
            // This is the function that will be called when the START BUTTON is clicked .
    /*startStoring(){

      alert("have entered into startStoring block");

      alert(onBtn2Click);
      // if(!onBtn2Click){
        var count=0;
        var array = [];
        array[count]=abc;
      // }
      count++;
    }*/
    // alert("Exiting the startStoring block");

    // Now that i am done with adding the Start-Stop storing ops. i wil have to join the points therefore ...
    // map.addPolyline({
     
     // for Specifying the points in displaying the lines on the map 
    /*for(var l=0;l<=array.length;l++){
      points: [
        array[l];
      ]},
      'color' : '#AA00FF',
      'width': 10,
      'geodesic': true
    }, function(polyline) {

      setTimeout(function() {
        polyline.remove();
      }, 3000);
    });
    */ 