export class Student {
    constructor(firstName, lastName, iNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.iNumber = iNumber;
    }

    getDaysOfWeek() {
        // variables
        let myName = 'Brother Thayne';
        const age = 49;
        const currentDate = new Date();
      
        // if statement
        if (age > 50) {
          // console.log("You're getting old!")
        } else {
          // console.log("You're still young!");
        }
      
        // arrays
        var daysOfWeek = [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ];
      
        // for loop
        var daysOfWeekString = '';
      
        for (let i = 0; i < daysOfWeek.length; i++) {
          daysOfWeekString += daysOfWeek[i] + ' ';  
        }

        return daysOfWeekString;
    }
}
