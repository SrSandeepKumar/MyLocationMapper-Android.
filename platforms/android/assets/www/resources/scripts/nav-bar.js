document.addEventListener('deviceready', function() {
    /*   */


    // var _StopWatch = new StopWatch();

    window.plugins.navBar.setMenu([
    {
        text: 'Start',
        click: function() {
            alert("start");
            watchPosition();
            alert('bye - start');
            
            // _StopWatch.start();
        }
    },

    {
        text: 'Stop',
        click: function() {
            /**/
            alert('In the stop section');
            // storeArray(abc);

            storeLoc(locArray);

            locArray.length = 0;

            if (watchID != null) {
                navigator.geolocation.clearWatch(watchID);
                watchID = null;
            }

            storeLoc(locArray);

            locArray.length = 0;

            alert('bye - stop');
            // _StopWatch.stop();
            // alert(_StopWatch.duration());
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
            window.location = "settings.html";
            // showDB();
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

/*
function storeArray(abc){
    if(locArray.length != null){
        var db = window.openDatabase("location", "1.0", "LocationDB", 1000000);
        db.transaction(populateDB(){
            tx.executeSql('CREATE TABLE IF NOT EXISTS LocationDB (loc)');
            tx.executeSql('INSERT INTO LocationDB (loc) VALUES (10,20.12451)');
            tx.executeSql('INSERT INTO LocationDB (loc) VALUES (20,15.25452)');
            tx.executeSql('INSERT INTO LocationDB (loc) VALUES (30,45.57885)');


            var len = location.length;
            var sqlStr = 'INSERT INTO location (loc) VALUES (abc)';
            var e;
            for (var i = 0; i < len; i++) {
            e = location[i];
            tx.executeSql(sqlStr, [e.loc], onSqlSuccess, onSqlError);
            }
        
        }, errorCB, successCB);
    }
}

    

function errorCB(tx, err) {
    alert("Error processing SQL: "+err);s
}

function successCB() {
    alert("success!");
} 



function stopStoring(){

}

function queryDB(tx) {
    var r = tx.executeSql('SELECT * FROM LocationDB', [], querySuccess, errorCB);
    alert("I am inside queryDB");
    return r;
}

function querySuccess(tx, results) {
    console.log("Returned rows = " + results.rows.length);
    alert('query sucess block');

    if (!results.rowsAffected) {
        console.log('No rows affected!');
        return false;
    }

    alert('query rows inserted');

    console.log("Last inserted row ID = " + results.insertId);
}
*/
/*
functon watchPosition(){
    --watchposition
        --onsuccess(
            locArray.push[abc]
            plotLine(locArray);
        )

}
*/
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
                // 'animation':google.maps.Animation.BOUNCE,
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
        var dateTime = new Date();
        alert(JSON.stringify(pos));
        localStorage.setItem( 'dateTime'  ,JSON.stringify(pos));
        $('#list').html('<p>'+retrievedObject+'</p>');
    

    
    // for (var i = 1; i <= pos.length ; i++) {
    //     var retrievedObject = localStorage.getItem('');
    //     alert('retrievedObject: ', JSON.parse(retrievedObject));
    //  };
    // $('#list').html('<p>'+retrievedObject+'</p>');
}

/*
// StopWatch Block

/*function stopWatch(){
    var startTime = null ;
    var stopTime = null ;
    var running = false ;

    function getTIme(){
        var day = new date();
        return day.getTime();
    }

    this.start = function(){
        if (running == true ){
            return ;
        }
        else if(startTime != null){
            stopTime = null ;
            running = true ;
            startTime = getTime();
        }

        this.stop = function(){
            if(running == false) return;
            stopTime = getTime();
            return false;
        }

        this.duration = function(){
            if(startTime == null || stopTime == null){
                return 'Not Working';
                else
                    return {(stopTime - startTime)/1000};
            }
        }

    }
}*/