const numero = 0
const numbers = [];
for (let i = 0; i < 6; i++) {
    const numero = prompt("Syötä numero: ")
    numbers.push(numero)


}

for (let i = numbers.length-1; i >= 0; i--){
  console.log(numbers[i])

}