import {
  Users, GraduationCap, Building2, BookOpen, FileText, CalendarCheck,
  Upload, ClipboardList, Award, IndianRupee, Library, Bell, LayoutDashboard, LogOut, Settings,
} from 'lucide-react';
import { NavLink } from '@/components/NavLink';
import { useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import type { Role } from '@/types';
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  SidebarFooter, useSidebar,
} from '@/components/ui/sidebar';

interface NavItem {
  title: string;
  url: string;
  icon: React.ElementType;
  roles: Role[];
}

const allRoles: Role[] = ['super_admin', 'admin', 'teacher', 'student', 'accountant', 'librarian'];
const adminRoles: Role[] = ['super_admin', 'admin'];

const navItems: NavItem[] = [
  { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard, roles: allRoles },
  { title: 'Students', url: '/students', icon: GraduationCap, roles: [...adminRoles, 'teacher'] },
  { title: 'Teachers', url: '/teachers', icon: Users, roles: adminRoles },
  { title: 'Departments', url: '/departments', icon: Building2, roles: adminRoles },
  { title: 'Courses', url: '/courses', icon: BookOpen, roles: [...adminRoles, 'teacher'] },
  { title: 'Subjects', url: '/subjects', icon: FileText, roles: [...adminRoles, 'teacher'] },
  { title: 'Attendance', url: '/attendance', icon: CalendarCheck, roles: [...adminRoles, 'teacher', 'student'] },
  { title: 'Lecture Notes', url: '/lectures', icon: Upload, roles: [...adminRoles, 'teacher', 'student'] },
  { title: 'Exams', url: '/exams', icon: ClipboardList, roles: [...adminRoles, 'teacher', 'student'] },
  { title: 'Results', url: '/results', icon: Award, roles: [...adminRoles, 'teacher', 'student'] },
  { title: 'Fees', url: '/fees', icon: IndianRupee, roles: [...adminRoles, 'accountant', 'student'] },
  { title: 'Library', url: '/library', icon: Library, roles: [...adminRoles, 'librarian', 'student'] },
  { title: 'Notices', url: '/notices', icon: Bell, roles: allRoles },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';
  const location = useLocation();
  const { user, logout } = useAuth();

  const filteredItems = navItems.filter(item => user && item.roles.includes(user.role));

  return (
    <Sidebar collapsible="icon" className="border-r-0">
      <div className="flex items-center gap-3 px-4 py-5 border-b border-sidebar-border">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sidebar-primary font-heading font-bold text-sidebar-primary-foreground text-sm">
          IMS
        </div>
        {!collapsed && (
          <div className="flex flex-col">
            <span className="font-heading font-semibold text-sidebar-foreground text-sm">IMS Noida</span>
            <span className="text-[11px] text-sidebar-muted">College ERP</span>
          </div>
        )}
      </div>

      <SidebarContent className="px-2 py-3">
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-muted text-[10px] uppercase tracking-widest mb-1">
            {!collapsed && 'Navigation'}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {filteredItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === '/dashboard'}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground"
                      activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                    >
                      <item.icon className="h-4 w-4 shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-3">
        {!collapsed && user && (
          <div className="flex items-center gap-3 mb-3 px-2">
            <div className="h-8 w-8 rounded-full bg-sidebar-primary flex items-center justify-center text-sidebar-primary-foreground text-xs font-semibold">
              {user.name.charAt(0)}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-medium text-sidebar-foreground truncate">{user.name}</span>
              <span className="text-[10px] text-sidebar-muted capitalize">{user.role.replace('_', ' ')}</span>
            </div>
          </div>
        )}
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <button onClick={logout} className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-sidebar-foreground/60 hover:text-destructive hover:bg-sidebar-accent transition-colors w-full">
                <LogOut className="h-4 w-4" />
                {!collapsed && <span>Logout</span>}
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
