window.addEventListener("load", function(){
/* --------------Page Loader-------------- */
    document.querySelector(".pageloader").classList.add("fade-out");
    setTimeout(function(){
        document.querySelector(".pageloader").style.display="none"
    },600);
/* --------------Animation page-------------- */   
    AOS.init();
});



/* --------------toggle navbar -------------- */
const navToggler = document.querySelector(".nav-toggler");
    navToggler.addEventListener("click", toggleNav);

    function toggleNav(){
        navToggler.classList.toggle("active");
        document.querySelector(".nav").classList.toggle("open");
}

/* --------------CLOSE NAV CLICK ON -------------- */

document.addEventListener("click", function(e){
    if(e.target.closest(".nav-item")){
        toggleNav();
    }
});

/* -------------- sticky header -------------- */

window.addEventListener("scroll", function(){
    if(this.pageYOffset > 60){
        document.querySelector(".header").classList.add("sticky");
    }
    else{
        document.querySelector(".header").classList.remove("sticky");
    }
});

 function scrollToSection(event, id) {
    event.preventDefault(); // Impede o # na URL

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });

      // Remove o hash da URL, se ele chegou a ser adicionado
      history.replaceState(null, null, window.location.pathname);
    }
  }