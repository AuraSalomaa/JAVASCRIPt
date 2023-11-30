async function joke(){
    let response = await fetch('https://api.chucknorris.io/jokes/random')
    let data = await response.json();
    return data;
}
joke().then(response=>{
   console.log(response)
    vastaus  = response.value
    document.getElementById("joke").innerHTML = vastaus
})
