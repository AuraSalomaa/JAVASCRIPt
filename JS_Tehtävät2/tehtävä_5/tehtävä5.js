list = []
let value = 0
while (value !== true) {
    const num = prompt("Input an number ")


    if (list.includes(num) === true) {
        value = true


}   else {

        list.push(num)
        console.log(num)
    }






}
console.log(list)





