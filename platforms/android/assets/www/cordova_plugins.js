cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/plugin.google.maps/www/googlemaps-cdv-plugin.js",
        "id": "plugin.google.maps.phonegap-googlemaps-plugin",
        "clobbers": [
            "window.plugins.phonegap-googlemaps-plugin"
        ]
    },
    {
        "file": "plugins/com.native5.plugins.navbar/www/ActionBar.js",
        "id": "com.native5.plugins.navbar.navbar",
        "clobbers": [
            "window.navbar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.geolocation": "0.3.8",
}
// BOTTOM OF METADATA
});
