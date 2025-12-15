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


### Grade Point System:
| Grade | Points |
|------|--------|
| A    | 5      |
| B    | 4      |
| C    | 3      |
| D    | 2      |
| F    | 0      |

---

## 💾 Local Storage Implementation
- Course data is stored in the browser using **LocalStorage**
- Data persists even after page refresh or browser restart
- Users can remove selected courses, and the storage updates automatically

---

## 🗑️ Course Management
- Each course can be selected using a checkbox
- A **Remove Selected Courses** button deletes only chosen entries
- GPA is recalculated instantly after removal

---

## 🖨️ Print & Export Feature
- The print page is optimized using CSS print media queries
- Only the course table and GPA summary are printed
- Users can export the GPA report as a **PDF**

---

## 🚀 How to Run the Project
1. Download or clone the repository
2. Open `index.html` in any modern web browser
3. Navigate through the application using the navbar
4. Add courses, view GPA, and export results

---


---

## ✅ Conclusion
The GPA Calculator is a simple, efficient, and user-friendly web application that enables students to accurately calculate and monitor their academic performance.  
By combining clear design, persistent storage, and export functionality, the system provides a practical solution for academic GPA tracking.

---

# Link to soft-skill course
https://distinction.app/public-certificate/8b20dd18-7b82-4dc0-9872-78f2c600309f

#  Link to introductory course certificate 
https://distinction.app/public-certificate/20aaa9f9-5778-44dc-9566-7a3ac81816ba

# Live Link 