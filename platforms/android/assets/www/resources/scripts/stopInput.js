document.addEventListener('deviceready', function() {
	window.plugins.navBar.setMenu([ ], function(e) {
		console.log(e);
	});

	window.plugins.navBar.setTabs([
	{ 
		text: ' Information',
		selected:false,
		select: function() { }
}], function(e) {
	console.log(e);
}
);

	window.plugins.navBar.setNavigationMode(window.plugins.navBar.NAVIGATION_MODE_TABS);
	window.plugins.navBar.setSelectedTab(0);
	window.plugins.navBar.show();
});


$(document).ready(function(){

	$('#name').tooltip({
		trigger: 'focus'
	});

});

$(".clr").on('click',function(){
	$("#name").val('');
	$("#Edesc").val('');
});

$(".sub").on('click',function(){
	if(/^[ a-zA-Z0-9]{3,23}$/.test($("#name").val())){
		alert("You entered" + " Name : " + $("#name").val()+ "\n" + " Description : "+$("#Edesc").val());
		var f1 = JSON.parse(localStorage.getItem('nar'));
		if($("#name").val() === null ){f1[f1.length-1].name = "Not Specified"}
			else{
		f1[f1.length-1].name = $("#name").val();}
		console.log(f1[f1.length-1]);
		if($("#name").val() === null){f1[f1.length-1].desc = " "}
			else{
		f1[f1.length-1].desc = $("#Edesc").val();}
		console.log(f1[f1.length-1]);
		alert("Sucessfully stored");
		localStorage.setItem( 'nar',JSON.stringify(f1));
		console.log(JSON.parse(localStorage.getItem('nar')));
		location.href = "history.html";
	}
	else{
		alert("Please ckeck weather you have filled Name field and Conditions are satisfied !!! ");
	}
});

document.addEventListener("backbutton", function(){
	if(!confirm("Your Name and Description will be stored as undefined !!!")){
		window.location = "index.html";
	}
}, false);