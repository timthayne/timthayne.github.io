import { Student } from './student.js';

let students = [];

let student1 = new Student('Tim', 'Thayne', '111111111');
let student2 = new Student('Jordon', 'Thompson', '222222222');
let student3 = new Student('Breanna', 'Hansen', '333333333');

students.push(student1);
students.push(student2);
students.push(student3);

let studentsAsJSON = JSON.stringify(students);

console.log(studentsAsJSON);

let newStudents = JSON.parse(studentsAsJSON);

let newStudent1 = newStudents[0];

console.log(newStudent1.iNumber);
