document.addEventListener("DOMContentLoaded", (event) => {

  console.log("Marquiza site loaded");

  const lightBtn = document.getElementById("light-mode");
  const darkBtn = document.getElementById("dark-mode");

  darkBtn.addEventListener('click', function () {
    document.body.classList.add("dark-mode");
    document.querySelector("header").classList.add("dark-mode");
    document.querySelectorAll("h2").forEach(h => h.classList.add("dark-mode"));
    document.querySelectorAll(".banners").forEach(banner => banner.classList.add("dark-mode"));
    document.querySelectorAll(".card").forEach(card => card.classList.add("dark-mode"));
    document.querySelectorAll(".card2").forEach(card2 => card2.classList.add("dark-mode"));
    document.querySelectorAll(".topnav a").forEach(a => a.classList.add("dark-mode"));
    document.querySelectorAll("th").forEach(t => t.classList.add("dark-mode"));
    document.querySelectorAll(webkit-scrollbar-thumb).forEach(w => w.classList.add("dark-mode"));
    darkBtn.classList.add("active")
    lightBtn.classList.remove("active")
  })

  lightBtn.addEventListener('click', function () {
    document.body.classList.remove("dark-mode");
    document.querySelector("header").classList.remove("dark-mode");
    document.querySelectorAll("h2").forEach(h => h.classList.remove("dark-mode"));
    document.querySelectorAll(".banners").forEach(banner => banner.classList.remove("dark-mode"));
    document.querySelectorAll(".card").forEach(card => card.classList.remove("dark-mode"));
    document.querySelectorAll(".card2").forEach(card2 => card2.classList.remove("dark-mode"));
    document.querySelectorAll(".topnav a").forEach(a => a.classList.remove("dark-mode"));
    document.querySelectorAll("th").forEach(t => t.classList.remove("dark-mode"));
    lightBtn.classList.add("active")
    darkBtn.classList.remove("active")
  })
})

function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}