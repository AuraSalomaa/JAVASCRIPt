
'use strict';
    const requestForm = document.querySelector('#requestForm')
    requestForm.addEventListener('submit', async function(evt) {


        evt.preventDefault()

        const name = document.querySelector('input[name=q]').value;

        try {
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${name}`)
            const jsonData = await response.json()
            console.log(jsonData)
        }catch (error) {
            console.log(error.message);
            }
    });