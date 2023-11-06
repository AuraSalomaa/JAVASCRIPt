const vastaus = confirm("Should I calculate the square root?")

if (vastaus === true) {
    const numero = prompt("What square root would you like to see?")
    const nro = parseInt(numero)
    if (nro < 0) {
        console.log("The square root of a negative number is not defined")

    } else {
        console.log(Math.sqrt(nro))

    }
} else if (vastaus === false){
    console.log("The Square root was not calculated")
}