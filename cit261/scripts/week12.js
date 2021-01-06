fetch('json/sample.json')
    .then(result => {
        return result.json();
    })
    .then(
        result => {
            console.log(result);
        }
    );


document.querySelector('#linkSave').addEventListener('click', clickMe);

//window.clickMe = clickMe;


function clickMe() {
    console.log('link clicked');
}



let button = document.createElement('button');
button.textContent = 'New Button';
button.addEventListener('click', clickMe);

document.querySelector('main').appendChild(button);