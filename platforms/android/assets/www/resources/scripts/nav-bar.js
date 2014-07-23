var target = [];
var a = false ;
document.addEventListener('deviceready', function() {

    window.plugins.navBar.setMenu([
    {
        text: 'Start',
        click: function() {
            watchPosition();
            show();
            start();
// findDistance(locArray);
a = true;
}
},

{
    text: 'Stop',
    click: function() {
        if(a == true){
            if(confirm("Do you want to save trail ?")){
                storeLoc(locArray);
                map.refreshLayout();
                map.setVisible(false);

                window.location = "stopInput.html";
                if (watchID != null) {
                    navigator.geolocation.clearWatch(watchID);
                    watchID = null;
                }
                locArray.length = 0;
            }else{window.location = "index.html";}
        }
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
                map.clear();
                map.setVisible(true);
        }
    },

    { 
        text: ' history',
        selected: false,
        select: function() {if(a == false){
            map.refreshLayout();
            map.setVisible(false);
            window.location = "history.html";}
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
    var option = { timeout: 30000 };
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, option);
}

function onSuccess(position){
    var abc = new plugin.google.maps.LatLng(position.coords.latitude,position.coords.longitude);
    locArray.push(abc);
    var d = findDistance(locArray);
    if(parseInt(d  * 1000) > 5 ) points.plotLine(locArray);
}



function onError(error) {
    alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
}



function storeLoc(pos){
     if(isNaN(parseInt(dist)) ){ var dist = 0 ; }
     else{
    var dist = findDistance(locArray);}
    var nar = new Date().valueOf();
    var t = $('#time').text();
    console.log(t);
    console.log(t);
    var formattedDate = native5.utils.DateUtils.formatDate(new Date(), {"format" : "d M -h:i a"});
   
    if( localStorage.getItem('nar') === null){
        console.log(formattedDate);
        localStorage.setItem( 'nar'  ,JSON.stringify([{"location":pos, "displayDate": formattedDate , 'idd': nar , 'time':t ,'distance' : (dist) }]));
    }
    else
    {
        var temp = JSON.stringify({"location":pos, "displayDate": formattedDate , 'idd': nar ,'time':t , 'distance' : dist});
        var f = JSON.parse(localStorage.getItem('nar'));
        f.push(JSON.parse(temp));
        localStorage.setItem('nar',JSON.stringify(f));
    }
}


function findDistance(pos){
    
    var lat1 = pos[0].lat;
    console.log(lat1);
    var lon1 = pos[0].lng;
    console.log(lon1);
    var l = pos.length ;
    console.log(l);
    var lat2 = pos[l-1].lat;
    var lon2 = pos[l-1].lng;
    var theta = lon1-lon2;
console.log(theta);

    if (theta === 0) {
        $distance = document.getElementById('distance');
        $distance.innerHTML = "0 Km" ;
    }
else
    {
        var radlat1 = Math.PI * lat1/180;
        var radlat2 = Math.PI * lat2/180;
        var radlon1 = Math.PI * lon1/180;
        var radlon2 = Math.PI * lon2/180;


        var radtheta = Math.PI * theta/180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        distk = dist * 1.609344;
        distm = (dist * 1.609344) * 1000;
        $distance = document.getElementById('distance');
        $distance.innerHTML = parseInt(distk) + " Kms" ;
        
        var clicks = false;
        $(".distance").click(function() {
            if (clicks) { 
                /*$('#distance').html(parseInt(distk)+"Kms");*/
                $distance = document.getElementById('distance');
                $distance.innerHTML = parseInt(distk) + " Kms" ;
                clicks = false;
            } else {
                clicks = true;
                /* $('#distance').html(parseInt(distm)+"Meters");*/
                $distance = document.getElementById('distance');
                $distance.innerHTML = parseInt(distm) + " Meters" ;
            }
        });

        console.log(distk);
        return distk ; 

    }
}

document.addEventListener("backbutton", function(){
  // event.preventDefault();
    if(confirm("want to exit ?")){
        navigator.app.exitApp();
    }
}, false);