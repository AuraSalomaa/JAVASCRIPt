const number = prompt("How many dice should I throw?")
const size = prompt("What is the size of the dice you want to throw?")
const dice = parseInt(number)
die_size = parseInt(size)
let amount = 0
let list =[]
for (let i = 0; i < dice;i++){
    amount = Math.floor(Math.random()* die_size + 1)
    list.push(amount)
    console.log(list)
}
let summa = 0
for (let i = 0; i < list.length; i++){
    summa = summa + list[i]
}

probability = (summa /(die_size**dice)*100)

document.querySelector("#jsSkirpti9").innerHTML = "The chance of you getting " + summa + " is " + probability.toFixed(0)
console.log(probability)