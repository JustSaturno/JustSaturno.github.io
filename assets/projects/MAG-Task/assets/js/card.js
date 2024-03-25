const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");

var nome;
var email;

function edit(button) {
    nome = document.querySelector('.name').innerHTML;
    email = document.querySelector('.email').innerHTML;

    nameInput.setAttribute("contenteditable", "true");
    emailInput.setAttribute("contenteditable", "true");

    button.parentElement.querySelector(".oculto").classList.remove("oculto");
    button.classList.add("oculto");

    button.parentElement.querySelector('.limpar').setAttribute("onclick", "cancel(this)");
}

function confirm(button) {
    nameInput.setAttribute("contenteditable", "false");
    emailInput.setAttribute("contenteditable", "false");

    button.parentElement.querySelector(".oculto").classList.remove("oculto");
    button.classList.add("oculto");

    button.parentElement.querySelector('.limpar').setAttribute("onclick", "delete(this)");
}

function cancel(button) {
    let nameInput = document.querySelector(".name");
    let emailInput = document.querySelector(".email");

    nameInput.innerHTML = nome;
    emailInput.innerHTML = email;

    button.setAttribute("onclick", "delete(this)");

    document.querySelector(".confirm").classList.add("oculto");
    document.querySelector(".edit").classList.remove("oculto");

};