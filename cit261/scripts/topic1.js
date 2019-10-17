import { Student } from './student.js';

let student1 = new Student('Tim', 'Thayne', '111111111');
console.log(student1);

let daysOfWeek = student1.getDaysOfWeek();
document.getElementById("daysOfWeek").innerHTML = daysOfWeek;
console.log(daysOfWeek);

