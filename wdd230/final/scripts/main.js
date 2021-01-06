fetch('json/temples.json')
    .then(response => response.json())
    .then(
        response => {
            console.log(response);

            document.querySelector('#temple1-name').textContent = 
                response[0].TempleName;

            response[0].Services.forEach(
                service => {
                    document.querySelector('#services1').innerHTML += 
                        `<li>${ service }</li>`;
                }
            )

            document.querySelector('#image1').setAttribute('src', response[0].Image);
            
        }
    );