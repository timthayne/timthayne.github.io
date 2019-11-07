import { Student } from './student.js';

let students = [
    new Student('Tim', 'Thayne', '111111111'),
    new Student('Breanna', 'Hansen', '222222222'),
    new Student('Jordon', 'Thompson', '333333333'),
    new Student('Jacob', 'Gallegos', '444444444'),
    new Student('Laura', 'Gibbs', '555555555')
];

console.table(students);

localStorage.setItem("students", students);

//localStorage.setItem("students", JSON.stringify(students));

let myStudents = JSON.parse(localStorage.getItem("students"));
myStudents.splice(0, 1);

console.table(myStudents);

localStorage.removeItem("students");
