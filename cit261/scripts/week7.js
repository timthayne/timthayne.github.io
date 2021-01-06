export function getURL(url) {

    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(person => {
            console.log(person);

            document.querySelector('#name').textContent = person.name;
            document.querySelector('#height').textContent = person.height;
        });


}

function saveURL(url, content) {

}