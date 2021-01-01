var userInput = document.querySelector("#input")
var btn = document.querySelector("#submit")
var luckyNumber = document.querySelector("#luckyNumber")
var output = document.querySelector("#output")
var image = document.querySelector("iframe")

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
        image.src = "https://giphy.com/embed/5C2aHYut0kzXrf1Z7D";
        output.innerHTML = "you are lucky";

    }
    else
    image.src = "https://giphy.com/embed/qBVEww0YjwWyI";
    output.innerHTML = "unlucky";
}



btn.addEventListener("click",btnHandler);

