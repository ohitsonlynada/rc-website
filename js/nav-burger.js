const menu = document.getElementById("hamburger");
menu.addEventListener("click", myScript);
function myScript() {
  var x = document.getElementById("my-links");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}