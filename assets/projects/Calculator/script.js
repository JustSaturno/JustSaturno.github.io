const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

var calc = '0'
var bool = false

document.addEventListener("keydown", (event) => {
    if(event.key.match(/[0-9]/) || event.key == "." || event.key == "Enter" || event.key == "Backspace" || event.key == "+" || event.key == "-" || event.key == "*" || event.key == "/" || event.key == "%" || event.key == "c") {
        calculus(null, event.key)
    }
})

buttons.forEach((item) => {
    item.onclick = () => {
        calculus(item, null)
    }
})

function calculus (item, key) {
    if(item == null) {
        calcKey = key
    }else {
        calcKey = item.id
    }
    
    if(bool == true){
        if(calcKey == "clear" || calcKey == "c") {
            screen.innerText = "0";
            calc = '0'
        }else if(calcKey == "Backspace") {
            screen.innerText = screen.innerText.slice(0, -1);
            calc = calc.slice(0, -1)
            if(screen.innerText == "") {
                screen.innerText = "0"
            }
        }else if(calcKey == "+" || calcKey == "-" || calcKey == "*" || calcKey == "/" || calcKey == "%"){
            screen.innerText += calcKey;
            calc += calcKey
        }else {
            screen.innerText = calcKey;
            calc = calcKey
        }
        bool = false
    }else{
        if (calcKey == "clear" || calcKey == "c") {
            screen.innerText = "0";
            calc = '0'
        }else if (calcKey == "Backspace") {
            screen.innerText = screen.innerText.slice(0, -1);
            calc = calc.slice(0, -1)
            if(screen.innerText == ""){
                screen.innerText = "0"
                calc = '0'
            }
        }else if (screen.innerText != "" && (calcKey == "equal" || calcKey == "Enter") ) {
            if(screen.innerText == "0"){
                return
            }else {
                try {
                    screen.innerText = eval(calc);
                    calc = screen.innerText
                    bool = true
                }catch(error) {
                    screen.innerText = "Error"
                    setTimeout(() => {
                        screen.innerText = "0"
                    }, 1000) 
                }
            }
        }else {
            if(screen.innerText != "Error"){
                if(calcKey == "/") {
                    screen.innerText += "÷";
                    calc += calcKey
                }else if(calcKey == "*") {
                    screen.innerText += "*";
                    calc += calcKey
                }else if(calcKey == "-") {
                    screen.innerText += "-";
                    calc += calcKey
                }else if(calcKey == "+") {
                    screen.innerText += "+";
                    calc += calcKey
                }else if(calcKey == "%"){
                    screen.innerText += "%";
                    calc += calcKey
                }else if(calcKey == ".") {
                    screen.innerText += "."
                    calc += calcKey
                }else if(screen.innerText == "0") {
                    calc = calcKey 
                    screen.innerText = calcKey
                }else{
                    calc += calcKey
                    screen.innerText += calcKey;
                }
            }
        }
    }
    
}