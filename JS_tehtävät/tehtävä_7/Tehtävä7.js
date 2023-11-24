
const number = prompt("How many dice should I throw?")
const dice = parseInt(number)
let amount = 0
let list =[]
for (let i = 0; i < dice;i++){
    amount = Math.floor(Math.random()* 21)
    list.push(amount)
    console.log(list)
}
let summa = 0
for (let i = 0; i < list.length; i++){
    summa = summa + list[i]
}



document.querySelector("#jsSkirpti9").innerHTML = summa
console.log(summa)