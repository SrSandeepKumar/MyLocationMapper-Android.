
document.addEventListener('deviceready', function() {



 window.plugins.navBar.setMenu([
    
    ], function(e) {
        console.log(e);
    });

    window.plugins.navBar.setTabs([
    { 
        text: ' map',
        selected:false,
        select: function() {
        window.location = "index.html";
        }
    },
    { 

        text: ' history',
        selected: true,
        select: function() {
            map.refreshLayout();
            map.setVisible(false);
            // window.location = "settings.html";
            showDB();
        }
    }], function(e) {
        console.log(e);
    }
    );

    window.plugins.navBar.setNavigationMode(window.plugins.navBar.NAVIGATION_MODE_TABS);
    window.plugins.navBar.setSelectedTab(1);
    window.plugins.navBar.show();
});
