const tvshowform = document.querySelector('form')
tvshowform.addEventListener('submit', async function(evt) {
    // ... prevent the default action.
    evt.preventDefault();
    // get value of input element
    const code = document.querySelector('input[name = q]').value;
    try {                                               // error handling: try/catch/finally
        const response = await fetch(`https://api.tvmaze.com/search/${code}`);    // starting data download, fetch returns a promise which contains an object of type 'response'
        const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function
        console.log(jsonData);    // log the result to the conso
    } catch (error) {
        console.log(error.message);
    }
});