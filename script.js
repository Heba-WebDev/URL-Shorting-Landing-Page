

let mobileMenu = document.querySelector('.mobile-menu');
mobileMenu.style.display = 'none';

let mobileHamburgerIcon = document.querySelector('.fa-bars');

mobileHamburgerIcon.addEventListener('click', showMobileMenu);

function showMobileMenu() {

    if(mobileMenu.dataset.mobileMenu == "false") {
        mobileMenu.style.display = '';
        mobileMenu.dataset.mobileMenu = "true"
    } else {
        mobileMenu.style.display = 'none';
        mobileMenu.dataset.mobileMenu = "false"
    }
    
}