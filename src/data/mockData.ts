import type { Student, Teacher, Department, Course, Subject, AttendanceRecord, Exam, Result, Fee, Book, Notice, LectureNote } from '@/types';

export const mockStudents: Student[] = [
  { id: '1', name: 'Rahul Verma', email: 'rahul@ims.edu', rollNumber: 'IMS2024001', department: 'Computer Science', course: 'B.Tech', semester: 3, phone: '9876543210', address: 'Sector 62, Noida', dateOfBirth: '2003-05-15', admissionDate: '2024-08-01', status: 'active' },
  { id: '2', name: 'Priya Sharma', email: 'priya@ims.edu', rollNumber: 'IMS2024002', department: 'Electronics', course: 'B.Tech', semester: 3, phone: '9876543211', address: 'Sector 18, Noida', dateOfBirth: '2003-08-22', admissionDate: '2024-08-01', status: 'active' },
  { id: '3', name: 'Amit Kumar', email: 'amit@ims.edu', rollNumber: 'IMS2023015', department: 'Computer Science', course: 'BCA', semester: 5, phone: '9876543212', address: 'Ghaziabad', dateOfBirth: '2002-11-10', admissionDate: '2023-08-01', status: 'active' },
  { id: '4', name: 'Sneha Gupta', email: 'sneha@ims.edu', rollNumber: 'IMS2023020', department: 'Management', course: 'BBA', semester: 5, phone: '9876543213', address: 'Greater Noida', dateOfBirth: '2002-03-18', admissionDate: '2023-08-01', status: 'active' },
  { id: '5', name: 'Vikash Singh', email: 'vikash@ims.edu', rollNumber: 'IMS2022008', department: 'Computer Science', course: 'MCA', semester: 4, phone: '9876543214', address: 'Noida', dateOfBirth: '2001-07-25', admissionDate: '2022-08-01', status: 'graduated' },
  { id: '6', name: 'Neha Yadav', email: 'neha@ims.edu', rollNumber: 'IMS2024010', department: 'Electronics', course: 'B.Tech', semester: 1, phone: '9876543215', address: 'Noida', dateOfBirth: '2005-01-12', admissionDate: '2024-08-01', status: 'active' },
];

export const mockTeachers: Teacher[] = [
  { id: '1', name: 'Dr. Priya Singh', email: 'priya.singh@ims.edu', employeeId: 'EMP001', department: 'Computer Science', designation: 'Professor', phone: '9988776655', specialization: 'Machine Learning', joiningDate: '2015-06-01', status: 'active' },
  { id: '2', name: 'Prof. Arun Mehta', email: 'arun@ims.edu', employeeId: 'EMP002', department: 'Electronics', designation: 'Associate Professor', phone: '9988776656', specialization: 'VLSI Design', joiningDate: '2017-08-01', status: 'active' },
  { id: '3', name: 'Dr. Kavita Joshi', email: 'kavita@ims.edu', employeeId: 'EMP003', department: 'Management', designation: 'Professor', phone: '9988776657', specialization: 'Marketing', joiningDate: '2014-01-15', status: 'active' },
  { id: '4', name: 'Mr. Ravi Tiwari', email: 'ravi@ims.edu', employeeId: 'EMP004', department: 'Computer Science', designation: 'Assistant Professor', phone: '9988776658', specialization: 'Web Development', joiningDate: '2020-07-01', status: 'active' },
];

export const mockDepartments: Department[] = [
  { id: '1', name: 'Computer Science', code: 'CS', head: 'Dr. Priya Singh', totalStudents: 320, totalTeachers: 15, description: 'Department of Computer Science & Engineering' },
  { id: '2', name: 'Electronics', code: 'EC', head: 'Prof. Arun Mehta', totalStudents: 180, totalTeachers: 10, description: 'Department of Electronics & Communication' },
  { id: '3', name: 'Management', code: 'MGT', head: 'Dr. Kavita Joshi', totalStudents: 250, totalTeachers: 12, description: 'Department of Business Management' },
  { id: '4', name: 'Humanities', code: 'HUM', head: 'Dr. Sunita Devi', totalStudents: 90, totalTeachers: 8, description: 'Department of Humanities & Social Sciences' },
];

export const mockCourses: Course[] = [
  { id: '1', name: 'B.Tech Computer Science', code: 'BTCS', department: 'Computer Science', duration: '4 Years', totalSemesters: 8, totalStudents: 240, status: 'active' },
  { id: '2', name: 'BCA', code: 'BCA', department: 'Computer Science', duration: '3 Years', totalSemesters: 6, totalStudents: 80, status: 'active' },
  { id: '3', name: 'MCA', code: 'MCA', department: 'Computer Science', duration: '2 Years', totalSemesters: 4, totalStudents: 60, status: 'active' },
  { id: '4', name: 'B.Tech Electronics', code: 'BTEC', department: 'Electronics', duration: '4 Years', totalSemesters: 8, totalStudents: 180, status: 'active' },
  { id: '5', name: 'BBA', code: 'BBA', department: 'Management', duration: '3 Years', totalSemesters: 6, totalStudents: 150, status: 'active' },
  { id: '6', name: 'MBA', code: 'MBA', department: 'Management', duration: '2 Years', totalSemesters: 4, totalStudents: 100, status: 'active' },
];

export const mockSubjects: Subject[] = [
  { id: '1', name: 'Data Structures', code: 'CS301', course: 'B.Tech CS', semester: 3, credits: 4, teacher: 'Dr. Priya Singh', type: 'theory' },
  { id: '2', name: 'Database Systems', code: 'CS302', course: 'B.Tech CS', semester: 3, credits: 4, teacher: 'Mr. Ravi Tiwari', type: 'theory' },
  { id: '3', name: 'Operating Systems', code: 'CS303', course: 'B.Tech CS', semester: 3, credits: 3, teacher: 'Dr. Priya Singh', type: 'theory' },
  { id: '4', name: 'DS Lab', code: 'CS351', course: 'B.Tech CS', semester: 3, credits: 2, teacher: 'Mr. Ravi Tiwari', type: 'practical' },
  { id: '5', name: 'Digital Electronics', code: 'EC201', course: 'B.Tech EC', semester: 3, credits: 4, teacher: 'Prof. Arun Mehta', type: 'theory' },
  { id: '6', name: 'Marketing Management', code: 'MGT301', course: 'BBA', semester: 5, credits: 3, teacher: 'Dr. Kavita Joshi', type: 'theory' },
];

export const mockAttendance: AttendanceRecord[] = [
  { id: '1', student: 'Rahul Verma', subject: 'Data Structures', date: '2026-03-01', status: 'present', markedBy: 'Dr. Priya Singh' },
  { id: '2', student: 'Rahul Verma', subject: 'Database Systems', date: '2026-03-01', status: 'present', markedBy: 'Mr. Ravi Tiwari' },
  { id: '3', student: 'Priya Sharma', subject: 'Digital Electronics', date: '2026-03-01', status: 'absent', markedBy: 'Prof. Arun Mehta' },
  { id: '4', student: 'Rahul Verma', subject: 'Data Structures', date: '2026-03-02', status: 'late', markedBy: 'Dr. Priya Singh' },
  { id: '5', student: 'Amit Kumar', subject: 'Database Systems', date: '2026-03-01', status: 'present', markedBy: 'Mr. Ravi Tiwari' },
  { id: '6', student: 'Sneha Gupta', subject: 'Marketing Management', date: '2026-03-01', status: 'present', markedBy: 'Dr. Kavita Joshi' },
];

export const mockExams: Exam[] = [
  { id: '1', name: 'Mid-Term CS301', subject: 'Data Structures', course: 'B.Tech CS', date: '2026-03-15', totalMarks: 50, passingMarks: 18, type: 'midterm', status: 'scheduled' },
  { id: '2', name: 'Quiz 1 CS302', subject: 'Database Systems', course: 'B.Tech CS', date: '2026-03-10', totalMarks: 20, passingMarks: 8, type: 'quiz', status: 'completed' },
  { id: '3', name: 'Final EC201', subject: 'Digital Electronics', course: 'B.Tech EC', date: '2026-04-20', totalMarks: 100, passingMarks: 40, type: 'final', status: 'scheduled' },
  { id: '4', name: 'Practical CS351', subject: 'DS Lab', course: 'B.Tech CS', date: '2026-03-12', totalMarks: 50, passingMarks: 20, type: 'practical', status: 'ongoing' },
];

export const mockResults: Result[] = [
  { id: '1', student: 'Rahul Verma', exam: 'Quiz 1 CS302', subject: 'Database Systems', marksObtained: 17, totalMarks: 20, grade: 'A', status: 'pass' },
  { id: '2', student: 'Priya Sharma', exam: 'Quiz 1 CS302', subject: 'Database Systems', marksObtained: 14, totalMarks: 20, grade: 'B+', status: 'pass' },
  { id: '3', student: 'Amit Kumar', exam: 'Quiz 1 CS302', subject: 'Database Systems', marksObtained: 6, totalMarks: 20, grade: 'F', status: 'fail' },
];

export const mockFees: Fee[] = [
  { id: '1', student: 'Rahul Verma', type: 'tuition', amount: 85000, dueDate: '2026-03-31', status: 'pending', semester: 3 },
  { id: '2', student: 'Rahul Verma', type: 'library', amount: 2000, dueDate: '2026-03-31', paidDate: '2026-02-15', status: 'paid', semester: 3 },
  { id: '3', student: 'Priya Sharma', type: 'tuition', amount: 85000, dueDate: '2026-02-28', status: 'overdue', semester: 3 },
  { id: '4', student: 'Sneha Gupta', type: 'tuition', amount: 65000, dueDate: '2026-03-31', paidDate: '2026-03-01', status: 'paid', semester: 5 },
  { id: '5', student: 'Amit Kumar', type: 'hostel', amount: 35000, dueDate: '2026-03-31', status: 'pending', semester: 5 },
];

export const mockBooks: Book[] = [
  { id: '1', title: 'Introduction to Algorithms', author: 'Cormen, Leiserson, Rivest', isbn: '978-0262033848', category: 'Computer Science', totalCopies: 15, availableCopies: 3, publisher: 'MIT Press', status: 'available' },
  { id: '2', title: 'Database System Concepts', author: 'Silberschatz, Korth', isbn: '978-0078022159', category: 'Computer Science', totalCopies: 10, availableCopies: 0, publisher: 'McGraw Hill', status: 'all-issued' },
  { id: '3', title: 'Digital Design', author: 'Morris Mano', isbn: '978-0132774208', category: 'Electronics', totalCopies: 12, availableCopies: 5, publisher: 'Pearson', status: 'available' },
  { id: '4', title: 'Principles of Marketing', author: 'Philip Kotler', isbn: '978-0134492513', category: 'Management', totalCopies: 20, availableCopies: 8, publisher: 'Pearson', status: 'available' },
];

export const mockNotices: Notice[] = [
  { id: '1', title: 'Mid-Term Examination Schedule', content: 'Mid-term examinations for all courses will commence from March 15, 2026. Detailed schedule available on the exam portal.', author: 'Exam Cell', date: '2026-03-01', category: 'exam', targetAudience: ['student', 'teacher'] },
  { id: '2', title: 'Annual Cultural Fest - Utsav 2026', content: 'IMS Noida annual cultural fest "Utsav 2026" will be held from April 5-7, 2026. All students are encouraged to participate.', author: 'Student Council', date: '2026-02-28', category: 'event', targetAudience: ['student', 'teacher', 'admin'] },
  { id: '3', title: 'Fee Payment Reminder', content: 'Last date for fee payment for Semester 3 is March 31, 2026. Late payment will attract a penalty of ₹500 per week.', author: 'Accounts Dept', date: '2026-03-02', category: 'urgent', targetAudience: ['student'] },
  { id: '4', title: 'Faculty Development Program', content: 'A 3-day FDP on "AI in Education" will be conducted from March 20-22, 2026. All faculty members are requested to register.', author: 'Dean Academics', date: '2026-02-25', category: 'academic', targetAudience: ['teacher', 'admin'] },
];

export const mockLectures: LectureNote[] = [
  { id: '1', title: 'Introduction to Trees & Binary Trees', subject: 'Data Structures', teacher: 'Dr. Priya Singh', uploadDate: '2026-02-28', fileUrl: '#', fileSize: '2.4 MB', description: 'Covers tree terminology, binary tree properties, and traversal algorithms.' },
  { id: '2', title: 'SQL Joins and Subqueries', subject: 'Database Systems', teacher: 'Mr. Ravi Tiwari', uploadDate: '2026-03-01', fileUrl: '#', fileSize: '1.8 MB', description: 'Deep dive into SQL joins, nested queries, and correlated subqueries.' },
  { id: '3', title: 'Process Scheduling Algorithms', subject: 'Operating Systems', teacher: 'Dr. Priya Singh', uploadDate: '2026-02-25', fileUrl: '#', fileSize: '3.1 MB', description: 'FCFS, SJF, Round Robin, and Priority scheduling with examples.' },
];
