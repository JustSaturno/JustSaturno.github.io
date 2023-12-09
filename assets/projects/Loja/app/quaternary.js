const dropdowns = document.querySelectorAll('.dropdown')

const reclicle = document.querySelector('.bi-recycle')

reclicle.addEventListener('mouseover', () => {
    document.querySelector('.wishlist-text').classList.remove('hidden')
})

reclicle.addEventListener('mouseout', () => {
    document.querySelector('.wishlist-text').classList.add('hidden')
})

function dropdown(){
    const cardsFilter = document.querySelectorAll('.card')
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            var mouseTarget = e.target

            if(mouseTarget.querySelector('i') != null){
                mouseTarget = mouseTarget.querySelector('i').innerHTML
            }else {
                mouseTarget = mouseTarget.innerHTML
            }
            if(mouseTarget == "Todos"){
                cardsFilter.forEach(card => {
                    card.classList.remove('hidden')
                })
            }else if(mouseTarget == "Desconto") { 
                cardsFilter.forEach(card => {
                    card.classList.remove('hidden')
                    if(!card.classList.contains('item-discount')){
                        card.classList.add('hidden')
                    }
                })
            }else if(mouseTarget == "Consoles"){
                cardsFilter.forEach(card => {
                    card.classList.remove('hidden')
                    if(!card.classList.contains('console')){
                        card.classList.add('hidden')
                    }
                })
            }else if(mouseTarget == "PlayStation" && !e.target.classList.contains('games')){
                cardsFilter.forEach(card => {
                    card.classList.remove('hidden')
                    if(card.querySelector('h1').innerHTML.split(' ')[0] != "PlayStation"){
                        card.classList.add('hidden')
                    }
                })
            }else if(mouseTarget == "Xbox" && !e.target.classList.contains('games')){
                cardsFilter.forEach(card => {
                    card.classList.remove('hidden')
                    if(card.querySelector('h1').innerHTML.split(' ')[0] != "Xbox"){
                        card.classList.add('hidden')
                    }
                })
            }else if(mouseTarget == "Nintendo" && !e.target.classList.contains('games')){
                cardsFilter.forEach(card => {
                    card.classList.remove('hidden')
                    if(card.querySelector('h1').innerHTML.split(' ')[0] != "Nintendo"){
                        card.classList.add('hidden')
                    }
                })
            }else if(mouseTarget == "Jogos"){
                cardsFilter.forEach(card => {
                    card.classList.remove('hidden')
                    if(!card.classList.contains('game')){
                        card.classList.add('hidden')
                    }
                
                })
            }else if (mouseTarget == "PlayStation"){
                cardsFilter.forEach(card => {
                    card.classList.remove('hidden')
                    if(card.querySelector('p').innerHTML.split(' ')[0] != "PlayStation"){
                        card.classList.add('hidden')
                    }
                })
            }else if (mouseTarget == "Xbox"){
                cardsFilter.forEach(card => {
                    card.classList.remove('hidden')
                    if(card.querySelector('p').innerHTML.split(' ')[0] != "Xbox"){
                        card.classList.add('hidden')
                    }
                })
            }else if (mouseTarget == "Nintendo"){
                cardsFilter.forEach(card => {
                    card.classList.remove('hidden')
                    if(card.querySelector('p').innerHTML.split(' ')[0] != "Nintendo"){
                        card.classList.add('hidden')
                    }
                })
            }else if(mouseTarget == "Acessórios"){
                cardsFilter.forEach(card => {
                    card.classList.remove('hidden')
                    if(!card.classList.contains('accessory')){
                        card.classList.add('hidden')
                    }
                })
            }else if (mouseTarget == "Controles"){
                cardsFilter.forEach(card => {
                    card.classList.remove('hidden')
                    if(card.querySelector('h1').innerHTML.split(' ')[0] != "Controle"){
                        card.classList.add('hidden')
                    }
                })
            }else if (mouseTarget == "Headset"){
                cardsFilter.forEach(card => {
                    card.classList.remove('hidden')
                    if(card.querySelector('h1').innerHTML.split(' ')[0] != "Headset"){
                        card.classList.add('hidden')
                    }
                })
            }else if (mouseTarget == "Microfone"){
                cardsFilter.forEach(card => {
                    card.classList.remove('hidden')
                    if(card.querySelector('h1').innerHTML.split(' ')[0] != "Microfone"){
                        card.classList.add('hidden')
                    }
                })
            }else if (mouseTarget == "Mouse"){
                cardsFilter.forEach(card => {
                    card.classList.remove('hidden')
                    if(card.querySelector('h1').innerHTML.split(' ')[0] != "Mouse"){
                        card.classList.add('hidden')
                    }
                })
            }else if (mouseTarget == "Teclado"){
                cardsFilter.forEach(card => {
                    card.classList.remove('hidden')
                    if(card.querySelector('h1').innerHTML.split(' ')[0] != "Teclado"){
                        card.classList.add('hidden')
                    }
                })
            }
        })
    })
}

