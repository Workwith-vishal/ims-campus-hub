import { DataTable } from '@/components/DataTable';
import { StatusBadge } from '@/components/StatusBadge';
import { mockTeachers } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

export default function TeachersPage() {
  const { toast } = useToast();
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Teacher Management</h1>
        <p className="page-description">Manage all faculty members</p>
      </div>
      <DataTable
        data={mockTeachers}
        title="All Teachers"
        searchKey="name"
        onAdd={() => toast({ title: 'Add Teacher', description: 'Form coming with Lovable Cloud integration' })}
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
    </div>
  );
}
