//Swiper
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

  

//Animação de cabecalho no scroll
window.addEventListener('scroll', function(){
    var cabecalho = document.querySelector('.cabecalho');
    cabecalho.classList.toggle("cabecalho-move", window.scrollY > 100);
    var cabecalhoItens = document.querySelectorAll('.cabecalho-item');

    for (var x = 0; x < cabecalhoItens.length; x++) {
      cabecalhoItens[x].classList.toggle("cabecalho-item-move", window.scrollY > 100);
      
    }
});

  


//Modificação de cor no cabeçalho no scroll
window.addEventListener('scroll', function(){
    var cabecalhoItens = document.querySelectorAll('.cabecalho-item');
    cabecalhoItens[0].classList.toggle("cabecalho-ativo", window.scrollY >= 0  & window.scrollY < 700);
    cabecalhoItens[1].classList.toggle("cabecalho-ativo", window.scrollY >= 700 & window.scrollY < 1450);
    cabecalhoItens[2].classList.toggle("cabecalho-ativo", window.scrollY >= 1450 & window.scrollY < 3230);
    cabecalhoItens[3].classList.toggle("cabecalho-ativo", window.scrollY >= 3230 & window.scrollY < 3900);
    cabecalhoItens[4].classList.toggle("cabecalho-ativo", window.scrollY >= 3900 & window.scrollY < 5000);
});



//Botão mostrar mais em presentes
var mostrar = document.querySelector(".botao-mostrar");
mostrar.addEventListener("click", function(){
    var presentes = document.querySelector(".presentes")
    presentes.classList.toggle("mostrar-mais")

    if(presentes.classList.contains("mostrar-mais")) {
      return mostrar.textContent = "Mostrar menos";
      
    }
    mostrar.textContent = "Mostrar mais"
    
});


//Botão do cabeçalho
var botaoCabecalhoMobile = document.querySelector('.botao-mobile-only');
botaoCabecalhoMobile.addEventListener('click', function(){
    var cabecalhoItem = document.querySelectorAll('.cabecalho-item');
    for ( x = 0; x < cabecalhoItem.length; x++) {
      cabecalhoItem[x].classList.toggle('cabecalho-item-ativo');
    
    }

    var body = document.querySelector('.body');
    body.classList.toggle('body-invisivel')




    

})