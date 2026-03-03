import { DataTable } from '@/components/DataTable';
import { StatusBadge } from '@/components/StatusBadge';
import { mockAttendance } from '@/data/mockData';
import { StatCard } from '@/components/StatCard';
import { CalendarCheck, UserCheck, UserX } from 'lucide-react';

export default function AttendancePage() {
  const present = mockAttendance.filter(a => a.status === 'present').length;
  const absent = mockAttendance.filter(a => a.status === 'absent').length;
  const percentage = ((present / mockAttendance.length) * 100).toFixed(1);

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Attendance Management</h1>
        <p className="page-description">Track and manage student attendance</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3 mb-6">
        <StatCard title="Overall Attendance" value={`${percentage}%`} icon={CalendarCheck} color="primary" />
        <StatCard title="Present Today" value={present} icon={UserCheck} color="success" />
        <StatCard title="Absent Today" value={absent} icon={UserX} color="destructive" />
      </div>

      <DataTable
        data={mockAttendance}
        title="Attendance Records"
        searchKey="student"
        columns={[
          { key: 'date', label: 'Date' },
          { key: 'student', label: 'Student' },
          { key: 'subject', label: 'Subject' },
          { key: 'status', label: 'Status', render: (a) => <StatusBadge status={a.status} /> },
          { key: 'markedBy', label: 'Marked By' },
        ]}
      />
    </div>
  );
}
