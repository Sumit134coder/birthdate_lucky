var userInput = document.querySelector("#input")
var btn = document.querySelector("#submit")
var luckyNumber = document.querySelector("#luckyNumber")
var output = document.querySelector("#output")

var Sum=0;
function btnHandler(){
    alert("as a website, your data will not be stored");
    console.log("clicked")
    var input = userInput.value;
    for(var i=0;i<input.length;i++){
        if(input[i]!='-')
        Sum += parseInt(input[i]);
    }
    console.log(Sum%luckyNumber.value);
    if(Sum%luckyNumber.value==0||luckyNumber.value%Sum==0)
    {
        output.innerHTML = "you are lucky";
    }
    else
    output.innerHTML = "unlucky";
}



btn.addEventListener("click",btnHandler);

