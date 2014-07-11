
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
        }
    }], function(e) {
        console.log(e);
    }
    );

    window.plugins.navBar.setNavigationMode(window.plugins.navBar.NAVIGATION_MODE_TABS);
    window.plugins.navBar.setSelectedTab(1);
    window.plugins.navBar.show();
});

function display(){
     console.log("In display block");
    var retrievedObject = JSON.parse(localStorage.getItem('nar'));
     console.log(retrievedObject);
    var obj = localStorage.length;
     console.log(obj);
   /* for (var i = 0; i <= obj-1 ; i++) {
         console.log(retrievedObject.location[i].lat);
         console.log(retrievedObject.location[i].lng);  
         console.log(retrievedObject.displayDate); 
    }*/ 
    if(retrievedObject.length === null){}
        else
        {
            $(".list").append("<li>"+retrievedObject.displayDate+"<input type='checkbox' class='lsitCheckBox' id = "+retrievedObject.idd+" /></li>");
        }
    return retrievedObject;
}

$(document).ready(function(){
    var retrievedObject = display();
    console.log(retrievedObject.idd);

    $(".toDelete").on('click',function(){
         $(".toDelete").off('click');
         if((document.getElementById(retrievedObject.idd).checked) === true)
        {
            // console.log(retrievedObject.idd);
            localStorage.removeItem("nar");
            location.reload(true);
        }
        else
            alert("UnChecked !!!");
    });

    $(".toPlot").click(function(){   
        var toPlotMap =  JSON.parse(localStorage.getItem('nar'));
        plotLine(toPlotMap.location);
    });

});

