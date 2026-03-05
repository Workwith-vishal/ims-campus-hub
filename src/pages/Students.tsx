import { useState } from 'react';
import { DataTable } from '@/components/DataTable';
import { StatusBadge } from '@/components/StatusBadge';
import { StudentFormDialog } from '@/components/StudentFormDialog';
import { DeleteConfirmDialog } from '@/components/DeleteConfirmDialog';
import { mockStudents } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';
import type { Student } from '@/types';

export default function StudentsPage() {
  const { toast } = useToast();
  const [students, setStudents] = useState<Student[]>(mockStudents);
  const [formOpen, setFormOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [deletingStudent, setDeletingStudent] = useState<Student | null>(null);

  const handleSubmit = (data: Partial<Student> & { id?: string }) => {
    if (data.id) {
      setStudents(prev => prev.map(s => s.id === data.id ? { ...s, ...data } as Student : s));
      toast({ title: 'Student Updated', description: `${data.name} has been updated successfully.` });
    } else {
      const newStudent: Student = { ...data, id: crypto.randomUUID() } as Student;
      setStudents(prev => [newStudent, ...prev]);
      toast({ title: 'Student Added', description: `${data.name} has been added successfully.` });
    }
    setEditingStudent(null);
  };

  const handleDelete = () => {
    if (!deletingStudent) return;
    setStudents(prev => prev.filter(s => s.id !== deletingStudent.id));
    toast({ title: 'Student Deleted', description: `${deletingStudent.name} has been removed.`, variant: 'destructive' });
    setDeletingStudent(null);
  };

  const openEdit = (student: Student) => {
    setEditingStudent(student);
    setFormOpen(true);
  };

  const openAdd = () => {
    setEditingStudent(null);
    setFormOpen(true);
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Student Management</h1>
        <p className="page-description">Manage all enrolled students</p>
      </div>
      <DataTable<Student>
        data={students}
        title="All Students"
        searchKey="name"
        onAdd={openAdd}
        onEdit={openEdit}
        onDelete={setDeletingStudent}
        addLabel="Add Student"
        columns={[
          { key: 'rollNumber', label: 'Roll No.' },
          { key: 'name', label: 'Name' },
          { key: 'department', label: 'Department' },
          { key: 'course', label: 'Course' },
          { key: 'semester', label: 'Sem' },
          { key: 'phone', label: 'Phone' },
          { key: 'status', label: 'Status', render: (s) => <StatusBadge status={s.status} /> },
        ]}
      />
      <StudentFormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        student={editingStudent}
        onSubmit={handleSubmit}
      />
      <DeleteConfirmDialog
        open={!!deletingStudent}
        onOpenChange={(open) => !open && setDeletingStudent(null)}
        onConfirm={handleDelete}
        title="Delete Student"
        description={`Are you sure you want to delete ${deletingStudent?.name}? This action cannot be undone.`}
      />
    </div>
  );
}
