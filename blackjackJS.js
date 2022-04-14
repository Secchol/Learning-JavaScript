let firstNum =8
let secondNum = 10
let sum = firstNum+secondNum
let messageDoc = document.GetItemById("message-el")
function startGame(){
    if (sum<21){
    messageDoc.textContent = "Do you want me to pick a new card?"
    }
    else if (sum===21){
    messageDoc.textContent = "YOU HAVE GOT BLACKJACK!"
    }
    else{
    messageDoc.textContent = "You are out of the game!"
    }
}
