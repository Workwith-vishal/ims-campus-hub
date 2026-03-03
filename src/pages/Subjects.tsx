import { DataTable } from '@/components/DataTable';
import { Badge } from '@/components/ui/badge';
import { mockSubjects } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

export default function SubjectsPage() {
  const { toast } = useToast();
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Subject Management</h1>
        <p className="page-description">Manage subjects and assignments</p>
      </div>
      <DataTable
        data={mockSubjects}
        title="All Subjects"
        searchKey="name"
        onAdd={() => toast({ title: 'Add Subject', description: 'Form coming with Lovable Cloud integration' })}
        addLabel="Add Subject"
        columns={[
          { key: 'code', label: 'Code' },
          { key: 'name', label: 'Subject' },
          { key: 'course', label: 'Course' },
          { key: 'semester', label: 'Sem' },
          { key: 'credits', label: 'Credits' },
          { key: 'teacher', label: 'Teacher' },
          { key: 'type', label: 'Type', render: (s) => <Badge variant="outline" className="capitalize text-xs">{s.type}</Badge> },
        ]}
      />
    </div>
  );
}
