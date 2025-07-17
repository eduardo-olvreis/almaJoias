
//Função para mudar a cor do topoHeader ao rolar a página
window.addEventListener('scroll', function() {
    const topoHeader = document.querySelector('.topoHeader');
    if (window.scrollY > window.innerHeight - 80) { // 80 = altura do topoHeader
        topoHeader.classList.add('scrolled');
    } else {
        topoHeader.classList.remove('scrolled');
    }
});
