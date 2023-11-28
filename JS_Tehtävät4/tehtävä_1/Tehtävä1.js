//const tvshowform = document.querySelector("#query")
//tvshowform.addEventListener('submit', async function(evt){
        //evt.preventDefault();

        //const code = document.querySelector('input[name]').value;

        try{
            const response = await fetch(`https://api.chucknorris.io/jokes/random`);
            const jsonData = await response.json();
            console.log(jsonData['value'])
            console.log(response)
            //console.log(code)






        }catch (error){
            console.log(error.message)
        }









//});