import { useAuth } from '@/contexts/AuthContext';
import { StatCard } from '@/components/StatCard';
import { GraduationCap, Users, Building2, BookOpen, IndianRupee, CalendarCheck, Library, Bell } from 'lucide-react';
import { mockStudents, mockTeachers, mockDepartments, mockCourses, mockFees, mockNotices } from '@/data/mockData';
import { StatusBadge } from '@/components/StatusBadge';

export default function Dashboard() {
  const { user } = useAuth();

  const totalRevenue = mockFees.filter(f => f.status === 'paid').reduce((s, f) => s + f.amount, 0);
  const pendingFees = mockFees.filter(f => f.status !== 'paid').reduce((s, f) => s + f.amount, 0);

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Welcome back, {user?.name?.split(' ')[0]} 👋</h1>
        <p className="page-description">Here's what's happening at IMS Noida today</p>
      </div>

      <div className="module-grid mb-6">
        <StatCard title="Total Students" value={mockStudents.length} icon={GraduationCap} trend="+12% this month" trendUp color="primary" />
        <StatCard title="Total Teachers" value={mockTeachers.length} icon={Users} color="info" />
        <StatCard title="Departments" value={mockDepartments.length} icon={Building2} color="warning" />
        <StatCard title="Active Courses" value={mockCourses.filter(c => c.status === 'active').length} icon={BookOpen} color="success" />
      </div>

      {(user?.role === 'super_admin' || user?.role === 'admin' || user?.role === 'accountant') && (
        <div className="grid gap-4 md:grid-cols-2 mb-6">
          <StatCard title="Revenue Collected" value={`₹${totalRevenue.toLocaleString()}`} icon={IndianRupee} color="success" trend="+8% vs last month" trendUp />
          <StatCard title="Pending Fees" value={`₹${pendingFees.toLocaleString()}`} icon={IndianRupee} color="destructive" />
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="data-table-container p-5">
          <h3 className="font-heading font-semibold mb-4 flex items-center gap-2">
            <Bell className="h-4 w-4 text-primary" /> Recent Notices
          </h3>
          <div className="space-y-3">
            {mockNotices.slice(0, 4).map(notice => (
              <div key={notice.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm font-medium truncate">{notice.title}</p>
                    <StatusBadge status={notice.category} />
                  </div>
                  <p className="text-xs text-muted-foreground">{notice.date} · {notice.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="data-table-container p-5">
          <h3 className="font-heading font-semibold mb-4 flex items-center gap-2">
            <CalendarCheck className="h-4 w-4 text-primary" /> Quick Stats
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
              <span className="text-sm">Active Students</span>
              <span className="font-semibold">{mockStudents.filter(s => s.status === 'active').length}</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
              <span className="text-sm">Graduated</span>
              <span className="font-semibold">{mockStudents.filter(s => s.status === 'graduated').length}</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
              <span className="text-sm">Overdue Fees</span>
              <span className="font-semibold text-destructive">{mockFees.filter(f => f.status === 'overdue').length}</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
              <span className="text-sm">Library Books</span>
              <span className="font-semibold">4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
