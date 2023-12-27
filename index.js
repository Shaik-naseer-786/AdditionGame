let firstElement=document.getElementById("firstNumber");
let secondElement=document.getElementById("secondNumber");

let successMessage="congratulations! you got it right!";
let tryAgainMessage="Try again!";

let userElement=document.getElementById("userInput");
let gameResult=document.getElementById("gameResult");
function restartGame(){
    let firstRandomNumber=Math.random() * 100;
    let secondRandomNumber=Math.random() * 100;

    firstElement.textContent=Math.ceil(firstRandomNumber);
    secondElement.textContent=Math.ceil(secondRandomNumber);

    gameResult.textContent="";
    userElement.value="";

}
restartGame();

function checkResult(){
    let firstRandomInteger=parseInt(firstElement.textContent);
    let secondRandomInteger=parseInt(secondElement.textContent);
    let userInputInteger=parseInt(userElement.value);

    let sum=firstRandomInteger+secondRandomInteger;

    if(sum === userInputInteger){
        gameResult.textContent=successMessage;
        gameResult.style.backgroundColor="#028a0f";
    }
    else{
        gameResult.textContent=tryAgainMessage;
        gameResult.style.backgroundColor="#1e217c";
    }
}