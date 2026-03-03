import { DataTable } from '@/components/DataTable';
import { mockDepartments } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

export default function DepartmentsPage() {
  const { toast } = useToast();
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Department Management</h1>
        <p className="page-description">Manage academic departments</p>
      </div>
      <DataTable
        data={mockDepartments}
        title="All Departments"
        searchKey="name"
        onAdd={() => toast({ title: 'Add Department', description: 'Form coming with Lovable Cloud integration' })}
        addLabel="Add Department"
        columns={[
          { key: 'code', label: 'Code' },
          { key: 'name', label: 'Department' },
          { key: 'head', label: 'Head' },
          { key: 'totalStudents', label: 'Students' },
          { key: 'totalTeachers', label: 'Teachers' },
          { key: 'description', label: 'Description' },
        ]}
      />
    </div>
  );
}
