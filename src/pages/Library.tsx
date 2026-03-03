import { DataTable } from '@/components/DataTable';
import { StatusBadge } from '@/components/StatusBadge';
import { mockBooks } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

export default function LibraryPage() {
  const { toast } = useToast();
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Library Management</h1>
        <p className="page-description">Manage books and resources</p>
      </div>
      <DataTable
        data={mockBooks}
        title="Library Catalog"
        searchKey="title"
        onAdd={() => toast({ title: 'Add Book', description: 'Form coming with Lovable Cloud integration' })}
        addLabel="Add Book"
        columns={[
          { key: 'title', label: 'Title' },
          { key: 'author', label: 'Author' },
          { key: 'isbn', label: 'ISBN' },
          { key: 'category', label: 'Category' },
          { key: 'totalCopies', label: 'Total' },
          { key: 'availableCopies', label: 'Available' },
          { key: 'status', label: 'Status', render: (b) => <StatusBadge status={b.status} /> },
        ]}
      />
    </div>
  );
}
