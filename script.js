document.addEventListener("DOMContentLoaded", (event) => {

  console.log("js ok");

  function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  const buttonsWrapper = document.querySelector(".map");
  const slides = document.querySelector(".inner");

  buttonsWrapper.addEventListener("click", e => {
    if (e.target.nodeName === "BUTTON") {
      Array.from(buttonsWrapper.children).forEach(item =>
        item.classList.remove("active")
      );
      if (e.target.classList.contains("first")) {
        slides.style.transform = "translateX(-0%)";
        e.target.classList.add("active");
      } else if (e.target.classList.contains("second")) {
        slides.style.transform = "translateX(-40%)";
        e.target.classList.add("active");
      } else if (e.target.classList.contains('third')) {
        slides.style.transform = 'translatex(-80%)';
        e.target.classList.add('active');
      }
    }
  });

  

})