const uri = "http://localhost:3000";
const errorMessage = document.querySelector(".error-message p");

function togglePassword(item) {
    item.parentElement.querySelector("input").type = item.parentElement.querySelector("input").type == "password" ? "text" : "password";
    item.querySelector("i").classList.toggle("bi-eye-slash-fill");
    item.querySelector("i").classList.toggle("bi-eye-fill");
}

function formRegister(e) {
    e.preventDefault();
    let form = e.target;
    let name = form.name.value;
    let nameInput = form.name;
    let email = form.email.value;
    let password = form.password.value;
    let confirmPassword = form.confirmPassword.value;
    let emailInput = form.email;
    let passwordInput = form.password;
    let confirmPasswordInput = form.confirmPassword;

    form.querySelectorAll("input").forEach(input => {
        input.addEventListener("input", () => {
            if(input.classList.contains("error")) {
                input.classList.remove("error");
                return;
            }
        })
    });

    if(name == "" || email == "" || password == "" || confirmPassword == "") {
        if(name == "") {
            nameInput.classList.add("error");
        } else if(email == "") {
            emailInput.classList.add("error");
        } else if(password == "") {
            passwordInput.classList.add("error");
        } else if(confirmPassword == "") {
            confirmPasswordInput.classList.add("error");
        }
        return;
    }

    if(password != confirmPassword) {
        passwordInput.classList.add("error");
        confirmPasswordInput.classList.add("error");
        errorMessage.textContent = "Password does not match";
        return;
    }

    const data = {
        nome: name,
        email,
        senha: password
    }

    fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
        if(res.status == 400) {
            if(res.message == "Email already exists") {
                errorMessage.textContent = "Email already exists";
                emailInput.classList.add("error");
            }
        } else if(res.status == 201) {
            window.location.href = '../pages/login.html';
        }
    })
}

function formLogin(e) {
    e.preventDefault();
    let form = e.target;
    let email = form.email.value;
    let password = form.password.value;
    let emailInput = form.email;
    let passwordInput = form.password;

    form.querySelectorAll("input").forEach(input => {
        input.addEventListener("input", () => {
            if(input.classList.contains("error")) {
                input.classList.remove("error");
                return;
            }
        })
    });
 
    if(email == "" || password == "") {
        if(email == "") {
            form.email.classList.add("error");
        } else {
            form.password.classList.add("error");
        }
        return;
    }

    const data = {
        email,
        senha: password
    }

    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
        if(res.status == 401) {
            if(res.type == 'password') {
                errorMessage.textContent = res.message;
                passwordInput.classList.add('error');
            } else {
                errorMessage.textContent = res.message;
                emailInput.classList.add('error');
            }

        } else if (res.status == 200) {
           alert('Login feito com sucesso!');
        }
    })
}