/* current year */
const currentDate = new Date();
console.log(currentDate);

const currentYear = currentDate.getFullYear();
console.log(currentYear);

//document.getElementById("currentYear").innerHTML = currentYear;
document.querySelector("#currentYear").textContent = currentYear;


/* last modified */
document.querySelector("#lastModified").textContent = document.lastModified;
