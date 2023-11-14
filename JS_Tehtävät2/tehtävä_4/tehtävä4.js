let number = ""

list = []
let num = 0;
for (;;) {
    number = prompt("give a number, '0 stops'")
    num = parseInt(number)
    if (num === 0){
       break;
    }
    else{
        list.push(number)
    }

}

console.log(list)
