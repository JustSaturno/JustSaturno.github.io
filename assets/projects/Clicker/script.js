const clickSound = new Audio('./assets/sounds/click.wav')
const blockSound = new Audio('./assets/sounds/block.mp3')
const breakSound = new Audio('./assets/sounds/break.mp3')
const gem = document.getElementById('gem')
const gemCount = document.querySelector('.gem-count').querySelector('span')
const crystalCount = document.querySelector('.crystal-count')
const clickCount = document.querySelector('.click-count').querySelector('span')

var firstClick = true

function soundvolume() {
    clickSound.volume = 0.5
    blockSound.volume = 0.5
    breakSound.volume = 0.5
}

soundvolume()

document.querySelector('body').addEventListener('click', () => {
    if(firstClick) {
        firstClick = false
        document.querySelector('body').removeEventListener('click', () => {})
        dialogAppear()
    }
})

document.querySelectorAll('.orange-arrow').forEach((arrow, index) => {
    arrow.parentElement.style = 'position: relative'

    arrow.style.display = 'none'
})

const dialog = document.querySelector('.dialog')
const dialogBtn = document.querySelector('.dialog-btn')

const dialogs = [
    'Oh, hello! You already started mining? I didn\'t even introduced myself!...',
    'I\'m David, nice to meet you...',
    'So, looks like you\'re interested in mining some gems...',
    'Do you want a tutorial?',
    'So you are a experienced miner? Show me your skills. - (This game is for portfolio purposes only)',
    'Oh, okay! I\'ll give you some tips...',
    'This is the gem that you want, you can mine it by clicking on it.',
    'This are the crystals that you can use to get some power ups.',
    'I don\'t really know how to get them, but sometimes you get some from the gem.',
    'This is the Upgrade tab, where you can buy upgrades that will improve your mining.',
    'The Skill tab is where you can buy skills that will increase your mining for a certain amount of time.',
    'But caution, the Skills are limited, so use them wisely.',
    'Well, that\'s all for now. Enjoy your mining! - (This game is for portfolio purposes only)'

]

var tutorial = true

const dialogAudios = [
    './assets/sounds/letters/A.mp3',
    './assets/sounds/letters/B.mp3'
]

var dialogIndex = 0
var playing = false

const decisionContainer = document.querySelector('.decision')
const dialogContainer = document.querySelector('.dialog-container')
dialogContainer.classList.add('active')
document.querySelector('.dialog-image').style.bottom = '-150%'
document.querySelector('.text-container').style.bottom = '-150%'

decisionContainer.style.display = 'none'



function dialogAppear() {
    dialogContainer.style.display = 'flex'
    dialogContainer.style.pointerEvents = 'all'

    setTimeout(() => {
        document.querySelector('.dialog-image').style.bottom = '0%'
        document.querySelector('.text-container').style.bottom = '0%'
        setTimeout(() => {
            dialogShow()
        }, 800)
    }, 500)
}

var crystals = true

function removeTutorial() {
    tutorial = false
    dialogIndex = 0
    document.querySelector('.dialog-container').remove()
    document.querySelectorAll('.orange-arrow').forEach(arrow => {
        arrow.remove()
    })
}

async function dialogShow() {
    if(playing) return
    dialog.innerHTML = ''
    playing = true
    const letters = dialogs[dialogIndex].split('')
    const arrows = document.querySelectorAll('.orange-arrow')
    let letterIndex = 0

    if(dialogIndex == 1) {
        document.querySelector('.name').innerHTML = 'David'
    }

    if(dialogIndex > 5) {
  
        arrows.forEach((arrow, index) => {
            if(dialogIndex == 8){
                crystals = false
                return
            }else {
                if(crystals){
                    if(index == dialogIndex - 6) {
                        arrow.style.display = 'block'
                    }else{
                        arrow.style.display = 'none'
                    }
                }else{
                    if(dialogIndex == 10){
                        displayUS(document.querySelectorAll('.us-btn')[1])
                    }else{
                        displayUS(document.querySelectorAll('.us-btn')[0])
                    }
                    if(index == dialogIndex - 7) {
                        arrow.style.display = 'block'
                    }else{
                        arrow.style.display = 'none'
                    }
                }
                
            }
            
        })
    }

    while(letterIndex < letters.length && playing) {
        if(letters[letterIndex] == '[') {
            dialog.innerHTML = '<span style="color: red">[INCOMPLETE]</span>'
            breakSound.play()
            break
        }

        if(letters[letterIndex] == '-') {
            dialog.innerHTML += '<br>'
            letterIndex++
        }
        
        dialog.innerHTML += letters[letterIndex]
        let audio = new Audio(dialogAudios[Math.floor(Math.random() * dialogAudios.length)])
        audio.volume = 0.3
        audio.play()
        letterIndex++
        await new Promise(resolve => setTimeout(resolve, 50))
    }

    if(dialogIndex == 3) {
        decisionContainer.style.display = 'flex'
        let buttons = decisionContainer.querySelectorAll('button')
        dialogBtn.style.display = 'none'
        buttons[0].addEventListener('click', () => {
            tutorial = true
            dialogIndex = 5
            decisionContainer.style.display = 'none'
            dialogBtn.style.display = 'block'
            dialogShow()
        })

        buttons[1].addEventListener('click', () => {
            tutorial = false
            dialogIndex = 4
            decisionContainer.style.display = 'none'
            dialogShow()
        })

    }

    playing = false
    if(dialogIndex == dialogs.length - 1 || tutorial == false ) {
        dialogBtn.style.display = 'none'
        await new Promise(resolve => setTimeout(resolve, 3000))
        document.querySelector('.dialog-image').style.bottom = '-150%'
        document.querySelector('.text-container').style.bottom = '-150%'
        setTimeout(() => {
            dialogContainer.style.display = 'none'
            removeTutorial()
        }, 500)
        
    }
    dialogIndex++
}

const usBtn = document.querySelector('.us-display').querySelectorAll('button')
const upgradeSound = new Audio('./assets/sounds/upgrade.mp3')

var totalClicks = 0
var crystalsClicks = 100

// Upgrades

var gemAmount = 0

var multiplierAmount = 1
var pickaxeAmount = 0

// skills

var crystalAmount = 5

function update() {
    gemCount.innerHTML = gemAmount.toFixed(0)
    clickCount.innerHTML = totalClicks
    crystalCount.innerHTML = crystalAmount

    usBtn.forEach((btn) => {

        price = Number(btn.querySelector('.btn-price').innerHTML)

        if(btn.getAttribute('item-type') == 'upgrade' && price > gemAmount || btn.getAttribute('item-type') == 'skill' && crystalAmount < price) {
            btn.style.opacity = 0.5
        }else{
            btn.style.opacity = 1
        }
    })
}

update()

// Upgrades and Skills Switch
function displayUS(element) {
    if(element.innerHTML == 'Upgrades') {
        element.parentElement.parentElement.parentElement.querySelector('.ovf').classList.remove('active')
    }else {
        element.parentElement.parentElement.parentElement.querySelector('.ovf').classList.add('active')
    }
}

// Skills & Upgrades

function upgrade(item, price, btn, upgradeAmount) {
    

    upgradeSound.currentTime = 0
    upgradeSound.play()


    switch(item) {
        case 'multiplier':
            multiplierAmount = multiplierAmount + 1

            if(multiplierAmount == 10){
                multiplierAmount = 10
            }

            break
        case 'pickaxe':
            setInterval(autoClick, 500)
            break
        case 'mine':
            setInterval(autoClick, 300)
            break
    }

    update()
}

function skill(item, price, btn, upgradeAmount) {
    upgradeSound.currentTime = 0
    upgradeSound.play()

    switch(item) {
        case 'goldpickaxe':
            let interval = setInterval(autoClick, 100, true)
            setTimeout(clearInterval, 10000, interval)
            break
        case 'potion':
            let interval2 = setInterval(autoClick, 50, true)
            setTimeout(clearInterval, 50000, interval2)
            break
        default:
            break
    }
}

usBtn.forEach((btn) => {
    var price = 0
    if(btn.getAttribute('item-type') == 'upgrade') {
        price = Number(btn.querySelector('.btn-price').innerHTML)
    }else if(btn.getAttribute('item-type') == 'skill') {
        price = Number(btn.querySelector('.btn-price').innerHTML)
    }

    let upgradeAmount = Number(btn.parentElement.querySelector('.item-amount').innerHTML.replace('x', ''))

    btn.addEventListener('click', () => {

        if(btn.querySelector('.btn-price').innerHTML == 'Max') {
            blockSound.currentTime = 0
            blockSound.play()
            return
        }

        switch(btn.getAttribute('item-type')) {
            case 'upgrade':
                if(price > gemAmount) {
                    blockSound.currentTime = 0
                    blockSound.play()
                    return
                }
                upgrade(btn.getAttribute('item'), price, btn, upgradeAmount)

                gemAmount = gemAmount - price
                price = price * 1.5

                btn.querySelector('.btn-price').innerHTML = price.toFixed(0)
                btn.parentElement.querySelector('.item-amount').innerHTML = `x${upgradeAmount = upgradeAmount + 1}`


                if(multiplierAmount == 10 && btn.getAttribute('item') == 'multiplier') {
                    btn.innerHTML = `<span class="btn-price">Max</span>`
                    btn.style.opacity = 0.5
                }

                break
            case 'skill':
                if(price > crystalAmount) {
                    blockSound.currentTime = 0
                    blockSound.play()
                    return
                }

                crystalAmount = crystalAmount - price
                price = price * 2

                btn.querySelector('.btn-price').innerHTML = price

                btn.parentElement.querySelector('.item-amount').innerHTML = `x${upgradeAmount = upgradeAmount - 1}`

                skill(btn.getAttribute('item'), price, btn, upgradeAmount)

                if(upgradeAmount == 0) {
                    btn.querySelector('.btn-price').innerHTML = 'Max'
                    break
                }

                break
        } 
        update()
    })
})

gem.addEventListener('click', () => {
    mouseClick()
})

function click(isMouse, skill) {

    if(isMouse){
        let mousePosition = {
            x: 0,
            y: 0
        }

        mousePosition.x = event.clientX
        mousePosition.y = event.clientY

        let mouseX = mousePosition.x
        let mouseY = mousePosition.y

        let img = document.createElement('img')
        img.src = 'assets/mainImages/sparkle.png'

        let imgWidth = Math.random() * 100
        img.style.width = `${0}px`

        img.style.position = 'absolute'
        img.style.top = `${mouseY - 10}px`
        img.style.left = `${mouseX}px`
        img.style.pointerEvents = 'none'
        img.style.transition = `all ${Math.random() * 0.5}s`
        
        img.style.filter = `blur(${2}px)`

        img.style.transform = 'rotate(' + Math.random() * 360 + 'deg)'

        document.body.appendChild(img)

        setTimeout(() => {
            img.style.width = `${imgWidth}px`
            img.style.top = `${mouseY - imgWidth / 2}px`
            img.style.left = `${mouseX - imgWidth / 2}px`
        }, 50)

        setTimeout(() => {
            img.style.transform = 'scale(0.2) rotate(' + Math.random(180) * 360 + 'deg)'

            setInterval(() => {
                img.style.opacity = '0'
            }, 400)

            setInterval(() => {
                img.remove()
            }, 800)
        }, 400)
    }

    totalClicks += 1

    if(totalClicks == 5000){
        gem.src = 'assets/mainImages/gemCraked.png'
        breakSound.play()
    }

    if(isMouse){
        clickSound.currentTime = 0
        clickSound.play()
        gemAmount = gemAmount + 1 * multiplierAmount
    }else if(skill){
        clickSound.currentTime = 0
        clickSound.play()
        gemAmount = gemAmount + 1 * multiplierAmount
    }else{
        gemAmount = gemAmount + 1 * multiplierAmount
    }

    if(totalClicks == crystalsClicks){
        crystalAmount++
        crystalsClicks = crystalsClicks * 2
    }

    // Gem Animation

    gem.style.transform = 'translateY(0px) translateX(0px)'
    gem.style.filter = 'grayscale(100%)'

    // Randomize
    let decider = Math.random() * 100 + 1
    let randomNum = Math.floor(Math.random() * 10) + 1
    let randomNum2 = Math.floor(Math.random() * 10) + 1
    
    if (decider > 50) {
        setTimeout(() => {
            gem.style.transform = 'translateX(' + randomNum + 'px) translateY(' + randomNum2 + 'px)'
        }, 20)
    }else {
        setTimeout(() => {
            gem.style.transform = 'translateX(-' + randomNum + 'px) translateY(-' + randomNum2 + 'px)'
            
        }, 20)
    }

    setTimeout(() => {
        gem.style.filter = 'grayscale(0%)'
    }, 40)

    setTimeout(() => {
        gem.style.transform = 'translateY(0px) translateX(0px)'
    }, 2000)

    update()
}

function mouseClick(){
    click(true)
}

function autoClick(isSkill) {
    click(false, isSkill)
}