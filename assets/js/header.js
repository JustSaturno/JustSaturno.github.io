const header = document.querySelector(".header-bg");
const sections = document.querySelectorAll("section");

window.onscroll = () => {

    var fixed = 0;
    if (window.scrollY > fixed) {
        header.classList.add("top-header");
    } else {
        header.classList.remove("top-header");
    }

    sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 200;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            document.querySelector(".header-bg ul li a[href*=" + id + "]").classList.add("active"); 
        } else {
            document.querySelector(".header-bg ul li a[href*=" + id + "]").classList.remove("active");
        }
    }
)}

function hamburger() {
    const isOpened = document.querySelector('.hamburger-button').getAttribute('aria-expanded')
    if(isOpened === "false"){
        document.querySelector('.hamburger-button').setAttribute('aria-expanded', true)
        document.querySelector('.header-bg nav ul').classList.toggle('active-ul')
        document.querySelector('.header-bg').classList.toggle('header-bg-active')
    }else{
        document.querySelector('.hamburger-button').setAttribute('aria-expanded', false)
        document.querySelector('.header-bg nav ul').classList.toggle('active-ul')
        setTimeout(() => {
            document.querySelector('.header-bg').classList.toggle('header-bg-active')
        }, 750);
        
    }
}