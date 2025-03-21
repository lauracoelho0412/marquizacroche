//esperar a pagina ser carregada//
document.addEventListener("DOMContentLoaded",function(){
    function myFunction() {
        var x = document.getElementById("navbar");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
})