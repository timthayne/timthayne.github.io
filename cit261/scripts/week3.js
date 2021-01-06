let professors = [
    {
        firstName: 'Tim',
        lastName: 'Thayne',
        iNumber: '11-111-1111'
    },
    {
        firstName: 'Tim',
        lastName: 'Thayne',
        iNumber: '11-111-1111'
    },
    {
        firstName: 'Tim',
        lastName: 'Thayne',
        iNumber: '11-111-1111'
    }
];

professors.forEach(
    professor => {
        console.table(professor);
    }
);

let professor = {
    firstName: 'Tim',
    lastName: 'Thayne',
    iNumber: '11-111-1111'
};

let professor2 = {
    firstNName: 'Joe',
    lastName: 'Montana',
    iNumberrr: '22-222-2222'
}

// let firstName = 'Tim';
// let lastName = 'Thayne';
// let iNumber = '11-111-1111';

// create a new row
let trProfessor = document.createElement('tr');

// create a new cell
let tdName = document.createElement('td');
tdName.innerHTML = `<em>${professor2.firstName} ${professor.lastName}</em>`;

// create a new cell
let tdINumber = document.createElement('td');
tdINumber.innerHTML = professor.iNumber;

// append cell to the row
trProfessor.appendChild(tdName);
trProfessor.appendChild(tdINumber);

document.querySelectorAll('tbody')[1].appendChild(trProfessor);


console.log(professor.iNumber);




const students = [
    'Michael Wilkins',
    'Jennifer Thomas',
    'Eric Mott',
    'Alex Matheson',
    'David Headrick',
    'Andre Neto'
];

students.forEach(
    student => {
        // create a new row
        let tr = document.createElement('tr');

        // create a new cell
        let td = document.createElement('td');
        td.innerHTML = `<em>${student}</em>`;

        // append cell to the row
        tr.appendChild(td);

        document.querySelector('tbody').appendChild(tr);
    }
);

/*
for (let i = 0; i < students.length; i++) {
    // create a new row
    let tr = document.createElement('tr');

    // create a new cell
    let td = document.createElement('td');
    td.textContent = students[i];

    // append cell to the row
    tr.appendChild(td);

    document.querySelector('tbody').appendChild(tr);
}
*/