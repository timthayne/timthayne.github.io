// const name = 'Brother Thayne';
// document.getElementById("name").innerHTML = name;


const lastModifiedDate = document.lastModified;
document.querySelector("#lastModifiedDate").textContent = lastModifiedDate;

function enterName() {
    const userName = document.getElementById("yourName").value;
    document.getElementById("name").innerHTML = userName;
}
