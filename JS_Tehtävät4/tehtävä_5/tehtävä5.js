async function joke()    {
    let response = await fetch('https://api.chucknorris.io/jokes/random')
    let data = await response.json();
    return data;
}
joke().then(response=>{

    vastaus  = response.value
    console.log(vastaus)
    document.getElementById("print").innerHTML = vastaus

})
