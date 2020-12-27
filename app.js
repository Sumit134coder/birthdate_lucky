var userInput = document.querySelector("#input")
var btn = document.querySelector("#submit")
var luckyNumber = document.querySelector("#luckyNumber")
var output = document.querySelector("#output")

var total= 0;
var Sum=0;
function btnHandler(){
    console.log("clicked")
    var input = userInput.value;
    for(var i=0;i<input.length;i++){
        if(input[i]!='-')
        Sum += parseInt(input[i]);
    }
    console.log(Sum);

    if(Sum>=luckyNumber.value)
    {
    var diff = Sum-luckyNumber.value;
    }
    else
    diff=luckyNumber.value-Sum;
console.log("differnce is"+ diff)

var outputText= "you are " + diff + " days far fromm being lucky";
alert("you are " + diff + " days far fromm being lucky")
output.innerHTML = outputText;


}


btn.addEventListener("click",btnHandler);

