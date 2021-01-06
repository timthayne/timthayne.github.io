// show/hide pancake
var currentDate = new Date();
var weekDayNumber = currentDate.getDay();

if (weekDayNumber === 5) {
    document.getElementById("pancake")
        .removeAttribute("class", "hidden");
}


