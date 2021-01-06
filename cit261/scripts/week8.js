
function fetchUrl(url) {

    fetch(url)
        .then(response => response.json())
        .then(pokemonList => {

            pokemonList.damage_relations.double_damage_from.forEach(
                

                item => {

                    // console.log(item);

                    let anchor = document.createElement('a');
                    anchor.setAttribute('href', item.url);
                    anchor.innerHTML += item.name;
                    document.querySelector('#pokemonList').appendChild(anchor);
                    document.querySelector('#pokemonList').innerHTML += '<br>';
                }
            )
        })
        .catch(error => {
            document.querySelector('#error').innerHTML = 
                'An error occurred calling the Pokemon API.  Please contact support.<br><br>' +
                error;
        });
    }
const myName = 'Brother Thayne';

let url1 = 'https://pokeapi.co/api/v2/type/3';
let url2 = 'https://pokeapi.co/api/v2/type/4';
let url3 = 'https://pokeapi.co/api/v2/type/5';

fetchUrl(url1);
fetchUrl(url2);
fetchUrl(url3);

