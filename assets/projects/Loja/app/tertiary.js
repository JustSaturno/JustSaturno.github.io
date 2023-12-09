const editPrompt = document.querySelector(".edit-prompt")
const addPrompt = document.querySelector(".add-prompt")
const wishlistBag = document.querySelector('#bag')

var wishlist = []

function userType(role, deleteBtn, editBtn, indice) {
    if(role == "Manager" || role == "Supervisor") {
        if(role == "Manager") {
            deleteBtn.addEventListener("click", (e) => {
                var item = e.target.parentElement.parentElement
                var itemId = Number(item.getAttribute('item-id'))
                if(confirm('Você deseja deletar o item?') == true){
                    dados.itens.splice(indice, 1)
                    cards()

                    wishlist.forEach((item, index) => {
                        if (item.id == itemId) {
                            wishlist.splice(index, 1)
                        }
                    })
                    listAdd()
                }
                    
            })
        }
        editBtn.addEventListener("click", (e) => {

            var itemE = e.target.parentElement.parentElement
            var itemId = Number(itemE.getAttribute('item-id'))

            editPrompt.classList.remove("hidden")

            editPrompt.querySelector('#edit-name').value = dados.itens[indice].name
            editPrompt.querySelector('#edit-description').value = dados.itens[indice].description
            editPrompt.querySelector('#edit-price').value = dados.itens[indice].price
            editPrompt.querySelector('#edit-discount').value = dados.itens[indice].discount
            editPrompt.querySelector('#edit-stars').value = dados.itens[indice].stars
            editPrompt.querySelector('#edit-stock').value = dados.itens[indice].stock

            editPrompt.querySelector('#edit-form').addEventListener("reset", (e) => {
                e.preventDefault()

                editPrompt.querySelector('#edit-name').value = dados.itens[indice].name
                editPrompt.querySelector('#edit-description').value = dados.itens[indice].description
                editPrompt.querySelector('#edit-price').value = dados.itens[indice].price
                editPrompt.querySelector('#edit-discount').value = dados.itens[indice].discount
                editPrompt.querySelector('#edit-stars').value = dados.itens[indice].stars
                editPrompt.querySelector('#edit-stock').value = dados.itens[indice].stock
            })

            editPrompt.querySelector('#edit-form').addEventListener("submit", (e) => {
                e.preventDefault()

                if(Number(editPrompt.querySelector('#edit-price').value) < 0 || Number(editPrompt.querySelector('#edit-price').value) > 10000 ){
                    alert('O preço deve estar entre 0 e 10.000')
                    return
                }

                dados.itens[indice].name = editPrompt.querySelector('#edit-name').value
                dados.itens[indice].description = editPrompt.querySelector('#edit-description').value
                dados.itens[indice].price = Number(editPrompt.querySelector('#edit-price').value.replace(',', '.'))
                dados.itens[indice].discount = editPrompt.querySelector('#edit-discount').value.replace(',', '.')
                dados.itens[indice].stars = editPrompt.querySelector('#edit-stars').value
                dados.itens[indice].stock = editPrompt.querySelector('#edit-stock').value
                editPrompt.classList.add("hidden")
                cards()

                let itemDiscount = (dados.itens[indice].price * (100 - dados.itens[indice].discount) / 100)

                wishlist.forEach((item, index) => {
                    if (item.id == itemId) {
                        console.log(dados.itens[indice].name, Number(itemE.querySelector('.price-value').querySelector('span').innerHTML.replace(',', '.')))
                        wishlist[index].name = dados.itens[indice].name
                        wishlist[index].price = Number(itemDiscount)
                    }
                })
                listAdd()
                indice = null
            })
            
            editPrompt.querySelector('#edit-form').addEventListener("reset", () => {
                indice = null
                editPrompt.classList.add("hidden")
            })
        })
    }
}

wishlistBag.addEventListener('click', () => {
    document.querySelector('.wishlist').classList.toggle('active')
})

function wishlistQty(){
    const dashIcon = document.querySelectorAll('.dash-icon')
    const plusIcon = document.querySelectorAll('.plus-icon')

    dashIcon.forEach((dash) => {
        if(dash.parentElement.querySelector('.product-quantity').innerHTML == 1) {
            dash.style.cursor = "not-allowed"
        } else {
            dash.addEventListener('click', (e) => {
                e.target.parentElement.querySelector('.plus-icon').style.cursor = "pointer"
                if(e.target.parentElement.querySelector('.product-quantity').innerHTML > 1){
                    dash.style.cursor = "pointer"
                    e.target.parentElement.querySelector('.product-quantity').innerHTML = Number(e.target.parentElement.querySelector('.product-quantity').innerHTML) - 1
                    if(e.target.parentElement.querySelector('.product-quantity').innerHTML == 1){
                        dash.style.cursor = "not-allowed"
                    }
                }
                calculate(e.target.parentElement)
            })
        }
        
    })


    plusIcon.forEach((plus) => {
        var stock = 0
        if(plus.parentElement.querySelector('.product-quantity').innerHTML == 10) {
            plus.style.cursor = "not-allowed"
        } else {
            plus.addEventListener('click', (e) => {
                e.target.parentElement.querySelector('.dash-icon').style.cursor = "pointer"
                if(e.target.parentElement.querySelector('.product-quantity').innerHTML < 10) {

                    dados.itens.forEach((item) => {
                        if(item.id == Number(e.target.parentElement.parentElement.parentElement.getAttribute('item-id'))){
                            stock = item.stock 
                        }
                    })

                    if(e.target.parentElement.querySelector('.product-quantity').innerHTML == stock){
                        plus.style.cursor = "not-allowed"
                    }else if(e.target.parentElement.querySelector('.product-quantity').innerHTML < stock){
                        plus.style.cursor = "pointer"
                        e.target.parentElement.querySelector('.product-quantity').innerHTML = Number(e.target.parentElement.querySelector('.product-quantity').innerHTML) + 1
                        if(e.target.parentElement.querySelector('.product-quantity').innerHTML == 10){
                            plus.style.cursor = "not-allowed"
                        }
                    }
                }
                calculate(e.target.parentElement)
            })
        } 
    })
}

function calculate(target){
    wishlist.forEach((item) => {
        if(target.parentElement.parentElement.getAttribute('item-id') == item.id){
            console.log(target.parentElement.parentElement.getAttribute('item-id'))
            item.quantity = Number(target.querySelector('.product-quantity').innerHTML)
            listAdd()
        }
    })
}

// ADD

function addForm(logged, userType){
    if(logged && userType == "Manager" || userType == "Supervisor"){
        document.querySelector('.add-btn-menu').classList.remove('hidden')
        document.querySelector('#cancel-add').onclick = () => {
            addPrompt.classList.add('hidden')
        }
        var bool = false
        document.querySelector('#add-btn').onclick = () => {
            var itemType = ''
            addPrompt.classList.toggle('hidden')
            

            if(bool == false){
                document.querySelector('#add-form').addEventListener('submit', (e) => {
                    e.preventDefault()
    
                    if(Number(addPrompt.querySelector('#add-price').value) < 0 || Number(addPrompt.querySelector('#add-price').value) > 10000 ){
                        alert('O preço deve estar entre 0 e 10.000')
                        return
                    }
    
                    if(document.querySelector('.radio-selector').querySelector('input:checked') != null){
                        switch(document.querySelector('.radio-selector').querySelector('input:checked').value){
                        
                            case 'jogo':
                                itemType = 'game'
                                break
                            case 'console':
                                itemType = 'console'
                                break
                            case 'acessorio':
                                itemType = 'accessory'
                                break
                        }
                    }

                    if(addPrompt.querySelector('#add-name').value == ''){
                        alert('Escreva o nome do item')
                        return
                    }

                    if(addPrompt.querySelector('#add-price').value == ''){
                        alert('Escreva o preço do item')
                        return
                    }

                    if(addPrompt.querySelector('#add-stock').value == ''){
                        alert('Escreva o estoque do item')
                        return
                    }

                    if(itemType == 'game'){
                        if(addPrompt.querySelector('#add-description').value == ''){
                            alert('Escreva a descrição do item contendo informações sobre o console que o jogo roda')
                            return
                        }
                    }

                    if(document.querySelector('#add-image-one').value == ''){
                        alert('Escolha pelo menos uma imagem')
                        return
                    }

                    if(itemType == 'game'){
                        if(document.querySelector('#add-image-two').value == ''){
                            alert('Imagem obrigatoria para jogos')
                            return
                        }
                    }
    
                    if(itemType == ''){
                        alert('Selecione o tipo do item')
                        return
                    }else{
                        var item = {
                            id: dados.itens.length + 1,
                            type: itemType,
                            name: addPrompt.querySelector('#add-name').value,
                            description: addPrompt.querySelector('#add-description').value,
                            price: Number(addPrompt.querySelector('#add-price').value.replace(',', '.')),
                            discount: addPrompt.querySelector('#add-discount').value.replace(',', '.'),
                            image: document.querySelector('#add-image-one').value,
                            imageHover: document.querySelector('#add-image-two').value,
                            stars: addPrompt.querySelector('#add-stars').value,
                            stock: addPrompt.querySelector('#add-stock').value
                        }
                        document.querySelector('#add-form').reset()
        
                        dados.itens.push(item)
                        cards()
                        addPrompt.classList.add('hidden')
                    }
                    bool = true
                })
            }else{
                bool = false
            }
            
        }
    }else {
        document.querySelector('.add-btn-menu').classList.add('hidden')
    }
    
    
}