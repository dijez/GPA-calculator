# GPA Calculator — Documentation

## Project Title
GPA Calculator — Smart Frontend (LocalStorage + PDF Export + Dark Mode)

## Description
A modern, responsive GPA Calculator built with HTML, CSS and JavaScript. Features:
- Add/remove courses (course name, credit, grade)
- GPA calculation using Σ(grade × credit) / Σcredit
- LocalStorage to persist data between sessions
- Dark mode toggle (preference saved)
- Export report to PDF (client-side)
- Print view optimized and excludes UI controls

## Objective
Provide a lightweight GPA tool for students to track and export their semester/course GPA easily.

## Features
1. Add courses: name, credit unit, grade (0–5)
2. Real-time GPA calculation
3. LocalStorage persistence
4. Dark and Light themes
5. Export to PDF and Print support
6. Responsive layout for mobile and desktop

## How GPA is calculated
GPA = (Sum of (grade_value × credit_unit)) / (Sum of credit_unit)
Example:
  - Course A: credit 3, grade A(5) → points = 3 × 5 = 15
  - Course B: credit 2, grade B(4) → points = 2 × 4 = 8
  - Total points = 23, total credits = 5, GPA = 23 / 5 = 4.60

## File structure
- index.html
- add.html(add course)
- gpa.html(gpa calculator)
- print.html(gpa print PDF)
- style.css
- script.js
- palette.md
- screenshots/ (folder with required images)
- documentation.pdf (this doc exported to PDF)
- slides.pdf (presentation exported to PDF)

## Implementation notes
- Uses `html2pdf.js` for client-side PDF generation.
- Buttons and toggles use `.no-print` class to hide in PDF/print.
- All state stored in LocalStorage under `gpa_courses_v1`.
- Theme stored under `gpa_theme_pref_v1`.

## Limitations
- Data stored locally — clearing browser storage will remove data.
- No authentication or backend for multi-device sync.
- PDF styling depends on browser rendering; tested on modern Chrome.

## Future improvements
- Add CSV import/export
- Add session/semester grouping
- Add target GPA calculator & recommendations
- Add backend to store user profiles and support cross-device sync

## How to use
1. Open `index.html` in a browser.
2. Add course name, credit unit, and grade then click "Add Course".
3. GPA updates automatically.
4. Use "Download PDF" to save a copy of the report.
5. Use "Reset" to clearout selected saved courses.

## How to deploy (see deployment guide)
- Host on GitHub Pages or Netlify. (See deployment instructions file.)

## Contact
If you need help customizing or deploying, contact: khadijaahmad2k21@gmail.com
