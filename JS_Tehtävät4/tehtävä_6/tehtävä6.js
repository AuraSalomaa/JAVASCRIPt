'use strict';

        const Vitsit = document.querySelector('#vitsikysely')
        const vitsi = document.getElementById("jokes")
            Vitsit.addEventListener('submit', async function(evt) {

            evt.preventDefault();

            const code = document.querySelector('input[name=query]').value;
            try {
                let thing = ""
                const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${code}`);
                const jsonData = await response.json();
                jsonData.result.forEach(joke => {
                    const article = document.createElement('article')
                    const p = document.createElement('p')
                    p.textContent = joke.value
                    article.appendChild(p)

                    thing = vitsi.appendChild(article)
                    document.querySelector("#jokes").innerHTML = thing
                })


            }catch (error) {
                console.log(error.message);
        }
    });
