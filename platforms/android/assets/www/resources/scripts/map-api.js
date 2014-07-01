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
        var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError,options);

    }, false);

    function onSuccess(position) {

         var abc = new plugin.google.maps.LatLng(position.coords.latitude,position.coords.longitude);

        map.addMarker(
            {
                'position': abc,
                'animation':google.maps.Animation.BOUNCE,
                'title': "You are Here"
                // 'icon' : 'resources/images/mark.png'
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
            //   var count = 0 ;
            //     var locArray = [];
                   plotLine(locArray.push[abc]);
            //     locArray[count] = abc;
            //     count++;
            //     alert(count);
           
        });

        $( "#bstop" ).on("click",function() {
            // clearInterval(tracker);
            if (watchID != null) {
            navigator.geolocation.clearWatch(watchID);
            watchID = null;
        }


        function plotLine(dots){
            map.addPolyline({
              points: [
              abc
              ],
              'color' : '#AA00FF',
              'width': 10,
              'geodesic': true
          }, function(polyline) {

              setTimeout(function() {
                polyline.remove();
            }, 3000);
          });
        }

        });
    }

    function onError(error) {
        alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
    }
