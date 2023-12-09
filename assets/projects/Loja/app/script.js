var MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

const file = document.getElementById('file')
const cardsContainer = document.querySelector('.cards')
const loginForm = document.querySelector('#login-form')
const registerForm = document.querySelector('#register-form')
const errorLogin = document.querySelector('#error-login')
const errorRegister = document.querySelector('#error-register')
var logged = false

var dados = {
    usuarios: [],
    itens: [],
    vendas: []
}

var usuario = {}

// Lendo o arquivo

file.addEventListener('change', (e) => {
    const file = e.target.files[0]
    let reader = new FileReader()

    reader.readAsText(file)

    reader.onload = () => {
        dados = JSON.parse(reader.result)
        document.querySelector('.file-upload').classList.add('hidden')
        document.querySelector('.buttons').classList.remove('hidden')
        document.querySelector('footer').removeAttribute('style')
        document.querySelector('.text-container').classList.add('hidden')
        document.querySelector('.container').classList.remove('hidden')
        cards()
        menuLogo()
        loadPurchase()
    }
})

// Verificando se o usuário esta logado

function loginVerification(p) {
    if(p == 'login') {
        dados.usuarios.forEach((user) => {
            if(user.email.toLowerCase() == loginForm.email.value.toLowerCase() && user.password == MD5(loginForm.password.value)) {
                usuario = user
                logged = true
                document.querySelector('.login-animation-bg').classList.add('active')
                document.querySelector('#login-animation-text').innerHTML = `Bem vindo(a), <span>${user.name.split(' ')[0]}</span>`
                setTimeout(() => {
                    loginForm.reset()
                    menu(logged, user.name)
                    addForm(logged, user.type)
                    cards()
                    heart(logged)
                    setTimeout(() => {
                        document.querySelector('.login-animation-bg').classList.remove('active')
                        document.querySelector('.login-animation').classList.add('hidden')
                    }, 1500)
                }, 1500)
            }
        })
        if(logged == false) {
            errorLogin.innerHTML = 'Email ou senha inválidos'
            setTimeout(() => {
                errorLogin.innerHTML = ''
            }, 1500)
        }
    }else if(p == 'register') {
        dados.usuarios.forEach((user) => {
            if(user.email.toLowerCase() == registerForm.email.value.toLowerCase() && user.password == MD5(registerForm.password.value)) {
                usuario = user
                logged = true
                document.querySelector('.login-animation-bg').classList.add('active')
                document.querySelector('#login-animation-text').innerHTML = `Bem vindo(a), <span>${user.name.split(' ')[0]}</span>`
                setTimeout(() => {
                    registerForm.reset()
                    menu(logged, user.name)
                    cards()
                    heart(logged)
                    setTimeout(() => {
                        document.querySelector('.login-animation-bg').classList.remove('active')
                        document.querySelector('.login-animation').classList.add('hidden')
                    }, 1500)
                }, 1500)
            }
        })
    }
    
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    loginVerification('login')
})

// Deslogando o usuário

document.querySelector('.logout').addEventListener('click', () => {
    logged = false
    usuario = {}
    document.querySelector('.wishlist').classList.remove('active')
    document.querySelector('#purchase-list').classList.add("hidden")
    document.querySelector('.purchased-container').classList.add('hidden')
    menu(logged)
    addForm(logged, null)
    cards()
    heart(logged)
})

// Registrando um novo usuário

registerForm.addEventListener('submit', (e) => {
    e.preventDefault()

    if(registerForm.password.value != registerForm['password-confirm'].value) {
        errorRegister.innerHTML = 'As senhas precisam ser iguais'
        setTimeout(() => {
            errorRegister.innerHTML = ''
        }, 1500)
        return
    }

        var confirm = true
        dados.usuarios.forEach((user) => {
            if(user.email.toLowerCase() == registerForm.email.value.toLowerCase()) {
                errorRegister.innerHTML = 'Email ja registrado'
                confirm = false
                setTimeout(() => {
                    errorRegister.innerHTML = ''
                },1500)
                return
            }
        })

        if(confirm && registerForm.password.value.length > 4){
            dados.usuarios.push({
                Id: dados.usuarios.length + 1,
                name: registerForm.username.value,
                email: registerForm.email.value,
                password: MD5(registerForm.password.value),
                type: 'user'
            })
            localStorage.setItem('dados', JSON.stringify(dados))
            console.log(dados)
            loginVerification('register')
        }else if(confirm){
            errorRegister.innerHTML = 'A senha é muito fraca'
            setTimeout(() => {
                errorRegister.innerHTML = ''
            }, 1500)
        }
})

// Criando os cards em referência a quantos itens existem no arquivo JSON

function cards() {
    var heartsSave = []

    if(logged){
        document.querySelectorAll('.heart').forEach((heart) => {
            if(heart.classList.contains('liked')) {
                heartsSave.push(heart.parentElement.parentElement.parentElement.getAttribute('item-id'))
            }
        })
    }else {
        wishlist = []
        listAdd()
    }
    

    cardsContainer.innerHTML = ''
    cardsContainer.innerHTML = `
    <div class="card model">
        <div class="card-icons">
            <i class="bi bi-trash3-fill delete hidden" style="cursor: not-allowed"></i>
            <i class="bi bi-pencil-square edit hidden" style="cursor: not-allowed"></i>
        </div>
        <div class="discount-img hidden">
            <img src="../assets/firecomfire.png" draggable="false">
        </div>
        <div class="main-image">
            <img src="" onerror="this.src='../assets/noimage.jpg'" class="main-img" draggable="false">
            <img src="" onerror="this.src='../assets/noimage.jpg'" class="hover-img" draggable="false">
            <img src="../assets/soldout.png" onerror="this.src='../assets/noimage.jpg'" class="soldout hidden" draggable="false">
        </div>
        <div class="info">
            <h1>Nome</h1>
            <p>Descrição</p>
            <div class="rating">
                
            </div>
            <div class="stock">
                <p class="stock-value">Estoque: <span>0</span></p>
            </div>
        </div>
        <div class="buy">
            <div class="price">
                <p class="price-value">Preço</p>
                <p class="discount subtext">Desconto</p>
                <p class="percentage subtext">Porcentagem</p>
            </div>
            <div class="add">
                <div class="heart-text hidden">
                    <p>Login necessário</p>
                    <div class="arrow-down"></div>
                </div>
                <img src="../assets/heart.png" class="heart" draggable="false">
            </div>
        </div>
    </div>
        `
    dados.itens.forEach((item, i) => {
        const model = document.querySelector('.model').cloneNode(true)
        let price = item.price
        let discountImg = model.querySelector('.discount-img')


        if(item.discount == 0 && item.stock < 6){
            item.discount = 10
            var discount = (item.price * (100 - item.discount) / 100)
            percentage = `-${10}%`
            model.classList.add('item-discount')
            discountImg.classList.remove('hidden')
        }

        if(item.discount > 0) {
            var discount = (item.price * (100 - item.discount) / 100)
            percentage = `-${item.discount}%`
            model.classList.add('item-discount')
            discountImg.classList.remove('hidden')
        }else {
            var discount = item.price
            price = 0
            percentage = ''
        }

        if(logged && usuario.type == 'Manager'){
            document.querySelector('#purchase-list').classList.remove("hidden")
            model.querySelector('.delete').classList.remove('hidden')
            model.querySelector('.edit').classList.remove('hidden')
            model.querySelector('.delete').removeAttribute('style')
            model.querySelector('.edit').removeAttribute('style')
            userType(usuario.type, model.querySelector('.delete'), model.querySelector('.edit'), i)
        }else if(logged && usuario.type == 'Supervisor'){
            document.querySelector('#purchase-list').classList.remove("hidden")
            model.querySelector('.edit').classList.remove('hidden')
            model.querySelector('.edit').removeAttribute('style')
            userType(usuario.type, null, model.querySelector('.edit'), i)
        }

        if(item.stock == 0){
            model.querySelector('.soldout').classList.remove('hidden')
        }     

        model.classList.remove('model')
        model.setAttribute('item-id', item.id)
        model.classList.add(item.type)
        model.querySelector('h1').innerHTML = item.name
        model.querySelector('p').innerHTML = item.description
        model.querySelector('.price-value').innerHTML = `R$<span>${Number(discount).toFixed(2).replace('.', ',')}</span>`
        model.querySelector('.discount').innerHTML = price > 0 ? `R$${Number(price).toFixed(2).replace('.', ',')}` : ''
        model.querySelector('.stock-value span').innerHTML = item.stock
        model.querySelector('.percentage').innerHTML = percentage
        model.querySelector('.hover-img').src = item.imageHover
        model.querySelector('.main-img').src = item.image == '404' ? '../assets/noimage.jpg' : item.image
        const rating = model.querySelector('.rating')
        for (let i = 0; i < 5; i++) {
            if (i < item.stars) {
                rating.innerHTML += `<img src="../assets/star.png" draggable="false">`
            } else {
                rating.innerHTML += `<img src="../assets/star-empty.png" draggable="false">`
            }
        }

        cardsContainer.appendChild(model)
    })
    document.querySelector('.model').remove();
    dropdown()
    wishlistRecicle()

    heart(logged)

    if(heartsSave.length > 0){
        heartsSave.forEach((item) => {
            if(document.querySelector(`[item-id="${item}"] .heart`)){
                document.querySelector(`[item-id="${item}"] .heart`).classList.add('liked')
                document.querySelector(`[item-id="${item}"] .heart`).src = '../assets/heartfill.png'
            }
        })
    }
}