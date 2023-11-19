'use strict';
let name = ""
const names= ['John', 'Paul', 'Jones'];
for (let i = 0; i < names.length; i++) {
    name +=  "<li>" +  names[i] + "</li>"
    console.log(names[i])
}

document.querySelector("#target").innerHTML = name