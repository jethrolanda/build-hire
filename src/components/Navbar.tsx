import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from './Button';
import {
  Construction as ConstructionIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  Notifications as NotificationsIcon } from
'@mui/icons-material';
export function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  const isDashboard = location.pathname.includes('/dashboard');
  // If we're in the dashboard, we might want a simpler navbar or let the sidebar handle it
  // For this design, we'll keep a top navbar for user profile/notifications
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center flex-shrink-0">
              <ConstructionIcon className="h-8 w-8 text-amber-500" />
              <span className="ml-2 text-xl font-bold text-navy-900 tracking-tight">
                BuildHire
              </span>
            </Link>

            {!isDashboard &&
            <div className="hidden md:ml-10 md:flex md:space-x-8">
                <Link
                to="/jobs"
                className="text-gray-500 hover:text-navy-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                
                  Find Jobs
                </Link>
                <Link
                to="/contractors"
                className="text-gray-500 hover:text-navy-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                
                  Find Contractors
                </Link>
                <Link
                to="/how-it-works"
                className="text-gray-500 hover:text-navy-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                
                  How it Works
                </Link>
              </div>
            }
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            {isAuthenticated ?
            <>
                <button className="p-2 text-gray-400 hover:text-gray-500 relative">
                  <NotificationsIcon />
                  <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                </button>

                <div className="relative flex items-center space-x-3 ml-4 border-l border-gray-200 pl-4">
                  <div className="flex flex-col items-end">
                    <span className="text-sm font-medium text-gray-900">
                      {user?.name}
                    </span>
                    <span className="text-xs text-gray-500 capitalize">
                      {user?.role}
                    </span>
                  </div>
                  <img
                  className="h-9 w-9 rounded-full object-cover border border-gray-200"
                  src={
                  user?.avatar ||
                  `https://ui-avatars.com/api/?name=${user?.name}&background=1a2847&color=fff`
                  }
                  alt={user?.name} />
                
                  <div className="flex space-x-2 ml-4">
                    <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigate(`/${user?.role}/dashboard`)}>
                    
                      Dashboard
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleLogout}>
                      Logout
                    </Button>
                  </div>
                </div>
              </> :

            <>
                <Link
                to="/login"
                className="text-gray-500 hover:text-navy-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                
                  Log in
                </Link>
                <Button onClick={() => navigate('/signup')}>Sign up</Button>
              </>
            }
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500">
              
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen &&
      <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
            to="/jobs"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-navy-900 hover:bg-gray-50">
            
              Find Jobs
            </Link>
            <Link
            to="/contractors"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-navy-900 hover:bg-gray-50">
            
              Find Contractors
            </Link>

            {!isAuthenticated ?
          <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col space-y-2 px-3">
                <Button
              variant="outline"
              fullWidth
              onClick={() => {
                navigate('/login');
                setIsMobileMenuOpen(false);
              }}>
              
                  Log in
                </Button>
                <Button
              fullWidth
              onClick={() => {
                navigate('/signup');
                setIsMobileMenuOpen(false);
              }}>
              
                  Sign up
                </Button>
              </div> :

          <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center px-3 mb-4">
                  <img
                className="h-10 w-10 rounded-full"
                src={user?.avatar}
                alt="" />
              
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">
                      {user?.name}
                    </div>
                    <div className="text-sm font-medium text-gray-500 capitalize">
                      {user?.role}
                    </div>
                  </div>
                </div>
                <Button
              variant="ghost"
              fullWidth
              onClick={() => {
                navigate(`/${user?.role}/dashboard`);
                setIsMobileMenuOpen(false);
              }}
              className="justify-start">
              
                  Dashboard
                </Button>
                <Button
              variant="ghost"
              fullWidth
              onClick={() => {
                handleLogout();
                setIsMobileMenuOpen(false);
              }}
              className="justify-start text-red-600">
              
                  Logout
                </Button>
              </div>
          }
          </div>
        </div>
      }
    </nav>);

}