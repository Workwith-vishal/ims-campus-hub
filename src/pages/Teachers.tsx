import { useState } from 'react';
import { DataTable } from '@/components/DataTable';
import { StatusBadge } from '@/components/StatusBadge';
import { TeacherFormDialog } from '@/components/TeacherFormDialog';
import { DeleteConfirmDialog } from '@/components/DeleteConfirmDialog';
import { mockTeachers } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';
import type { Teacher } from '@/types';

export default function TeachersPage() {
  const { toast } = useToast();
  const [teachers, setTeachers] = useState<Teacher[]>(mockTeachers);
  const [formOpen, setFormOpen] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null);
  const [deletingTeacher, setDeletingTeacher] = useState<Teacher | null>(null);

  const handleSubmit = (data: Partial<Teacher> & { id?: string }) => {
    if (data.id) {
      setTeachers(prev => prev.map(t => t.id === data.id ? { ...t, ...data } as Teacher : t));
      toast({ title: 'Teacher Updated', description: `${data.name} has been updated successfully.` });
    } else {
      const newTeacher: Teacher = { ...data, id: crypto.randomUUID() } as Teacher;
      setTeachers(prev => [newTeacher, ...prev]);
      toast({ title: 'Teacher Added', description: `${data.name} has been added successfully.` });
    }
    setEditingTeacher(null);
  };

  const handleDelete = () => {
    if (!deletingTeacher) return;
    setTeachers(prev => prev.filter(t => t.id !== deletingTeacher.id));
    toast({ title: 'Teacher Deleted', description: `${deletingTeacher.name} has been removed.`, variant: 'destructive' });
    setDeletingTeacher(null);
  };

  const openEdit = (teacher: Teacher) => {
    setEditingTeacher(teacher);
    setFormOpen(true);
  };

  const openAdd = () => {
    setEditingTeacher(null);
    setFormOpen(true);
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Teacher Management</h1>
        <p className="page-description">Manage all faculty members</p>
      </div>
      <DataTable<Teacher>
        data={teachers}
        title="All Teachers"
        searchKey="name"
        onAdd={openAdd}
        onEdit={openEdit}
        onDelete={setDeletingTeacher}
        addLabel="Add Teacher"
        columns={[
          { key: 'employeeId', label: 'Employee ID' },
          { key: 'name', label: 'Name' },
          { key: 'department', label: 'Department' },
          { key: 'designation', label: 'Designation' },
          { key: 'specialization', label: 'Specialization' },
          { key: 'status', label: 'Status', render: (t) => <StatusBadge status={t.status} /> },
        ]}
      />
      <TeacherFormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        teacher={editingTeacher}
        onSubmit={handleSubmit}
      />
      <DeleteConfirmDialog
        open={!!deletingTeacher}
        onOpenChange={(open) => !open && setDeletingTeacher(null)}
        onConfirm={handleDelete}
        title="Delete Teacher"
        description={`Are you sure you want to delete ${deletingTeacher?.name}? This action cannot be undone.`}
      />
    </div>
  );
}
