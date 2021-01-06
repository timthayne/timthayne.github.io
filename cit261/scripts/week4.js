import { Student } from './student.js';

let students = [];

let student1 = new Student('Joe', 'Montana', '11-111-1111', 35, 'University of Utah');
let student2 = new Student('Jill', 'Montana', '22-222-2222', 35);
let student3 = new Student('Bill', 'Montana', '33-333-3333', 37);

students.push(student1);
students.push(student2);
students.push(student3);

students.forEach(
    student => {
        document.querySelector('tbody').innerHTML += 
            `
            <tr>
                <td>${ student.firstName }</td>
                <td>${ student.lastName }</td>
                <td>${ student.iNumber }</td>
            </tr>
            `;
    }
);

console.log(JSON.stringify(student1));
