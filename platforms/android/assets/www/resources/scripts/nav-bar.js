document.addEventListener('deviceready', function() {
        window.plugins.navBar.setMenu([
            {
                text: 'Start',
                click: function() {
                    alert("start");
                }
            },
            {
                text: 'Stop',
                click: function() {}
            }
        ], function(e) {
            console.log(e);
        });

        window.plugins.navBar.setTabs([
            { 
                text: ' map',
                selected:true,
                select: function() {
                   // google.maps.event.addDomListener(window, 'load', initialize); 
                }
            },
            { 
                text: ' settings',
                selected: false,
                select: function() {
                    alert("settings");
                    // map = null;
                    map.refreshLayout();
                    map.setVisible(false);
                    window.location = "settings.html";
                }
            },
            { 
                text: 'history',
                selected: false,
                select: function() {}
            }
        ], function(e) {
            console.log(e);
        });
        window.plugins.navBar.setNavigationMode(window.plugins.navBar.NAVIGATION_MODE_TABS);
        window.plugins.navBar.setSelectedTab(0);
        window.plugins.navBar.show();

    });