const mobileMenu = document.querySelector('.mobile-menu'); 

const navLinks = document.querySelector('.nav-links')

const link = document.querySelectorAll(".nav-links li")

mobileMenu.addEventListener('click' , () => { 
    navLinks.classList.toggle("open")

})