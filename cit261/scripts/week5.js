import { Student } from './student.js';
import { Course } from './course.js';

let students = [];

fetch('https://timthayne-cms.firebaseio.com/students.json')
    .then((response) => {
        return response.json();
    })
    .then(
        (studentList) => {
            // console.log(students);
            students = studentList;
            loadStudents();
         }
    );

// if (localStorage.getItem("students")) {
//     students = JSON.parse(localStorage.getItem("students"));
//     loadStudents();
// }

/* Two options for accessing module scoped functions */
// 1.
// document.querySelector('#btn-add-student').addEventListener('click', addStudent, false);

// 2.
window.addStudent = addStudent;


let course1 = new Course('1', 'Mobile App Development');



function addStudent() {
    const newStudent = new Student(
        document.getElementById('firstName').value,
        document.getElementById('lastName').value,
        document.getElementById('iNumber').value
    );

    students.push(newStudent);

    /* save to local storage */
    saveStudents(students);

    /* populate table */
    loadStudents();

    /* reset form */
    clearFields();
}

function clearFields() {
    document.querySelector('#firstName').value = '';
    document.querySelector('#lastName').value = '';
    document.querySelector('#iNumber').value = '';
}

function clearStudents() {
    let table = document.querySelector('tbody');
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
}

function deleteStudent(student) {
    let pos = students.indexOf(student);

    if (pos < 0) {
        return;
    }

    students.splice(pos, 1);

    /* save to local storage */
    saveStudents(students);

    /* populate table */
    loadStudents();
}

function loadStudents() {
    clearStudents();

    students.forEach(
        (student) => {
            let tr = document.createElement('tr');
            let tdFirstName = document.createElement('td');            
            let tdLastName = document.createElement('td');            
            let tdINumber = document.createElement('td');            
            let tdEdit = document.createElement('td');            

            tdFirstName.textContent = student.firstName;
            tdLastName.textContent = student.lastName;
            tdINumber.textContent = student.iNumber;

            let aDelete = document.createElement('a');
            aDelete.setAttribute('href', '#');
            aDelete.addEventListener('click', deleteStudent.bind(null, student), false);
            aDelete.textContent = 'Delete';

            tdEdit.appendChild(aDelete);

            
            tr.appendChild(tdFirstName);
            tr.appendChild(tdLastName);
            tr.appendChild(tdINumber);
            tr.appendChild(tdEdit);

            document.querySelector('tbody').appendChild(tr);            

            // document.querySelector('tbody').innerHTML += 
            // `<tr>
            //     <td>${ student.firstName }</td>
            //     <td>${ student.lastName }</td>
            //     <td>${ student.iNumber }</td>
            // </tr>`;
        }
    );
}

function saveStudents(students) {
    localStorage.setItem('students', JSON.stringify(students));
}
