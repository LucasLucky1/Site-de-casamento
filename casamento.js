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
    cabecalhoItens[2].classList.toggle("cabecalho-ativo", window.scrollY >= 1450 & window.scrollY < 4700);
    cabecalhoItens[3].classList.toggle("cabecalho-ativo", window.scrollY >= 4700 & window.scrollY < 5600);
    cabecalhoItens[4].classList.toggle("cabecalho-ativo", window.scrollY >= 5600 );
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

//Adicionando função de remover menu ao clicar no elemento
    cabecalhoItem.forEach(elemento => { 
        elemento.addEventListener('click',()=>{
            //removendo background transparente
            body.classList.remove('body-invisivel');

            for ( x = 0; x < cabecalhoItem.length; x++) {
                cabecalhoItem[x].classList.remove('cabecalho-item-ativo');
              
              }
        })
    });
    




    

});




// //Botão nossa história - ela aprimorado (tentativa)
// var historiaEla = document.querySelectorAll('.historia-ela');
// var boxHistoriasAbertoEla = document.querySelectorAll('.box-historias-aberto-ela');
// var contadorHistoria = 0
// var y = 0
// while (contadorHistoria< historiaEla.length) {
    
//         historiaEla[contadorHistoria].addEventListener('click', ()=>{
        
//         boxHistoriasAbertoEla[y].classList.toggle('box-historias-aberto-ela-ativo');
        
//     });
//     y++
//     contadorHistoria++
// }


// Botão nossa história - ela
var historiaEla1 = document.querySelector('.historia-ela-1');

historiaEla1.addEventListener('click', function(){
  
    var boxHistoriasAbertoEla1 = document.querySelector(".box-historias-aberto-ela-1");
    boxHistoriasAbertoEla1.classList.toggle('box-historias-aberto-ela-ativo');
    historiaEle1.classList.toggle('esconde-historia');

});



var historiaEla2 = document.querySelector('.historia-ela-2');

historiaEla2.addEventListener('click', function(){
  
    var boxHistoriasAbertoEla2 = document.querySelector(".box-historias-aberto-ela-2");
    boxHistoriasAbertoEla2.classList.toggle('box-historias-aberto-ela-ativo');
    historiaEle2.classList.toggle('esconde-historia');

});

var historiaEla3 = document.querySelector('.historia-ela-3');

historiaEla3.addEventListener('click', function(){
  
    var boxHistoriasAbertoEla3 = document.querySelector(".box-historias-aberto-ela-3");
    boxHistoriasAbertoEla3.classList.toggle('box-historias-aberto-ela-ativo');
    historiaEle3.classList.toggle('esconde-historia');

});

var historiaEla4 = document.querySelector('.historia-ela-4');

historiaEla4.addEventListener('click', function(){
  
    var boxHistoriasAbertoEla4 = document.querySelector(".box-historias-aberto-ela-4");
    boxHistoriasAbertoEla4.classList.toggle('box-historias-aberto-ela-ativo');
    historiaEle4.classList.toggle('esconde-historia');

});




//Botão nossa história - ele
var historiaEle1 = document.querySelector('.historia-ele-1');

historiaEle1.addEventListener('click', function(){
  
    var boxHistoriasAbertoEle1 = document.querySelector(".box-historias-aberto-ele-1");
    boxHistoriasAbertoEle1.classList.toggle('box-historias-aberto-ele-ativo');
    historiaEla1.classList.toggle('esconde-historia');

});



var historiaEle2 = document.querySelector('.historia-ele-2');

historiaEle2.addEventListener('click', function(){
  
    var boxHistoriasAbertoEle2 = document.querySelector(".box-historias-aberto-ele-2");
    boxHistoriasAbertoEle2.classList.toggle('box-historias-aberto-ele-ativo');
    historiaEla2.classList.toggle('esconde-historia');

});

var historiaEle3 = document.querySelector('.historia-ele-3');

historiaEle3.addEventListener('click', function(){
  
    var boxHistoriasAbertoEle3 = document.querySelector(".box-historias-aberto-ele-3");
    boxHistoriasAbertoEle3.classList.toggle('box-historias-aberto-ele-ativo');
    historiaEla3.classList.toggle('esconde-historia');

});

var historiaEle4 = document.querySelector('.historia-ele-4');

historiaEle4.addEventListener('click', function(){
  
    var boxHistoriasAbertoEle4 = document.querySelector(".box-historias-aberto-ele-4");
    boxHistoriasAbertoEle4.classList.toggle('box-historias-aberto-ele-ativo');
    historiaEla4.classList.toggle('esconde-historia');

});

var historiaEle5 = document.querySelector('.historia-ele-5');

historiaEle5.addEventListener('click', function(){
    
   
       
    var boxHistoriasAbertoEle5 = document.querySelector(".box-historias-aberto-ele-5");
    boxHistoriasAbertoEle5.classList.toggle('box-historias-aberto-ele-ativo');
    


});
