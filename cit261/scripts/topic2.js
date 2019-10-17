import { Student } from './student.js';

// let firstName = 'Tim';
// let lastName = 'Thayne';
// let iNumber = '111111111';

let student1 = new Student('Tim', 'Thayne', '111111111');

let students = [
    new Student('Jordon', 'Thompson', '2222222222'),
    new Student('Breanna', 'Hansen', '333333333')
];

let student3 = new Student('Heather', 'Costello', '444444444');
students.push(student3);

students.forEach(
    student => {
        console.log(student);
    }
);








