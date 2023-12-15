const row = document.querySelector(".row");


const ROWS = 3
const COLS = 3

const SYMBOLS_COUNT = {
    ruby: 3,
    emerald: 5,
    diamond: 7,
    coin: 9
}

const SYMBOLS_VALUE = {
    ruby: 5,
    emerald: 4,
    diamond: 3,
    coin: 2
}

function deposit(){
    const depositValue = parseFloat(prompt('Insert a value:'))

    if(isNaN(depositValue) || depositValue <= 0){
        alert('Invalid value')
        return
    }else{
        updateBalance(depositValue, true)
        return
    }
}

function updateBalance(depositValue, isAdding, win, value){
    const currentBalance = Number(document.getElementById('balance').innerHTML)
    document.querySelector('#balance').innerText = parseFloat(depositValue + currentBalance)

    if(isAdding || win){
        document.querySelector('#balance').innerText = depositValue + currentBalance
    }else{
        document.querySelector('#balance').innerText = currentBalance - value
    }
}

function getRandomSymbol(){
    const symbols = [
        'ruby',
        'emerald',
        'diamond',
        'coin'
    ]

    const index = Math.floor(Math.random() * symbols.length)

    return symbols[index]
}

function spin(){
    const row = document.querySelector('.row')
    const balance = parseFloat(document.getElementById('balance').innerHTML)
    const bet = parseFloat(document.getElementById('bet').value)

    console.log(balance, bet)

    if(balance < bet){
        alert('Insufficient funds')
        return
    }else{

        updateBalance(0, false, false, bet)

        const symbols = [];

        for(let i = 0; i < ROWS; i++){
            for(let j = 0; j < COLS; j++){
                const randomSymbol = getRandomSymbol()
                symbols.push(randomSymbol)
            }
        }

        for(let i = 0; i < ROWS; i++){
            for(let j = 0; j < COLS; j++){
                const img = document.createElement('img')
                img.src = `./Assets/imgs/${symbols[i * COLS + j]}.png`
                img.classList.add('symbol')
                row.children[i].appendChild(img)
            }
        }

        const cols = document.querySelectorAll('.col')

        cols.forEach(col => {
        })
    }
}