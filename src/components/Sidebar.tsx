import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  UserCircle,
  CreditCard,
  MessageSquare,
  Settings,
  PlusCircle,
  Search,
  ClipboardCheck } from
'lucide-react';
export function Sidebar() {
  const { user } = useAuth();
  const employerLinks = [
  {
    name: 'Overview',
    path: '/employer/dashboard',
    icon: <LayoutDashboard size={18} />
  },
  {
    name: 'Post a Job',
    path: '/employer/post-job',
    icon: <PlusCircle size={18} />
  },
  {
    name: 'My Jobs',
    path: '/employer/jobs',
    icon: <Briefcase size={18} />
  },
  {
    name: 'Proposals',
    path: '/employer/proposals',
    icon: <FileText size={18} />
  },
  {
    name: 'Active Projects',
    path: '/employer/projects',
    icon: <ClipboardCheck size={18} />
  },
  {
    name: 'Payments',
    path: '/employer/payments',
    icon: <CreditCard size={18} />
  },
  {
    name: 'Messages',
    path: '/employer/messages',
    icon: <MessageSquare size={18} />
  },
  {
    name: 'Settings',
    path: '/employer/settings',
    icon: <Settings size={18} />
  }];

  const contractorLinks = [
  {
    name: 'Overview',
    path: '/contractor/dashboard',
    icon: <LayoutDashboard size={18} />
  },
  {
    name: 'My Profile',
    path: '/contractor/profile',
    icon: <UserCircle size={18} />
  },
  {
    name: 'Find Jobs',
    path: '/jobs',
    icon: <Search size={18} />
  },
  {
    name: 'My Proposals',
    path: '/contractor/proposals',
    icon: <FileText size={18} />
  },
  {
    name: 'Active Projects',
    path: '/contractor/projects',
    icon: <ClipboardCheck size={18} />
  },
  {
    name: 'Earnings',
    path: '/contractor/earnings',
    icon: <CreditCard size={18} />
  },
  {
    name: 'Messages',
    path: '/contractor/messages',
    icon: <MessageSquare size={18} />
  },
  {
    name: 'Settings',
    path: '/contractor/settings',
    icon: <Settings size={18} />
  }];

  const links = user?.role === 'employer' ? employerLinks : contractorLinks;
  return (
    <div className="w-64 bg-navy-900 text-white min-h-[calc(100vh-4rem)] flex-col hidden md:flex">
      <div className="flex-1 py-6 flex flex-col space-y-1">
        <div className="px-4 mb-6">
          <p className="text-xs font-semibold text-navy-300 uppercase tracking-wider">
            {user?.role === 'employer' ? 'Employer Menu' : 'Contractor Menu'}
          </p>
        </div>
        <nav className="flex-1 px-2 space-y-1">
          {links.map((link) =>
          <NavLink
            key={link.name}
            to={link.path}
            end={link.path.endsWith('dashboard')}
            className={({ isActive }) =>
            `group flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${isActive ? 'bg-navy-800 text-amber-500 border-l-4 border-amber-500 pl-2' : 'text-gray-300 hover:bg-navy-800 hover:text-white border-l-4 border-transparent pl-2'}`
            }>
            
              <span className="mr-3 flex-shrink-0 opacity-75 group-hover:opacity-100">
                {link.icon}
              </span>
              {link.name}
            </NavLink>
          )}
        </nav>
      </div>
    </div>);

}