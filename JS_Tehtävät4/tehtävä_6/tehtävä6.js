'use strict';

        const Vitsit = document.querySelector('#vitsikysely')
            Vitsit.addEventListener('submit', async function(evt) {

            evt.preventDefault();

            const code = document.querySelector('input[name=query]').value;
            try {
                const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${code}`);
                const jsonData = await response.json();
                vastaus = response.value
                return jsonData


            }catch (error) {
                console.log(error.message);
        }
    });

    vastaus = Vitsit()