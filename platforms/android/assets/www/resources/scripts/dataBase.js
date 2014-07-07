function showDB(){
	$('.list').load(function(){

		var listHistory = queryDB();
		for (var i = 0; i <= listHistory.length - 1; i++) {
			listHistory[i];
			$history = $("<li>"+listHistory[i]+"<checkbox class = "+data[i]+"></li>");

			/*$history = hi ;
			alert("hi");
			$(".list").append($history);*/
		}
	});
}


$(".toDelete").on("click",function(){
    deleteDB();

});


function deleteDB(i){
    if ($("."+data[i]).checked(true)) {
        
        tx.executeSql("DELETE FROM LocationDB WHERE id= ?", [data[i]]);
            console.log ('ok');
    }
}

$(".toPlot").click(function(){
    onSuccess.map.addmarker(listHistory);
});
