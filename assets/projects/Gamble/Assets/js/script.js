const row = document.querySelector(".row");
var spining = false

var firstSpin = true

const ROWS = 3
const COLS = 100

const SYMBOLS_VALUE = {
    ruby: 7,
    emerald: 5,
    diamond: 3,
    coin: 2
}

// There is probably a better way to do this, but this is what I came up with.
// It's a bit of a mess, but it works.
// The slot machine and the symbols are random, But you will win if your bet is under $40 on the first spin.

document.querySelector('#bet-form').addEventListener('submit', function(e){
    e.preventDefault()
    spin()
})

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

function checkWin(){
    let coluns = document.querySelectorAll('.col')

        let firstSymbol = coluns[0].querySelectorAll('.symbol')[1].getAttribute('item-type')
        let secondSymbol = coluns[1].querySelectorAll('.symbol')[1].getAttribute('item-type')
        let thirdSymbol = coluns[2].querySelectorAll('.symbol')[1].getAttribute('item-type')

        if(firstSymbol && secondSymbol && thirdSymbol){
            if(firstSymbol === secondSymbol && secondSymbol === thirdSymbol){
                let bet = parseFloat(document.getElementById('bet').value)
                let firstSymbolValue = SYMBOLS_VALUE[firstSymbol]

                alert(`You won $${firstSymbolValue * bet}`)
                updateBalance(firstSymbolValue * bet, false, true, 0)
                return true
            }
        }
}


function spin(){
    if(spining){
        return
    }

    spining = true
    const row = document.querySelector('.row')
    const cols = document.querySelectorAll('.col')
    const balance = parseFloat(document.getElementById('balance').innerHTML)
    const bet = parseFloat(document.getElementById('bet').value)
    const btn = document.querySelector('#spin-btn')
    var time = 8

    if(balance < bet){
        alert('Insufficient funds')
        spining = false
        return
    }else{

        if(bet < 5){
            alert('Minimum bet is $5')
            spining = false
            return
        }

        var timer = setInterval(() => {
            time--
            btn.innerHTML = `Spin [${time}]`
            
        }, 1000);
    
        setTimeout(() => {
            clearInterval(timer)
            btn.innerHTML = 'Spin'
            spining = false
        }, 8000);

        updateBalance(0, false, false, bet)

        var symbols = [];

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
                img.setAttribute('item-type', symbols[i * COLS + j])
                row.children[i].appendChild(img)
            }
        }

        cols.forEach((col, index) => {
            const time = [5, 6, 7, 8]
            const randomTime = time[Math.floor(Math.random() * time.length)]

            col.setAttribute('style', `transform: translateY(-3333.5%); transition: transform ${index + 1 * 6}s ease-in-out;`)

            if(firstSpin && bet <= 40){
                col.querySelectorAll('img').forEach((img, index) => {
                    img.setAttribute('draggable', 'false')
                    if(index > 100 && index < 102){
                        img.setAttribute('item-type', 'ruby')
                        img.src = `./Assets/imgs/ruby.png`
                    }
                    if(index > 102){
                        img.setAttribute('item-type', 'ruby')
                        img.src = `./Assets/imgs/ruby.png`
                    }
                })
            }
        })

        

        setTimeout(() => {
            symbols = []
            cols.forEach((col) => {
                col.querySelectorAll('img').forEach((img, index) => {
                    if(index < 100){
                        img.remove([index])
                        col.setAttribute('style', `transform: translateY(0%); transition: transform 0s ease-in-out;`)
                    }
                })
            })

            checkWin()
            firstSpin = false
        }, 8000)
    }
}