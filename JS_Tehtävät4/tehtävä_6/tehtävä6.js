'use strict';
let vitsi = ""
const kysynta = document.getElementById("vitsikysely")
async function Chuck()    {
    kysynta.addEventListener('submit', async function(evt) {

        evt.preventDefault()

    const code = document.querySelector('input[name=q]').value
    let response = await fetch(`https://api.chucknorris.io/jokes/search?query=${code}`)
    let data = await response.json();
    console.log(data)
})}
