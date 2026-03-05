import { useAuth } from '@/contexts/AuthContext';
import { StatCard } from '@/components/StatCard';
import { GraduationCap, Users, Building2, BookOpen, IndianRupee, CalendarCheck, Bell } from 'lucide-react';
import { mockStudents, mockTeachers, mockDepartments, mockCourses, mockFees, mockNotices, mockAttendance } from '@/data/mockData';
import { StatusBadge } from '@/components/StatusBadge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area } from 'recharts';

const enrollmentData = [
  { month: 'Aug', students: 45 },
  { month: 'Sep', students: 62 },
  { month: 'Oct', students: 38 },
  { month: 'Nov', students: 25 },
  { month: 'Dec', students: 18 },
  { month: 'Jan', students: 55 },
];

const attendanceData = [
  { month: 'Aug', present: 92, absent: 8 },
  { month: 'Sep', present: 88, absent: 12 },
  { month: 'Oct', present: 85, absent: 15 },
  { month: 'Nov', present: 90, absent: 10 },
  { month: 'Dec', present: 78, absent: 22 },
  { month: 'Jan', present: 91, absent: 9 },
];

const feeCollectionData = [
  { month: 'Aug', collected: 450000, pending: 120000 },
  { month: 'Sep', collected: 380000, pending: 95000 },
  { month: 'Oct', collected: 520000, pending: 80000 },
  { month: 'Nov', collected: 290000, pending: 150000 },
  { month: 'Dec', collected: 610000, pending: 60000 },
  { month: 'Jan', collected: 430000, pending: 110000 },
];

const departmentDistribution = [
  { name: 'CS', value: 320, fill: 'hsl(var(--primary))' },
  { name: 'EC', value: 180, fill: 'hsl(var(--info))' },
  { name: 'MGT', value: 250, fill: 'hsl(var(--warning))' },
  { name: 'HUM', value: 90, fill: 'hsl(var(--success))' },
];

const chartConfig = {
  students: { label: 'Students', color: 'hsl(var(--primary))' },
  present: { label: 'Present %', color: 'hsl(var(--success))' },
  absent: { label: 'Absent %', color: 'hsl(var(--destructive))' },
  collected: { label: 'Collected', color: 'hsl(var(--success))' },
  pending: { label: 'Pending', color: 'hsl(var(--warning))' },
};

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

      {/* Charts Row */}
      <div className="grid gap-6 lg:grid-cols-2 mb-6">
        {/* Enrollment Trends */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-heading flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-primary" /> Enrollment Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[220px] w-full">
              <AreaChart data={enrollmentData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area type="monotone" dataKey="students" stroke="var(--color-students)" fill="var(--color-students)" fillOpacity={0.15} strokeWidth={2} />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Attendance Trends */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-heading flex items-center gap-2">
              <CalendarCheck className="h-4 w-4 text-primary" /> Attendance Trends (%)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[220px] w-full">
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="present" fill="var(--color-present)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="absent" fill="var(--color-absent)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 mb-6">
        {/* Fee Collection */}
        {(user?.role === 'super_admin' || user?.role === 'admin' || user?.role === 'accountant') && (
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-heading flex items-center gap-2">
                <IndianRupee className="h-4 w-4 text-primary" /> Fee Collection (₹)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[220px] w-full">
                <LineChart data={feeCollectionData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="month" className="text-xs" />
                  <YAxis className="text-xs" tickFormatter={(v) => `${v / 1000}k`} />
                  <ChartTooltip content={<ChartTooltipContent formatter={(value) => `₹${Number(value).toLocaleString()}`} />} />
                  <Line type="monotone" dataKey="collected" stroke="var(--color-collected)" strokeWidth={2} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="pending" stroke="var(--color-pending)" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 4 }} />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        )}

        {/* Department Distribution */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-heading flex items-center gap-2">
              <Building2 className="h-4 w-4 text-primary" /> Students by Department
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[220px] w-full">
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent />} />
                <Pie data={departmentDistribution} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label={({ name, value }) => `${name}: ${value}`}>
                  {departmentDistribution.map((entry, index) => (
                    <Cell key={index} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Bottom section */}
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
