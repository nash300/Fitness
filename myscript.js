
window.onload = metricRadio;


function metricRadio() {  // hides input & lable for "inches".

document.getElementById("h_unit1").innerHTML = "cm";
document.getElementById("w_unit").innerHTML = "kg";

document.getElementById("height2").style.visibility = "hidden";
document.getElementById("h_unit2").style.visibility = "hidden";
}


function standardRadio() { // adds feets & inches to Height input 

    document.getElementById("height2").style.visibility = "visible";
    document.getElementById("h_unit2").style.visibility = "visible";

    document.getElementById("h_unit1").innerHTML = "feets";
    document.getElementById("w_unit").innerHTML = "pounds";
    document.getElementById("h_unit2").innerHTML = "inches";
}



function cal() {  // this function determines which function needs to be nun according to unit type.

    if (document.getElementById("radio_metric").checked) {
        cal_metric();
    }

    if (document.getElementById("radio_standard").checked) {
        cal_standard();
    } 
    }
    


/* ********************************************************************************** */


var globalBmi = "" ;                         // Holds BMI result.

    
function cal_metric() {                                             // counts BMI for metric units.
    
    var cm = parseInt(document.getElementById("height1").value)/(100);
    var kg = parseInt(document.getElementById("weight").value);
    var answer = kg / Math.pow(cm,2);

    globalBmi = answer.toFixed(1);
    
     result();
    }


function cal_standard() {

    var pounds = parseInt(document.getElementById("weight").value);
    var feets = parseInt(document.getElementById("height1").value);
    var inches = parseInt(document.getElementById("height2").value);
    
    var pToKg = pounds * 0.45;                  // pound to Kg.
    var heightTemp = (feets*12) + inches;       // convert and add feets & inches.
    var heightToM = heightTemp * 0.025;         // convert feets to meters.
    var sHeight = Math.pow(heightToM,2);        // square of the height.
    var answer = pToKg / sHeight;               // weight/height.

    globalBmi = answer.toFixed(1);
    
    result();
    }



function result() {

    if (globalBmi<16) {
        document.getElementById("bmi").innerHTML = "Severe Thinness";
    }
    if (globalBmi>16 && globalBmi<17) {
        document.getElementById("bmi").innerHTML = "Moderate Thinness";
    }
    if (globalBmi>17 && globalBmi<18.5) {
        document.getElementById("bmi").innerHTML = "Mild Thinness";
    }
    if (globalBmi>18.5 && globalBmi<25) {
        document.getElementById("bmi").innerHTML = "Normal";
    }
    if (globalBmi>25 && globalBmi<30) {
        document.getElementById("bmi").innerHTML = "Overweight";
    }
    if (globalBmi>30 && globalBmi<35) {
        document.getElementById("bmi").innerHTML = "Obese Class I";
    }
    if (globalBmi>35 && globalBmi<40) {
        document.getElementById("bmi").innerHTML = "Obese Class II";
    }
    if (globalBmi>40) {
        document.getElementById("bmi").innerHTML = "Obese Class III";
    }
}