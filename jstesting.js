let firstNum = 8
let secondNum = 2
document.getElementById("num1-el").textContent = firstNum
document.getElementById("num2-el").textContent = secondNum
let answerDoc = documnet.getElementById("num-el")
let sum = 0
function sum(){
sum = firstNum+secondNum
}
function substract(){
sum = firstNum-secondNum
}
 
function multiply(){
sum = firstNum*secondNum
}

function divide(){
sum = firstNum/secondNum

}
answerDoc.textContent += sum