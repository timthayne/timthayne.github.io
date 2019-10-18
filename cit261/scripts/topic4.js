/*
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       //document.getElementById("demo").innerHTML = xhttp.responseText;
       let jsonResult = JSON.parse(xhttp.responseText);
       console.log(jsonResult.eye_color);
    }
};
xhttp.open("GET", "https://swapi.co/api/people/1/", true);
xhttp.send();
*/
function getURL(url) {
    fetch(url)
    .then(response => {
        response.json()
        .then(
            person => {
                console.log(person);
        });
    });
}

getURL('https://swapi.co/api/people/1/');