let names = ""
listNames = []
for (let i = 0; i < 6; i++){
    names = prompt("Write the names of six dogs here: ")
    listNames.push(names)
}

let html2 = ""
    listNames.sort()
    listNames.reverse()
    for (let i = 0; i < listNames.length; i++)
            html2 += "<ul>"+" <li>" + listNames[i]+" </li>" +" </ul>"
document.querySelector("#skirpti1").innerHTML =html2