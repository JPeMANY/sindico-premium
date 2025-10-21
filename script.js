const botaoMobileMenu = document.querySelector('.botao-menu-mobile');
const menuMobile = document.querySelector('.menu-mobile');

botaoMobileMenu.addEventListener('click', () => {
    menuMobile.classList.toggle('none-mobile');
})