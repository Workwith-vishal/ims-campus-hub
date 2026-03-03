import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { AppLayout } from "@/components/AppLayout";
import LoginPage from "@/pages/Login";
import RegisterPage from "@/pages/Register";
import Dashboard from "@/pages/Dashboard";
import StudentsPage from "@/pages/Students";
import TeachersPage from "@/pages/Teachers";
import DepartmentsPage from "@/pages/Departments";
import CoursesPage from "@/pages/Courses";
import SubjectsPage from "@/pages/Subjects";
import AttendancePage from "@/pages/Attendance";
import LecturesPage from "@/pages/Lectures";
import ExamsPage from "@/pages/Exams";
import ResultsPage from "@/pages/Results";
import FeesPage from "@/pages/Fees";
import LibraryPage from "@/pages/Library";
import NoticesPage from "@/pages/Notices";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/students" element={<StudentsPage />} />
              <Route path="/teachers" element={<TeachersPage />} />
              <Route path="/departments" element={<DepartmentsPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/subjects" element={<SubjectsPage />} />
              <Route path="/attendance" element={<AttendancePage />} />
              <Route path="/lectures" element={<LecturesPage />} />
              <Route path="/exams" element={<ExamsPage />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/fees" element={<FeesPage />} />
              <Route path="/library" element={<LibraryPage />} />
              <Route path="/notices" element={<NoticesPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
