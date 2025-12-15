# GPA-calculator
Students will develop a GPA computation tool where users can input courses, grades, and credits. It calculates GPA and displays the result.

# GPA Calculator

## 📌 Project Overview
The GPA Calculator is a web-based application developed to help students accurately calculate and track their Grade Point Average (GPA).  
The system allows users to input course details, automatically computes GPA based on credit units and grades, and provides options for managing, saving, and exporting results.

The application is designed with a clean, minimal, and professional user interface to ensure ease of use and clarity.

---

## 🎯 Objectives
The objectives of this project are to:
- Enable students to add and manage course details
- Automatically calculate GPA accurately
- Store course data locally using browser storage
- Allow selective removal of courses
- Provide a printable GPA report
- Export GPA results as a PDF document

---

## 🛠️ Technologies Used
- **HTML5** – Structure of the web pages  
- **CSS3** – Styling and layout (Minimal & Professional UI)  
- **JavaScript** – Application logic and interactivity  
- **LocalStorage** – Persistent data storage in the browser  

---

## 🎨 Design & UI
- **Color Palette:** Blue + Mint  
- **UI Style:** Minimal and Professional  
- **Responsive Layout:** Works across screen sizes  
- **Navigation Bar:** Easy navigation between pages  

---

## 📄 Application Pages
The GPA Calculator consists of multiple pages:

1. **Home Page (`index.html`)**  
   - Introduction to the application  
   - Call-to-action to start adding courses  

2. **Add Courses Page (`add.html`)**  
   - Form to input course name, course code, credit unit, and grade  
   - Saves course data to LocalStorage  

3. **View GPA Page (`gpa.html`)**  
   - Displays all added courses in a table  
   - Automatically calculates and displays GPA  
   - Allows users to select and remove specific courses  

4. **Print Page (`print.html`)**  
   - Displays a clean GPA report  
   - Enables printing or exporting the report as a PDF  

---

## 📊 GPA Calculation Logic
The GPA is calculated using the formula:

