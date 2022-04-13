let firstNum = 8
let secondNum = 2
document.getElementById("num1-el").textContent = firstNum
document.getElementById("num2-el").textContent = secondNum
let resultDoc = document.getElementById("sum-el")


function add(){
let sum = firstNum+secondNum
resultDoc.innerText = "Sum: "+ sum
}
function substract(){
let sum = firstNum-secondNum
resultDoc.innerText = "Sum: "+ sum

}
 
function multiply(){
let sum = firstNum*secondNum
resultDoc.innerText = "Sum: "+ sum
}

function divide(){
let sum = firstNum/secondNum
resultDoc.innerText = "Sum: "+ sum

}
