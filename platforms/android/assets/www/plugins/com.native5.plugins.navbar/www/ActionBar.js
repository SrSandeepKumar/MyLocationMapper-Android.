cordova.define("com.native5.plugins.navbar.navbar", function(require, exports, module) {
var ActionBar = function() {};

ActionBar.prototype.DISPLAY_USE_LOGO = 1;
ActionBar.prototype.DISPLAY_SHOW_HOME = 2;
ActionBar.prototype.DISPLAY_HOME_AS_UP = 4;
ActionBar.prototype.DISPLAY_SHOW_TITLE = 8;
ActionBar.prototype.DISPLAY_SHOW_CUSTOM = 16;

ActionBar.prototype.NAVIGATION_MODE_STANDARD = 0;
ActionBar.prototype.NAVIGATION_MODE_LIST = 1;
ActionBar.prototype.NAVIGATION_MODE_TABS = 2;

ActionBar.prototype.SHOW_AS_ACTION_NEVER = 0;
ActionBar.prototype.SHOW_AS_ACTION_IF_ROOM = 1;
ActionBar.prototype.SHOW_AS_ACTION_ALWAYS = 2;
ActionBar.prototype.SHOW_AS_ACTION_WITH_TEXT = 4;
ActionBar.prototype.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW = 8;

ActionBar.prototype.getHeight = function(callback)
{
	return cordova.exec(
		function(result) { callback(undefined, result.height); },
		callback,
		'ActionBar', 'getHeight', []);
};

ActionBar.prototype.show = function(callback)
{
	callback = callback || function() {};

	return cordova.exec(
		function() { callback(undefined); },
		callback,
		'ActionBar', 'show', []);
};

ActionBar.prototype.hide = function(callback)
{
	callback = callback || function() {};

	return cordova.exec(
		function() { callback(undefined); },
		callback,
		'ActionBar', 'hide', []);
};

ActionBar.prototype.toggle = function(callback)
{
	callback = callback || function() {};

	window.plugins.navBar.isShowing(function(error, showing)
	{
		if(error) return callback(error);
		
		if(showing) window.plugins.navBar.hide();
		else window.plugins.navBar.show();
	});
};

ActionBar.prototype.isShowing = function(callback)
{
	return cordova.exec(
		function(result) { callback(undefined, result.value); },
		callback,
		'ActionBar', 'isShowing', []);
};

ActionBar.prototype.setMenu = function(menu, callback)
{
	callback = callback || function() {};

	var old_menu = window.plugins.navBar.menu;
	window.plugins.navBar.menu = menu;

	return cordova.exec(
		callback,
		function(e) { window.plugins.navBar.menu = old_menu; callback(e); },
		'ActionBar', 'setMenu', [menu]);
};

ActionBar.prototype.setTabs = function(tabs, callback)
{
	callback = callback || function() {};

	var old_tabs = window.plugins.navBar.tabs;
	window.plugins.navBar.tabs = tabs;

	return cordova.exec(
		callback,
		function(e) { window.plugins.navBar.tabs = old_tabs; callback(e); },
		'ActionBar', 'setTabs', [tabs]);
};

ActionBar.prototype.clearMenu = function(callback)
{
	return this.setMenu([], callback);
};

ActionBar.prototype.clearTabs = function(callback)
{
	return this.setTabs([], callback);
};

ActionBar.prototype.setDisplayHomeAsUpEnabled = function(showHomeAsUp, callback)
{
	callback = callback || function() {};

	return cordova.exec(
		function() { callback(undefined); },
		callback,
		'ActionBar', 'setDisplayHomeAsUpEnabled', [showHomeAsUp]);
};

ActionBar.prototype.setDisplayOptions = function(options, callback)
{
	callback = callback || function() {};

	return cordova.exec(
		function() { callback(undefined); },
		callback,
		'ActionBar', 'setDisplayOptions', [options]);
};

ActionBar.prototype.getDisplayOptions = function(callback)
{
	return cordova.exec(
		function(result) { callback(undefined, result.value); },
		callback,
		'ActionBar', 'getDisplayOptions', []);
};

ActionBar.prototype.setHomeCallback = function(callback)
{
	window.plugins.navBar.home_callback = callback;
}

ActionBar.prototype.setDisplayShowHomeEnabled = function(showHome, callback)
{
	callback = callback || function() {};

	return cordova.exec(
		function() { callback(undefined); },
		callback,
		'ActionBar', 'setDisplayShowHomeEnabled', [showHome]);
};

ActionBar.prototype.setDisplayShowTitleEnabled = function(showTitle, callback)
{
	callback = callback || function() {};

	return cordova.exec(
		function() { callback(undefined); },
		callback,
		'ActionBar', 'setDisplayShowTitleEnabled', [showTitle]);
};

ActionBar.prototype.setDisplayUseLogoEnabled = function(useLogo, callback)
{
	callback = callback || function() {};

	return cordova.exec(
		function() { callback(undefined); },
		callback,
		'ActionBar', 'setDisplayUseLogoEnabled', [useLogo]);
};

ActionBar.prototype.setHomeButtonEnabled = function(enabled, callback)
{
	callback = callback || function() {};

	return cordova.exec(
		function() { callback(undefined); },
		callback,
		'ActionBar', 'setHomeButtonEnabled', [enabled]);
};

ActionBar.prototype.setIcon = function(icon, callback)
{
	callback = callback || function() {};

	return cordova.exec(
		function() { callback(undefined); },
		callback,
		'ActionBar', 'setIcon', [icon]);
};

ActionBar.prototype.setListNavigation = function(items, callback)
{
	callback = callback || function() {};

	window.plugins.navBar.navigation_items = items;

	return cordova.exec(
		function() { callback(undefined); },
		callback,
		'ActionBar', 'setListNavigation', [items]);
};

ActionBar.prototype.setLogo = function(logo, callback)
{
	callback = callback || function() {};

	return cordova.exec(
		function() { callback(undefined); },
		callback,
		'ActionBar', 'setLogo', [logo]);
};

ActionBar.prototype.setNavigationMode = function(mode, callback)
{
	callback = callback || function() {};

	return cordova.exec(
		function() { callback(undefined); },
		callback,
		'ActionBar', 'setNavigationMode', [mode]);
};

ActionBar.prototype.getNavigationMode = function(callback)
{
	return cordova.exec(
		function(result) { callback(undefined, result.value); },
		callback,
		'ActionBar', 'getNavigationMode', []);
};

ActionBar.prototype.setSelectedNavigationItem = function(position, callback)
{
	callback = callback || function() {};

	return cordova.exec(
		function() { callback(undefined); },
		callback,
		'ActionBar', 'setSelectedNavigationItem', [position]);
};

ActionBar.prototype.setSelectedTab = function(position, callback)
{
	callback = callback || function() {};

	return cordova.exec(
		function() { callback(undefined); },
		callback,
		'ActionBar', 'setSelectedTab', [position]);
};

ActionBar.prototype.getSelectedNavigationItem = function(callback)
{
	// TODO: Map to menu item or tab?

	return cordova.exec(
		function(result) { callback(undefined, result.value); },
		callback,
		'ActionBar', 'getSelectedNavigationItem', []);
};


ActionBar.prototype.setSubtitle = function(subtitle, callback)
{
	callback = callback || function() {};

	return cordova.exec(
		function() { callback(undefined); },
		callback,
		'ActionBar', 'setSubtitle', [subtitle]);
};

ActionBar.prototype.getSubtitle = function(callback)
{
	return cordova.exec(
		function(result) { callback(undefined, result.value); },
		callback,
		'ActionBar', 'getSubtitle', []);
};

ActionBar.prototype.setTitle = function(title, callback)
{
	callback = callback || function() {};

	return cordova.exec(
		function() { callback(undefined); },
		callback,
		'ActionBar', 'setTitle', [title]);
};

ActionBar.prototype.getTitle = function(callback)
{
	return cordova.exec(
		function(result) { callback(undefined, result.value); },
		callback,
		'ActionBar', 'getTitle', []);
};

if(!window.plugins) window.plugins = {};
window.plugins.navBar = new ActionBar();
//window.plugins.tabBar = new ActionBar();
//module.exports = ActionBar;
});