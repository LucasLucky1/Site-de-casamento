
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

  

  
  window.addEventListener('scroll', function(){
    var cabecalho = document.querySelector('.cabecalho');
    cabecalho.classList.toggle("teste", window.scrollY > 100);

  })