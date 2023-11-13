
const amount = prompt("How many particapents?")
let jasenia = []
const maara = parseInt(amount)
const OrgList = []
const kysynta = ""
for (let i = 0; i < maara;i++) {
    const kysynta = prompt("write names of the particapents?")
    jasenia.push(kysynta)

}
document.getElementById("skripti").innerHTML =" jasenia"


var html = "";
    jasenia.sort()
    for (let i = 0; i < jasenia.length; i++){
        html += "<ol>"+ "<li>" + jasenia[i] + "</li>" + "</ol>";
    }
document.querySelector("#skripti").innerHTML = html
