const tvshowform = document.querySelector("#query")
tvshowform.addEventListener('submit', async function(evt){
        evt.preventDefault();

        const code = document.querySelector('input[name]').value;
        console.log(code)
        try{
            const response = await fetch(`https://api.tvmaze.com/search/shows/${code}`);
            const jsonData = await response.json();
            console.log(jsonData["id"]["show"]["name"])
            console.log()







        }catch (error){
            console.log(error.message)
        }









});