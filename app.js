const luckyNumber = document.querySelector("#luckyNumber")
const birthdayDate = document.querySelector("#date-of-birth")
const Submit = document.querySelector("button")
const giphy = document.querySelector(".giphy-embed")
const outputBody = document.querySelector(".output-body")
Submit.addEventListener("click", GetData)
window.confirm("This site will not store your data")
function GetData(){
    giphy.style.visibility = "visible"
    console.log(birthdayDate.value)
    console.log(birthdayDate.value.replaceAll("-","0"))
    let dateString = birthdayDate.value.replaceAll("-","0");
    let sum=0;
    for(let index = 0 ; index < dateString.length ; index++){
        sum += Number(dateString[index])
    }
    console.log(sum);
    if(sum%Number(luckyNumber.value)==0){
        console.log("lucky")
        outputBody.innerText = "You are so lucky"
        giphy.src = "https://giphy.com/embed/5C2aHYut0kzXrf1Z7D"
    }
    else{
        console.log("unlucky")
        outputBody.innerText = "Not so lucky"
        giphy.src = "https://giphy.com/embed/qBVEww0YjwWyI"
    }

}
//<iframe src="https://giphy.com/embed/qBVEww0YjwWyI" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/league-of-legends-esports-caster-jun-qBVEww0YjwWyI">via GIPHY</a></p>