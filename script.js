const form = document.getElementById("course-form");
const tableBody = document.querySelector("#courses-table tbody");
const gpaValue = document.getElementById("gpa-value");
const resetBtn = document.getElementById("reset-btn");
const printBtn = document.getElementById("print-btn");

let courses = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("courseName").value;
    const credit = Number(document.getElementById("courseCredit").value);
    const grade = Number(document.getElementById("courseGrade").value);

    if (!name || !credit || grade === "") {
        alert("All fields are required");
        return;
    }

    const points = credit * grade;

    const course = { name, credit, grade, points };
    courses.push(course);

    renderTable();
    calculateGPA();

    form.reset();
});

function renderTable() {
    tableBody.innerHTML = "";

    courses.forEach((c, index) => {
        const row = `
            <tr>
                <td>${c.name}</td>
                <td>${c.credit}</td>
                <td>${c.grade}</td>
                <td>${c.points}</td>
                <td><button class="action-btn" onclick="removeCourse(${index})">Delete</button></td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function calculateGPA() {
    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach(c => {
        totalPoints += c.points;
        totalCredits += c.credit;
    });

    const gpa = totalCredits ? (totalPoints / totalCredits).toFixed(2) : "0.00";
    gpaValue.innerText = gpa;
}

function removeCourse(index) {
    courses.splice(index, 1);
    renderTable();
    calculateGPA();
}

resetBtn.addEventListener("click", function () {
    if (confirm("Are you sure you want to reset?")) {
        courses = [];
        renderTable();
        calculateGPA();
    }
});

printBtn.addEventListener("click", function () {
    window.print();
});
