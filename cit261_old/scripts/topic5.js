import { Student } from './student.js';


let studentsString = localStorage.getItem("students");

if (studentsString) {
    let myStudents = JSON.parse(localStorage.getItem("students"));

    myStudents.push(
        new Student('Joe', 'Student', '444444444')
    );

    

    console.log(myStudents);
} else {
    let students = [
    new Student('Tim', 'Thayne', '111111111'),
    new Student('Breanna', 'Hansen', '222222222'),
    new Student('Joseph', 'Wurz', '333333333')
];

console.log(students);

localStorage.setItem("students", JSON.stringify(students));
}

// sessionStorage.setItem("username", "timthayne");

//localStorage.removeItem("students");