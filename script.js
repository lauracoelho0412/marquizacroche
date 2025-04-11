//document.addEventListener("DOMContentLoaded", (event) => {

  console.log("Marquiza site loaded");

  function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
//})