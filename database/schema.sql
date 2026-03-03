-- PostgreSQL ERP Schema Design for IMS Campus Hub

-- Academic Domain
CREATE TABLE Departments (
    department_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE Instructors (
    instructor_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    department_id INTEGER REFERENCES Departments(department_id)
);

CREATE TABLE Courses (
    course_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    department_id INTEGER REFERENCES Departments(department_id)
);

CREATE TABLE Students (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    enrollment_date DATE NOT NULL
);

CREATE TABLE Enrollments (
    enrollment_id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES Students(student_id),
    course_id INTEGER REFERENCES Courses(course_id)
);

-- HR Domain
CREATE TABLE Positions (
    position_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    responsibilities TEXT
);

CREATE TABLE Employees (
    employee_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    position_id INTEGER REFERENCES Positions(position_id),
    department_id INTEGER REFERENCES Departments(department_id)
);

CREATE TABLE Salaries (
    salary_id SERIAL PRIMARY KEY,
    employee_id INTEGER REFERENCES Employees(employee_id),
    amount DECIMAL(10, 2) NOT NULL,
    effective_date DATE NOT NULL
);

-- Student Lifecycle Domain
CREATE TABLE Admissions (
    admission_id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES Students(student_id),
    admission_date DATE NOT NULL
);

CREATE TABLE Attendance (
    attendance_id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES Students(student_id),
    date DATE NOT NULL
);

CREATE TABLE Assessments (
    assessment_id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES Students(student_id),
    score DECIMAL(5, 2)
);

CREATE TABLE Grades (
    grade_id SERIAL PRIMARY KEY,
    enrollment_id INTEGER REFERENCES Enrollments(enrollment_id),
    grade VARCHAR(2) NOT NULL
);

-- Finance Domain
CREATE TABLE Fees (
    fee_id SERIAL PRIMARY KEY,
    amount DECIMAL(10, 2) NOT NULL,
    due_date DATE NOT NULL
);

CREATE TABLE Payments (
    payment_id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES Students(student_id),
    fee_id INTEGER REFERENCES Fees(fee_id),
    amount DECIMAL(10, 2) NOT NULL,
    payment_date DATE NOT NULL
);

CREATE TABLE Scholarships (
    scholarship_id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES Students(student_id),
    amount DECIMAL(10, 2) NOT NULL
);

-- Library Domain
CREATE TABLE Books (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
);

CREATE TABLE Borrowers (
    borrower_id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES Students(student_id)
);

CREATE TABLE Loans (
    loan_id SERIAL PRIMARY KEY,
    book_id INTEGER REFERENCES Books(book_id),
    borrower_id INTEGER REFERENCES Borrowers(borrower_id),
    loan_date DATE NOT NULL,
    return_date DATE
);

-- Communication Domain
CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL
);

CREATE TABLE Messages (
    message_id SERIAL PRIMARY KEY,
    sender_id INTEGER REFERENCES Users(user_id),
    recipient_id INTEGER REFERENCES Users(user_id),
    content TEXT NOT NULL,
    sent_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Notifications (
    notification_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(user_id),
    content TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);