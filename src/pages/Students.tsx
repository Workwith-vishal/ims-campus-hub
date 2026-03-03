import { DataTable } from '@/components/DataTable';
import { StatusBadge } from '@/components/StatusBadge';
import { mockStudents } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

export default function StudentsPage() {
  const { toast } = useToast();
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Student Management</h1>
        <p className="page-description">Manage all enrolled students</p>
      </div>
      <DataTable
        data={mockStudents}
        title="All Students"
        searchKey="name"
        onAdd={() => toast({ title: 'Add Student', description: 'Form coming with Lovable Cloud integration' })}
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
    </div>
  );
}
