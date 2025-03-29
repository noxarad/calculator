const body = document.querySelector("body")
const numpad = document.querySelector("#numpad")
const textField = document.querySelector("p")
numpad.addEventListener("click", (e) => {
    switch (e.target.id){
        case "zero":
            textField.innerText = `${textField.innerText}0`
            break
        case "dot":
            dotListener()
            break
        case "equate":
            evaluator()
            break
        case "one":
            textField.innerText = `${textField.innerText}1`
            break
        case "two":
            textField.innerText = `${textField.innerText}2`
            break
        case "three":
            textField.innerText = `${textField.innerText}3`
            break
        case "addition":
            operatorListener("+")
            break
        case "four":
            textField.innerText = `${textField.innerText}4`
            break
        case "five":
            textField.innerText = `${textField.innerText}5`
            break
        case "six":
            textField.innerText = `${textField.innerText}6`
            break
        case "subtraction":
            operatorListener("-")
            break
        case "seven":
            textField.innerText = `${textField.innerText}7`
            break
        case "eight":
            textField.innerText = `${textField.innerText}8`
            break
        case "nine":
            textField.innerText = `${textField.innerText}9`
            break
        case "multiplication":
            operatorListener("*")
            break
        case "AC":
            textField.innerText = ``
            break
        case "delete":
            textDelete()
            break
        case "remainder":
            operatorListener("%")
            break
        case "division":
            operatorListener("/")
            break
    }
})
body.addEventListener("keypress", (e) => {
    switch (e.key){
case "0":
    textField.innerText = `${textField.innerText}0`
    break
case ".":
    dotListener()
    break
case "Enter":
    evaluator()
    break
case "1":
    textField.innerText = `${textField.innerText}1`
    break
case "2":
    textField.innerText = `${textField.innerText}2`
    break
case "3":
    textField.innerText = `${textField.innerText}3`
    break
case "+":
    operatorListener("+")
    break
case "4":
    textField.innerText = `${textField.innerText}4`
    break
case "5":
    textField.innerText = `${textField.innerText}5`
    break
case "6":
    textField.innerText = `${textField.innerText}6`
    break
case "-":
    operatorListener("-")
    break
case "7":
    textField.innerText = `${textField.innerText}7`
    break
case "8":
    textField.innerText = `${textField.innerText}8`
    break
case "9":
    textField.innerText = `${textField.innerText}9`
    break
case "*":
    operatorListener("*")
    break
case "Delete":
    textField.innerText = ``
    break
case "Backspace":
    textDelete()
    break
case "%":
    operatorListener("%")
    break
case "/":
    operatorListener("/")
    break
}
})