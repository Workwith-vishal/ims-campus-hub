import { DataTable } from '@/components/DataTable';
import { StatusBadge } from '@/components/StatusBadge';
import { mockCourses } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

export default function CoursesPage() {
  const { toast } = useToast();
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Course Management</h1>
        <p className="page-description">Manage academic courses and programs</p>
      </div>
      <DataTable
        data={mockCourses}
        title="All Courses"
        searchKey="name"
        onAdd={() => toast({ title: 'Add Course', description: 'Form coming with Lovable Cloud integration' })}
        addLabel="Add Course"
        columns={[
          { key: 'code', label: 'Code' },
          { key: 'name', label: 'Course' },
          { key: 'department', label: 'Department' },
          { key: 'duration', label: 'Duration' },
          { key: 'totalSemesters', label: 'Semesters' },
          { key: 'totalStudents', label: 'Students' },
          { key: 'status', label: 'Status', render: (c) => <StatusBadge status={c.status} /> },
        ]}
      />
    </div>
  );
}
