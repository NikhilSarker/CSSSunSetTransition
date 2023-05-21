let btn = document.getElementById("btn");
let sky = document.getElementById("sky");
let sun = document.getElementById("sun");


btn.onclick = myFunction;

function myFunction() {
  var sun = document.getElementById("sun");
  var sky = document.getElementById("sky");
  sun.classList.toggle("mysun");
  sky.classList.toggle("mysky");
};