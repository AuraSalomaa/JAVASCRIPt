var hat = ""
const sorting_hat = Math.floor(Math.random() * 5);
if (sorting_hat === 1) {

    document.querySelector("#JSskirpti4").innerHTML =  " You are a Gryfindor"
}else if (sorting_hat === 2){
    document.querySelector("#JSskripti4").innerHTML = " You are a Ravenclaw"
}else if (sorting_hat === 3) {
    document.querySelector("#JSskripti4").innerHTML = " You are a Slytherin"

} else if (sorting_hat === 4) {
    document.querySelector("#JSskripti4").innerHTML = " You are an Hufflepuff"
}

