document.addEventListener('deviceready', function() {
     /*   */

    /* window.plugins.navBar.setMenu([
     {
        text: 'Start',
        click: function() {
            alert("start");
            plotLine(locArray.push[abc]); 
        }
    },

    {
        text: 'Stop',
        click: function() {
                      
        alert('In the stop section');
        storeArray();
        if (watchID != null) {
            navigator.geolocation.clearWatch(watchID);
            watchID = null;
        }

    }
    }
    ], function(e) {
        console.log(e);
    });
*/

    window.plugins.navBar.setTabs([
        { 
            text: ' map',
            selected:true,
            select: function() {
               // google.maps.event.addDomListener(window, 'load', initialize); s
                map.refreshLayout();
                map.setVisible(true);
               // // window.location = "index.html";
            }
        },

        { 
            text: ' history',
            selected: false,
            select: function() {
                alert("settings");
                /*// $('#openBtn').click(function(){
                $('#myModal').modal({show:true})
            // });*/
                    // map = null;
                map.refreshLayout();
                map.setVisible(false);
                window.location = "settings.html";
                startStoring();
                // $('#myModal').modal('toggle');
                $('#myModal').modal('show');
            }
        }/*,
                { 
                    text: 'history',
                    selected: false,
                    select: function() {}
                }*/
        ], function(e) {
            console.log(e);
        }
    );
         
    window.plugins.navBar.setNavigationMode(window.plugins.navBar.NAVIGATION_MODE_TABS);
    window.plugins.navBar.setSelectedTab(0);
    window.plugins.navBar.show();
});


function storeArray(){
    if(locArray.length != null){
        var db = window.openDatabase("location", "1.0", "LocationDB", 1000000);
        db.transaction(populateDB, errorCB, successCB);
    }
}
function populateDB(tx) {
    // tx.executeSql('DROP TABLE IF EXISTS DEMO');
    tx.executeSql('CREATE TABLE IF NOT EXISTS LocationDB (id)');
    tx.executeSql('INSERT INTO LocationDB (id) VALUES (abc)');
}

function errorCB(tx, err) {
    alert("Error processing SQL: "+err);s
}

function successCB() {
    alert("success!");
} 



function stopStoring(){

}
