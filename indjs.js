const PI = 3.1416;
let radius;
let circumference;


document.getElementById("submit").onclick = function(){
    radius = document.getElementById("radius-input").value;
    radius= Number(radius);
    circumference = 2*PI*radius;
document.getElementById("output").textContent = circumference;
}
