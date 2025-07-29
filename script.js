
//Função para mudar a cor do topoHeader ao rolar a página
window.addEventListener('scroll', function() {
    const topoHeader = document.querySelector('.topoHeader');
    if (window.scrollY > window.innerHeight - 80) { // 80 = altura do topoHeader
        topoHeader.classList.add('scrolled');
    } else {
        topoHeader.classList.remove('scrolled');
    }
});

//Evento para scrollar o inicio da página
/*let scrolling = false
let lastScroll = 0

window.addEventListener("scroll", function () {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll < lastScroll) { //Scrollou pra cima
        scrollUp();
    } else{                           //Scrolou pra baixo
        scrollDown();
    }

    lastScroll = currentScroll <= 0 ? 0 : currentScroll; // Evita numeros negativos
});

function scrollUp(){  
    const header = document.getElementById("topo")
    const alturaHeader = header.offsetHeight
    if(window.scrollY <= alturaHeader && !scrolling){
        scrolling = true
        window.scrollTo({ top: 0, behavior: "smooth"})
        setTimeout(() => {
            scrolling = false
        }, 300)
    }
    console.log(alturaHeader)
}

function scrollDown(){
    const header = document.getElementById("topo")
    const alturaHeader = header.offsetHeight
    if(window.scrollY < (alturaHeader) && !scrolling){
        scrolling = true
        window.scrollTo({ top: alturaHeader, behavior: 'smooth' });
        setTimeout(() => {
            scrolling = false
        }, 300)
    }
}
    */


//Função para abrir o menu
let menuLateral = document.querySelector(".menuLateral")
let abreMenu = document.querySelector(".topoEsquerda")
let fechaMenu = document.getElementById("fecharMenu")
let blurMenu = document.querySelector(".blur")

function toggleMenu(){
    menuLateral.classList.toggle("active");
    blurMenu.classList.toggle("active");
}

abreMenu.addEventListener("click", toggleMenu)
fechaMenu.addEventListener("click", toggleMenu)
blurMenu.addEventListener("click", toggleMenu)