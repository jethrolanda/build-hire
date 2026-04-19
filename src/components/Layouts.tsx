import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { useAuth } from '../context/AuthContext';
export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-navy-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-amber-500 mb-4 flex items-center">
              BuildHire
            </h3>
            <p className="text-gray-400 text-sm">
              Connecting quality contractors with serious employers for
              construction projects of all sizes.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">For Employers</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Post a Job
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Browse Contractors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Project Management
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">For Contractors</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Find Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Create Profile
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Get Paid
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-navy-800 text-sm text-gray-400 text-center">
          &copy; {new Date().getFullYear()} BuildHire. All rights reserved.
        </div>
      </footer>
    </div>);

}
export function DashboardLayout({
  requiredRole


}: {requiredRole?: 'employer' | 'contractor';}) {
  const { isAuthenticated, user } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to={`/${user?.role}/dashboard`} replace />;
  }
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex flex-grow overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>);

}