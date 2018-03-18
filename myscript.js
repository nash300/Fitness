
window.onload = metricRadio;


function metricRadio() {  // hides input & lable for "inches".

var h_unit1 = document.getElementById("h_unit1");
var w_unit = document.getElementById("w_unit");
h_unit1.innerHTML = "cm";
w_unit.innerHTML = "kg";

var item1 = document.getElementById("height2");
var item2 = document.getElementById("h_unit2");

item1.style.visibility = "hidden";
item2.style.visibility = "hidden";
}


function standard() { // adds feets & inches to Height input 

    var item1 = document.getElementById("height2");
    var item2 = document.getElementById("h_unit2");
    
    item1.style.visibility = "visible";
    item2.style.visibility = "visible";

    var h_unit1 = document.getElementById("h_unit1");
    var w_unit = document.getElementById("w_unit");
    var h_unit2 = document.getElementById("h_unit2");
    
    h_unit1.innerHTML = "feets";
    w_unit.innerHTML = "pounds";
    h_unit2.innerHTML = "inches";
}