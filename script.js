var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var css = document.getElementsByTagName("h3")[0];
var body = document.getElementsByTagName("body")[0];

function colorchager() {
    body.style.backgroundImage = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.backgroundImage;
}

color1.addEventListener("input", colorchager);
color2.addEventListener("input", colorchager);