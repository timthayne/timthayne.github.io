import { Student} from './student.js';

let student1 = new Student('Tim', 'Thayne', '11-111-1111');

document.querySelector('tbody').innerHTML = 
    `<tr>
        <td>${ student1.firstName }</td>
        <td>${ student1.lastName }</td>
        <td>${ student1.iNumber } </td>
    </tr>`
;

student1.log();
