
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

    for (var x = 0; x < cabecalhoItens.length; x++) {
      cabecalhoItens[x].classList.toggle("cabecalho-item-move", window.scrollY > 100);
      
    }
  })

  window.addEventListener('scroll', function(){
    var cabecalhoItens = document.querySelectorAll('.cabecalho-item');
    cabecalhoItens[0].classList.toggle("cabecalho-ativo", window.scrollY >= 0  & window.scrollY < 700);
    cabecalhoItens[1].classList.toggle("cabecalho-ativo", window.scrollY >= 700 & window.scrollY < 1450);
    cabecalhoItens[2].classList.toggle("cabecalho-ativo", window.scrollY >= 1450 & window.scrollY < 3230);
    cabecalhoItens[3].classList.toggle("cabecalho-ativo", window.scrollY >= 3230 & window.scrollY < 3900);
    cabecalhoItens[4].classList.toggle("cabecalho-ativo", window.scrollY >= 3900 & window.scrollY < 5000);
  })