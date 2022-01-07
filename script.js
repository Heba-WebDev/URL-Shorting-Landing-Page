

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


let longURL = "kooora.com"


fetch(`https://api.shrtco.de/v2/shorten?url=${longURL}`, {
  method: 'GET'
})
.then(response => response.json())
.then(data => {
  console.log(data.result.short_link);
})
.catch(error => {
  console.error('Error:', error);
});