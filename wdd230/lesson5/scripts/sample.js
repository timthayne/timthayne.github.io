/* weather summary */
document.querySelector('#current-temp').innerHTML = '50&deg;';
document.querySelector('#wind-speed').innerHTML = '10mph';
document.querySelector('#humidity').innerHTML = '10&percnt;';

/* pancake */
const currentDate = new Date();
const aside = document.querySelector('aside');

if (currentDate.getDay() === 4) {
    aside.style.display = 'block';
    //aside.classList.remove('hidden');
// } else {
//   //aside.style.display = 'none';  
//   aside.classList.add('hidden');
// }

// if (currentDate.getDay() !== 5) {
//     aside.classList.add('hidden');
}
