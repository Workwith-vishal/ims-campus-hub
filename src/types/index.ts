export type Role = 'super_admin' | 'admin' | 'teacher' | 'student' | 'accountant' | 'librarian';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  rollNumber: string;
  department: string;
  course: string;
  semester: number;
  phone: string;
  address: string;
  dateOfBirth: string;
  admissionDate: string;
  status: 'active' | 'inactive' | 'graduated';
}

export interface Teacher {
  id: string;
  name: string;
  email: string;
  employeeId: string;
  department: string;
  designation: string;
  phone: string;
  specialization: string;
  joiningDate: string;
  status: 'active' | 'inactive';
}

export interface Department {
  id: string;
  name: string;
  code: string;
  head: string;
  totalStudents: number;
  totalTeachers: number;
  description: string;
}

export interface Course {
  id: string;
  name: string;
  code: string;
  department: string;
  duration: string;
  totalSemesters: number;
  totalStudents: number;
  status: 'active' | 'inactive';
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  course: string;
  semester: number;
  credits: number;
  teacher: string;
  type: 'theory' | 'practical' | 'elective';
}

export interface AttendanceRecord {
  id: string;
  student: string;
  subject: string;
  date: string;
  status: 'present' | 'absent' | 'late';
  markedBy: string;
}

export interface Exam {
  id: string;
  name: string;
  subject: string;
  course: string;
  date: string;
  totalMarks: number;
  passingMarks: number;
  type: 'midterm' | 'final' | 'quiz' | 'practical';
  status: 'scheduled' | 'ongoing' | 'completed';
}

export interface Result {
  id: string;
  student: string;
  exam: string;
  subject: string;
  marksObtained: number;
  totalMarks: number;
  grade: string;
  status: 'pass' | 'fail';
}

export interface Fee {
  id: string;
  student: string;
  type: 'tuition' | 'hostel' | 'library' | 'lab' | 'exam' | 'other';
  amount: number;
  dueDate: string;
  paidDate?: string;
  status: 'paid' | 'pending' | 'overdue';
  semester: number;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  category: string;
  totalCopies: number;
  availableCopies: number;
  publisher: string;
  status: 'available' | 'all-issued';
}

export interface Notice {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  category: 'general' | 'academic' | 'exam' | 'event' | 'urgent';
  targetAudience: Role[];
}

export interface LectureNote {
  id: string;
  title: string;
  subject: string;
  teacher: string;
  uploadDate: string;
  fileUrl: string;
  fileSize: string;
  description: string;
}
