(function(){
  // Creamos el boton openbutton
  const openbutton = document.querySelector(".nav_menu");
  const nav = document.querySelector(".nav_link");
  const cierre = document.querySelector(".nav_close");

  openbutton.addEventListener("click",()=>{
    nav.classList.add("nav_link--show");

  })
  cierre.addEventListener('click',()=>{
    nav.classList.remove("nav_link--show");
  })

})();