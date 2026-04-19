import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate } from
'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { MainLayout, DashboardLayout } from './components/Layouts';
// Pages
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { JobBoard } from './pages/JobBoard';
import { JobDetail } from './pages/JobDetail';
import { EmployerDashboard } from './pages/employer/Dashboard';
import { ContractorDashboard } from './pages/contractor/Dashboard';
// Placeholder for unimplemented pages
const PlaceholderPage = ({ title }: {title: string;}) =>
<div className="p-8 text-center">
    <h1 className="text-2xl font-bold text-navy-900 mb-4">{title}</h1>
    <p className="text-gray-500">This feature is coming in Phase 2.</p>
  </div>;

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
            <Route
              path="/contractors"
              element={<PlaceholderPage title="Contractor Directory" />} />
            
            <Route
              path="/how-it-works"
              element={<PlaceholderPage title="How It Works" />} />
            
          </Route>

          {/* Employer Dashboard Routes */}
          <Route
            path="/employer"
            element={<DashboardLayout requiredRole="employer" />}>
            
            <Route
              index
              element={<Navigate to="/employer/dashboard" replace />} />
            
            <Route path="dashboard" element={<EmployerDashboard />} />
            <Route
              path="post-job"
              element={<PlaceholderPage title="Post a Job" />} />
            
            <Route
              path="jobs"
              element={<PlaceholderPage title="My Posted Jobs" />} />
            
            <Route
              path="proposals"
              element={<PlaceholderPage title="Received Proposals" />} />
            
            <Route
              path="projects"
              element={<PlaceholderPage title="Active Projects" />} />
            
            <Route
              path="payments"
              element={<PlaceholderPage title="Payments & Escrow" />} />
            
            <Route
              path="messages"
              element={<PlaceholderPage title="Messages" />} />
            
            <Route
              path="settings"
              element={<PlaceholderPage title="Settings" />} />
            
          </Route>

          {/* Contractor Dashboard Routes */}
          <Route
            path="/contractor"
            element={<DashboardLayout requiredRole="contractor" />}>
            
            <Route
              index
              element={<Navigate to="/contractor/dashboard" replace />} />
            
            <Route path="dashboard" element={<ContractorDashboard />} />
            <Route
              path="profile"
              element={<PlaceholderPage title="Edit Profile" />} />
            
            <Route
              path="proposals"
              element={<PlaceholderPage title="My Proposals" />} />
            
            <Route
              path="projects"
              element={<PlaceholderPage title="Active Projects" />} />
            
            <Route
              path="earnings"
              element={<PlaceholderPage title="Earnings & Payments" />} />
            
            <Route
              path="messages"
              element={<PlaceholderPage title="Messages" />} />
            
            <Route
              path="settings"
              element={<PlaceholderPage title="Settings" />} />
            
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>);

}