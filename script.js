var textInput = "#numberbox"
var num1, num2

$(document).ready(function(){

    $(textInput).click(function()
    {
        $(this).attr("readonly", "readonly");
    });
})


function clickSigns(typeValue){

    $(document).ready(function(){
        if (sign === "+" || sign === "-" || sign === "/" || sign === "x"){
            $(textInput).val($(textInput).val().slice(0, -1))
            $(textInput).val($(textInput).val() + typeValue)
        }else{
            $(textInput).val($(textInput).val() + typeValue)
            sign = typeValue
        }

    })
}


function clickButtons (typeValue){
    $(document).ready(function(){
        $(textInput).val($(textInput).val() + typeValue)       

        if (clickSigns()){
            num1 = $(textInput).val($(textInput).val().slice(0, -1))}

    })
}


function specialClicks(typeId, typeValue){
    if (typeId === "#Clear"){
        $(textInput).val(typeValue);
    }

    if (typeId === "#delete"){
        $(textInput).val($(textInput).val().slice(0, -1));
    }

    if (typeId === "#equals"){
    };
}