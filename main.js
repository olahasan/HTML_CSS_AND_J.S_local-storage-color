let red = document.getElementById("red");
let blue = document.getElementById("blue");
let green = document.getElementById("green");
let yellow = document.getElementById("yellow");

if (localStorage.length > 0) {
    document.body.style.backgroundColor = localStorage.getItem("color")
}

red.onclick = function () {
    localStorage.setItem("color", "red");
    document.body.style.backgroundColor = "red";
}
blue.onclick = function () {
    localStorage.setItem("color", "blue");
    document.body.style.backgroundColor = "blue";
}
green.onclick = function () {
    localStorage.setItem("color", "green");
    document.body.style.backgroundColor = "green";
}
yellow.onclick = function () {
    localStorage.setItem("color", "yellow");
    document.body.style.backgroundColor = "yellow";
}

