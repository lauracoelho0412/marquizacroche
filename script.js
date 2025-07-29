document.addEventListener("DOMContentLoaded", (event) => {

  console.log("Marquiza site loaded");

  const lightBtn = document.getElementById("light-mode");
  const darkBtn = document.getElementById("dark-mode");

  function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  }
  
  function getCookie(name) {
    return document.cookie.split('; ').reduce((acc, cookie) => {
      const [key, val] = cookie.split('=');
      return key === name ? val : acc;
    }, '');
  }
  function applyDarkMode(){
    darkBtn.classList.add("active")
    lightBtn.classList.remove("active")

    document.body.classList.add("dark-mode");
    document.querySelector("header").classList.add("dark-mode");
    document.querySelectorAll("h2").forEach(h => h.classList.add("dark-mode"));
    document.querySelectorAll(".banners").forEach(banner => banner.classList.add("dark-mode"));
    document.querySelectorAll(".card").forEach(card => card.classList.add("dark-mode"));
    document.querySelectorAll(".card2").forEach(card2 => card2.classList.add("dark-mode"));
    document.querySelectorAll(".topnav a").forEach(a => a.classList.add("dark-mode"));
    document.querySelectorAll("th").forEach(t => t.classList.add("dark-mode"));
    document.querySelectorAll("td.tamanhos").forEach(d => d.classList.add("dark-mode"));
    document.querySelectorAll(".mode-btn").forEach(mode => mode.classList.add("dark-mode"));
    document.querySelectorAll(".contact a").forEach(contact => contact.classList.add("dark-mode"));
    document.querySelectorAll(".end").forEach(end => end.classList.add("dark-mode"));
    document.querySelectorAll(".card4").forEach(card4 => card4.classList.add("dark-mode"));
    document.querySelectorAll("h1").forEach(h1 => h1.classList.add("dark-mode"));
  }

  function applyLightMode(){
    lightBtn.classList.add("active")
    darkBtn.classList.remove("active")

    document.body.classList.remove("dark-mode");
    document.querySelector("header").classList.remove("dark-mode");
    document.querySelectorAll("h2").forEach(h => h.classList.remove("dark-mode"));
    document.querySelectorAll(".banners").forEach(banner => banner.classList.remove("dark-mode"));
    document.querySelectorAll(".card").forEach(card => card.classList.remove("dark-mode"));
    document.querySelectorAll(".card2").forEach(card2 => card2.classList.remove("dark-mode"));
    document.querySelectorAll(".topnav a").forEach(a => a.classList.remove("dark-mode"));
    document.querySelectorAll("th.tamanhos").forEach(t => t.classList.remove("dark-mode"));
    document.querySelectorAll("td").forEach(d => d.classList.remove("dark-mode"));
    document.querySelectorAll(".mode-btn").forEach(mode => mode.classList.remove("dark-mode"));
    document.querySelectorAll(".contact a").forEach(contact => contact.classList.remove("dark-mode"));
    document.querySelectorAll(".end").forEach(end => end.classList.remove("dark-mode"));
    document.querySelectorAll(".card4").forEach(card4 => card4.classList.remove("dark-mode"));
    document.querySelectorAll("h1").forEach(h1 => h1.classList.remove("dark-mode"));
  }
  darkBtn.addEventListener('click', function () {
    applyDarkMode();
    setCookie('theme', 'dark', 30);
  });
  
  lightBtn.addEventListener('click', function () {
    applyLightMode();
    setCookie('theme', 'light', 30);
  });
  
  window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = getCookie('theme');
    if (savedTheme === 'dark') {
      applyDarkMode();
    } else {
      applyLightMode();
    }
  });

})

function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}