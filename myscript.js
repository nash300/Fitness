
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





function cal() {  // this function determines which function needs to be nun according to unit type.

var metric = document.getElementById("radio_metric").checked;
var standard = document.getElementById("radio_standard").checked;

    if (metric = "true") {
        cal_metric();
    }

    if (standard = "true") {
        cal_standard();
    }
    }


function cal_metric() {  // counts BMI for metric units.
    var cm = document.getElementById("height1").value/100;
    var kg = document.getElementById("weight").value;

    var answer = kg/(cm*cm);

    var bmi = document.getElementById("bmi");

    bmi.innerHTML = answer.toFixed(1);
}





function cal_standard() {

    var pounds = parseInt(document.getElementById("weight").value);
    var feets = parseInt(document.getElementById("height1").value);
    var inches = parseInt(document.getElementById("height2").value);
    var bmi = document.getElementById("bmi");

    var pToKg = pounds * 0.45;                  // pound to Kg.
    var heightTemp = (feets*12) + inches;       // convert and add feets & inches.
    var heightToM = heightTemp * 0.025;         // convert feets to meters.
    var sHeight = Math.pow(heightToM,2);        // square of the height.
    var answer = pToKg / sHeight;               // weight/height.

    bmi.innerHTML = answer.toFixed(1);
}
