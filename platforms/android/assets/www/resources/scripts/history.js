$(function(){
	$('.list').load(function(){
		queryDB();
		for (var i = 0; i <= listHistory.length - 1; i++) {
		listHistory[i];
		$history = $("<li>"+listHistory[i]+"<checkbox class = "+data[i]+"></li>");
	});
});