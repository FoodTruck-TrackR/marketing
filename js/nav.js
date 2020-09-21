const mobileMenu = document.querySelector('.mobile-menu'); 
const navLinks = document.querySelector('.nav-links')
const link = document.querySelectorAll(".nav-links li")

const navbar = document.querySelector("nav");
const sticky = navbar.offsetTop;

mobileMenu.addEventListener('click' , () => { 
    navLinks.classList.toggle("open")

})

window.onscroll = function() {
    stickyFunction()
};

function stickyFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

