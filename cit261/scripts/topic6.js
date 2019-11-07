import { Student } from './student.js';

let students = [
    new Student('Tim', 'Thayne', '111111111'),
    new Student('Breanna', 'Hansen', '222222222'),
    new Student('Joseph', 'Wurz', '333333333')
];

// for (let i = 0; i < students.length; i++) {
//     let tr = document.createElement("tr");
    
//     let tdFirstName = document.createElement("td");
//     let tdLastName = document.createElement("td");
//     let tdINumber = document.createElement("td");

//     tdFirstName.innerHTML = students[i].firstName;
//     tdLastName.innerHTML = students[i].lastName;
//     tdINumber.innerHTML = students[i].iNumber;

//     tr.appendChild(tdFirstName);
//     tr.appendChild(tdLastName);
//     tr.appendChild(tdINumber);

//     document.getElementById("students").appendChild(tr);
// }

students.forEach(
    (student) => {
        let tr = document.createElement("tr");
    
        let tdFirstName = document.createElement("td");
        let tdLastName = document.createElement("td");
        let tdINumber = document.createElement("td");

        tdFirstName.innerHTML = student.firstName;
        tdLastName.innerHTML = student.lastName;
        tdINumber.innerHTML = student.iNumber;

        tr.appendChild(tdFirstName);
        tr.appendChild(tdLastName);
        tr.appendChild(tdINumber);

        document.getElementById("students").appendChild(tr);
    }
);
