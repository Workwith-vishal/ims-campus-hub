import { DataTable } from '@/components/DataTable';
import { StatusBadge } from '@/components/StatusBadge';
import { mockResults } from '@/data/mockData';

export default function ResultsPage() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Results Management</h1>
        <p className="page-description">View and manage exam results</p>
      </div>
      <DataTable
        data={mockResults}
        title="Exam Results"
        searchKey="student"
        columns={[
          { key: 'student', label: 'Student' },
          { key: 'exam', label: 'Exam' },
          { key: 'subject', label: 'Subject' },
          { key: 'marksObtained', label: 'Marks', render: (r) => <span>{r.marksObtained}/{r.totalMarks}</span> },
          { key: 'grade', label: 'Grade', render: (r) => <span className="font-semibold">{r.grade}</span> },
          { key: 'status', label: 'Status', render: (r) => <StatusBadge status={r.status} /> },
        ]}
      />
    </div>
  );
}
