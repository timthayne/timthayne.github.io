function setCurrentDate()
{
    var currentDate = new Date();
    var weekday = "";
    var month = ""
    var dateString = "";
    
    // set current year
    document.getElementById("currentYear").innerHTML = currentDate.getFullYear();
    
    // get day of week
    var weekdays = new Array(7);
    
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    
    weekday = weekdays[currentDate.getDay()];
    
    // get month
    var months = new Array();

    months[0] = "January";
    months[1] = "February";
    months[2] = "March";
    months[3] = "April";
    months[4] = "May";
    months[5] = "June";
    months[6] = "July";
    months[7] = "August";
    months[8] = "September";
    months[9] = "October";
    months[10] = "November";
    months[11] = "December";

    
    month = months[currentDate.getMonth()];
    
    dateString = weekday + ", " + currentDate.getDate() + " " + month + " " + currentDate.getFullYear();
    
    // set current date
    document.getElementById("currentDate").innerHTML = dateString;
}

