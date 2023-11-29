const header = document.querySelector(".header-bg");
const sections = document.querySelectorAll("section");

window.onscroll = () => {

    var fixed = 0;
    if (window.scrollY > fixed) {
        header.classList.add("top");
    } else {
        header.classList.remove("top");
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