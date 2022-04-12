
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("saved-el")
console.log(countEl)
let count = 0
function increment(){
    count = count+1
    countEl.textContent = count
    
    

}
function save(){
    let output = count+" - "
    saveEl.textContent+=output
    countEl.textContent = "0"
    count = 0
}

