var numberbox = "#numberbox"
var number1
var number2
var equal
var sign
var onCleanNumberBox = false

function numIsClicked(inputValue){
    if (number1 == undefined){
        $(numberbox).val($(numberbox).val() + inputValue)
        console.log(number1)
    }else{
        if (onCleanNumberBox == true){
            $(numberbox).val('')
            onCleanNumberBox = false
        }
        $(numberbox).val($(numberbox).val() + inputValue)
    }
}

function signIsClicked(inputValue){
    if(sign == undefined){
        number1 = parseFloat($(numberbox).val())
        $(numberbox).val(inputValue)
        sign = inputValue
        onCleanNumberBox = true
    }else{}
}

function erase(inputId){
    if (inputId === "clearAll"){
        $(numberbox).val('')
        number1 = undefined
        number2 = undefined
        sign = undefined
        equal = undefined
    } else if (inputId === "delete"){
        $(numberbox).val($(numberbox).val().slice(0, -1))
    }
}

function equalIsClicked(){
    number2 = parseFloat($(numberbox).val())

    if (sign === "+"){
        equal = number1 + number2
        $(numberbox).val('')
        $(numberbox).val(equal)
        number1 = equal
        sign = undefined

    }else if(sign === "-"){
        equal = number1 - number2
        $(numberbox).val('')
        $(numberbox).val(equal)
        number1 = equal
        sign = undefined
    }else if(sign === "/"){
        equal = number1 / number2            
        $(numberbox).val('')
        $(numberbox).val(equal)
        number1 = equal
        sign = undefined
    }else if(sign === "*"){
        equal = number1 * number2            
        $(numberbox).val('')
        $(numberbox).val(equal)
        number1 = equal
        sign = undefined
    }
}