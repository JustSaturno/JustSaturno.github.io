const header = document.querySelector(".header-bg");

window.onscroll = function() {
    var fixed = 0;
    if (window.scrollY > fixed) {
        header.classList.add("top");
    } else {
        header.classList.remove("top");
    }
};
