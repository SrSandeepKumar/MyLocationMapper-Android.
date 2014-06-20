var map;
    document.addEventListener("deviceready", function() {
      var button = $("#button")[0];
      button.addEventListener("click", onBtnClicked, false);

      var div = document.getElementById("map_canvas");
      map = plugin.google.maps.Map.getMap(div);
    }, false);
    function onBtnClicked() {
	alert("clicked");
      	map.showDialog();
    }
