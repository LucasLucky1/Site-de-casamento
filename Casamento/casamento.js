
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
    cabecalho.classList.toggle("cabecalho-move", window.scrollY > 100);
    var cabecalhoItens = document.querySelectorAll('.cabecalho-item');
    cabecalhoItens[0].classList.toggle("cabecalho-item-move", window.scrollY > 100);
    cabecalhoItens[1].classList.toggle("cabecalho-item-move", window.scrollY > 100);
    cabecalhoItens[2].classList.toggle("cabecalho-item-move", window.scrollY > 100);
    cabecalhoItens[3].classList.toggle("cabecalho-item-move", window.scrollY > 100);
    cabecalhoItens[4].classList.toggle("cabecalho-item-move", window.scrollY > 100);
    

  })