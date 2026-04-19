import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate } from
'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { MainLayout, DashboardLayout } from './components/Layouts';
// Public Pages
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { JobBoard } from './pages/JobBoard';
import { JobDetail } from './pages/JobDetail';
import { ContractorProfile } from './pages/ContractorProfile';
import { Contractors } from './pages/Contractors';
import { HowItWorks } from './pages/HowItWorks';
// Employer Pages
import { EmployerDashboard } from './pages/employer/Dashboard';
import { PostJob } from './pages/employer/PostJob';
import { MyJobs } from './pages/employer/MyJobs';
import { Proposals } from './pages/employer/Proposals';
import { Projects as EmployerProjects } from './pages/employer/Projects';
import { Payments } from './pages/employer/Payments';
import { EmployerMessages } from './pages/employer/Messages';
// Contractor Pages
import { ContractorDashboard } from './pages/contractor/Dashboard';
import { ContractorProfileEditor } from './pages/contractor/Profile';
import { MyProposals } from './pages/contractor/MyProposals';
import { ContractorProjects } from './pages/contractor/Projects';
import { Earnings } from './pages/contractor/Earnings';
import { ContractorMessages } from './pages/contractor/Messages';
export function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/jobs" element={<JobBoard />} />
            <Route path="/jobs/:id" element={<JobDetail />} />
            <Route path="/contractors/:id" element={<ContractorProfile />} />
            <Route path="/contractors" element={<Contractors />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
          </Route>

          {/* Employer Dashboard Routes */}
          <Route
            path="/employer"
            element={<DashboardLayout requiredRole="employer" />}>
            
            <Route
              index
              element={<Navigate to="/employer/dashboard" replace />} />
            
            <Route path="dashboard" element={<EmployerDashboard />} />
            <Route path="post-job" element={<PostJob />} />
            <Route path="jobs" element={<MyJobs />} />
            <Route path="proposals" element={<Proposals />} />
            <Route path="projects" element={<EmployerProjects />} />
            <Route path="payments" element={<Payments />} />
            <Route path="messages" element={<EmployerMessages />} />
            <Route
              path="settings"
              element={
              <div className="p-8 text-center">
                  <h1 className="text-2xl font-bold text-navy-900">Settings</h1>
                  <p className="text-gray-500">Settings page coming soon.</p>
                </div>
              } />
            
          </Route>

          {/* Contractor Dashboard Routes */}
          <Route
            path="/contractor"
            element={<DashboardLayout requiredRole="contractor" />}>
            
            <Route
              index
              element={<Navigate to="/contractor/dashboard" replace />} />
            
            <Route path="dashboard" element={<ContractorDashboard />} />
            <Route path="profile" element={<ContractorProfileEditor />} />
            <Route path="proposals" element={<MyProposals />} />
            <Route path="projects" element={<ContractorProjects />} />
            <Route path="earnings" element={<Earnings />} />
            <Route path="messages" element={<ContractorMessages />} />
            <Route
              path="settings"
              element={
              <div className="p-8 text-center">
                  <h1 className="text-2xl font-bold text-navy-900">Settings</h1>
                  <p className="text-gray-500">Settings page coming soon.</p>
                </div>
              } />
            
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>);

}