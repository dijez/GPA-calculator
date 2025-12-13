// Load courses
function getCourses() {
    return JSON.parse(localStorage.getItem("courses")) || [];
}

// Save course
document.getElementById("courseForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    let courses = getCourses();

    let newCourse = {
        name: courseName.value,
        code: courseCode.value,
        unit: parseInt(courseUnit.value),
        grade: courseGrade.value
    };

    courses.push(newCourse);
    localStorage.setItem("courses", JSON.stringify(courses));

    alert("Course added!");
    this.reset();
});

// Display courses & calculate GPA
function loadCourses(tableBodyId, gpaSpanId) {
    let courses = getCourses();
    let tbody = document.querySelector(tableBodyId);
    let gpaSpan = document.querySelector(gpaSpanId);

    if (!tbody) return;

    tbody.innerHTML = "";
    let totalUnits = 0;
    let totalPoints = 0;

     courses.forEach((course, index) => {
        let tr = document.createElement("tr");

        tr.innerHTML = `
            <td>
                <input type="checkbox" class="course-check" data-index="${index}">
            </td>
            <td>${course.name}</td>
            <td>${course.code}</td>
            <td>${course.unit}</td>
            <td>${course.grade}</td>
        `;

        tbody.appendChild(tr);

        const gradePoints = { A: 5, B: 4, C: 3, D: 2, F: 0 };
        totalUnits += course.unit;
        totalPoints += course.unit * gradePoints[course.grade];
    });

    let gpa = totalUnits ? (totalPoints / totalUnits).toFixed(2) : "0.00";
    if (gpaSpan) gpaSpan.textContent = gpa;
}


// Load on pages
loadCourses("#coursesTable tbody", "#gpaValue");
loadCourses("#printTable tbody", "#printGPA");

document.getElementById("removeSelected")?.addEventListener("click", () => {
    let courses = getCourses();
    let checkboxes = document.querySelectorAll(".course-check");

    let updatedCourses = courses.filter((_, index) => {
        let checkbox = document.querySelector(
            `.course-check[data-index="${index}"]`
        );
        return !checkbox.checked;
    });

    if (updatedCourses.length === courses.length) {
        alert("Please select at least one course to remove.");
        return;
    }

    localStorage.setItem("courses", JSON.stringify(updatedCourses));
    if (confirm("Are you sure you want to reset?")) {
        courses = [];
        renderTable();
        calculateGPA();
    }
    // alert("Are you sure you want to remove this course ");
    // this.reset();
    loadCourses("#coursesTable tbody", "#gpaValue");
});


// const form = document.getElementById("course-form");
// const tableBody = document.querySelector("#courses-table tbody");
// const gpaValue = document.getElementById("gpa-value");
// const resetBtn = document.getElementById("reset-btn");
// const printBtn = document.getElementById("print-btn");

// let courses = [];

// form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const name = document.getElementById("courseName").value;
//     const credit = Number(document.getElementById("courseCredit").value);
//     const grade = Number(document.getElementById("courseGrade").value);

//     if (!name || !credit || grade === "") {
//         alert("All fields are required");
//         return;
//     }

//     const points = credit * grade;

//     const course = { name, credit, grade, points };
//     courses.push(course);

//     renderTable();
//     calculateGPA();

//     form.reset();
// });

// function renderTable() {
//     tableBody.innerHTML = "";

//     courses.forEach((c, index) => {
//         const row = `
//             <tr>
//                 <td>${c.name}</td>
//                 <td>${c.credit}</td>
//                 <td>${c.grade}</td>
//                 <td>${c.points}</td>
//                 <td><button class="action-btn" onclick="removeCourse(${index})">Delete</button></td>
//             </tr>
//         `;
//         tableBody.innerHTML += row;
//     });
// }

// function calculateGPA() {
//     let totalPoints = 0;
//     let totalCredits = 0;

//     courses.forEach(c => {
//         totalPoints += c.points;
//         totalCredits += c.credit;
//     });

//     const gpa = totalCredits ? (totalPoints / totalCredits).toFixed(2) : "0.00";
//     gpaValue.innerText = gpa;
// }

// function removeCourse(index) {
//     courses.splice(index, 1);
//     renderTable();
//     calculateGPA();
// }

// resetBtn.addEventListener("click", function () {
//     if (confirm("Are you sure you want to reset?")) {
//         courses = [];
//         renderTable();
//         calculateGPA();
//     }
// });

// printBtn.addEventListener("click", function () {
//     window.print();
// });
