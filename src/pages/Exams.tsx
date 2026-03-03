import { DataTable } from '@/components/DataTable';
import { StatusBadge } from '@/components/StatusBadge';
import { Badge } from '@/components/ui/badge';
import { mockExams } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

export default function ExamsPage() {
  const { toast } = useToast();
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Exam Management</h1>
        <p className="page-description">Schedule and manage examinations</p>
      </div>
      <DataTable
        data={mockExams}
        title="All Exams"
        searchKey="name"
        onAdd={() => toast({ title: 'Schedule Exam', description: 'Form coming with Lovable Cloud integration' })}
        addLabel="Schedule Exam"
        columns={[
          { key: 'name', label: 'Exam' },
          { key: 'subject', label: 'Subject' },
          { key: 'date', label: 'Date' },
          { key: 'type', label: 'Type', render: (e) => <Badge variant="outline" className="capitalize text-xs">{e.type}</Badge> },
          { key: 'totalMarks', label: 'Total Marks' },
          { key: 'passingMarks', label: 'Pass Marks' },
          { key: 'status', label: 'Status', render: (e) => <StatusBadge status={e.status} /> },
        ]}
      />
    </div>
  );
}
