function dotListener(){
    let equation = textField.innerText.split("")
    let lastOperator = Math.max(equation.findLastIndex((operator)=> operator === "+"),
        equation.findLastIndex((operator)=> operator === "-"),
        equation.findLastIndex((operator)=> operator === "/"),
        equation.findLastIndex((operator)=> operator === "*"))
    let lastDot = equation.findLastIndex((operator)=> operator === ".")
    if (lastDot <= lastOperator) {
        textField.innerText = `${textField.innerText}.`
    }
}
function operatorListener(operator){
    let equation = textField.innerText.split("")
    if (equation.length > 0) {
        if (["+", "-", "*", "/", "%"].includes(equation[equation.length-1])) {
            equation.splice(equation.length - 1, 1, operator)
            textField.innerText = equation.reduce((accumulator, currentValue) => `${accumulator}${currentValue}`, ``)
        } else {
            textField.innerText = `${textField.innerText}${operator}`
        }
    }
}
function textDelete() {
    let equation = textField.innerText.split("")
    equation.splice(equation.length-1, 1)
    textField.innerText = equation.reduce((accumulator, currentValue) => `${accumulator}${currentValue}`, ``)
}
function evaluator() {
    let equation = textField.innerText.split("")
    if (["+", "-", "*", "/", "%"].includes(equation[equation.length-1])) {
        equation.splice(equation.length-1, 1)
    }
    //DM evaluation
    while (equation.some(value => ["/", "%", "*"].includes(value))) {
        let startIndex = 0
        let operatorIndex = 1
        let endIndex = equation.length
        let firstOperand = ``
        for (let i = 0; !["/", "*", "%"].includes(equation[i]); i++){
            if (["+", "-"].includes(equation[i])){
                firstOperand = ``
                startIndex = i-1
            }
            else{
                firstOperand = `${firstOperand}${equation[i]}`
                operatorIndex = i+1
            }
        }
        firstOperand = parseFloat(firstOperand)
        let secondOperand = ``
        for (let i = operatorIndex+1; equation.length > i; i++ ){
            if (["+", "-", "*", "/", "%"].includes(equation[i])){
                endIndex = i
                break
            }
            else {
                secondOperand = `${secondOperand}${equation[i]}`
            }
        }
        secondOperand = parseFloat(secondOperand)
        switch (equation[operatorIndex]){
            case "*":
                equation.splice(startIndex, endIndex-startIndex, `${firstOperand*secondOperand}`)
                break
            case "/":
                equation.splice(startIndex, endIndex-startIndex, `${firstOperand/secondOperand}`)
                break
            case "%":
                equation.splice(startIndex, endIndex-startIndex, `${firstOperand%secondOperand}`)
                break
        }
    }
    //AS evaluation
    while (equation.some(value => ["+", "-"].includes(value))) {
        let startIndex = 0
        let operatorIndex = 1
        let endIndex = equation.length
        let firstOperand = ``
        for (let i = 0; !["+", "-"].includes(equation[i]); i++){
                firstOperand = `${firstOperand}${equation[i]}`
                operatorIndex = i+1
        }
        firstOperand = parseFloat(firstOperand)
        let secondOperand = ``
        for (let i = operatorIndex+1; equation.length > i; i++ ){
            if (["+", "-"].includes(equation[i])){
                endIndex = i
                break
            }
            else {
                secondOperand = `${secondOperand}${equation[i]}`
            }
        }
        secondOperand = parseFloat(secondOperand)
        switch (equation[operatorIndex]){
            case "+":
                equation.splice(startIndex, endIndex-startIndex, `${firstOperand+secondOperand}`)
                break
            case "-":
                equation.splice(startIndex, endIndex-startIndex, `${firstOperand-secondOperand}`)
                break
        }
    }
    textField.innerText = equation
    console.log(equation)
}