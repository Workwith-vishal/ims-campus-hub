import { DataTable } from '@/components/DataTable';
import { StatusBadge } from '@/components/StatusBadge';
import { mockFees } from '@/data/mockData';
import { StatCard } from '@/components/StatCard';
import { IndianRupee, CheckCircle, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function FeesPage() {
  const { toast } = useToast();
  const paid = mockFees.filter(f => f.status === 'paid').reduce((s, f) => s + f.amount, 0);
  const pending = mockFees.filter(f => f.status !== 'paid').reduce((s, f) => s + f.amount, 0);

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Fees Management</h1>
        <p className="page-description">Track and manage student fees</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3 mb-6">
        <StatCard title="Total Collected" value={`₹${paid.toLocaleString()}`} icon={CheckCircle} color="success" />
        <StatCard title="Pending Amount" value={`₹${pending.toLocaleString()}`} icon={Clock} color="warning" />
        <StatCard title="Total Records" value={mockFees.length} icon={IndianRupee} color="primary" />
      </div>

      <DataTable
        data={mockFees}
        title="Fee Records"
        searchKey="student"
        onAdd={() => toast({ title: 'Record Payment', description: 'Form coming with Lovable Cloud integration' })}
        addLabel="Record Payment"
        columns={[
          { key: 'student', label: 'Student' },
          { key: 'type', label: 'Type', render: (f) => <span className="capitalize">{f.type}</span> },
          { key: 'amount', label: 'Amount', render: (f) => <span>₹{f.amount.toLocaleString()}</span> },
          { key: 'semester', label: 'Sem' },
          { key: 'dueDate', label: 'Due Date' },
          { key: 'paidDate', label: 'Paid Date', render: (f) => <span>{f.paidDate || '—'}</span> },
          { key: 'status', label: 'Status', render: (f) => <StatusBadge status={f.status} /> },
        ]}
      />
    </div>
  );
}
