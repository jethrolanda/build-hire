import React, { cloneElement } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Dashboard as DashboardIcon,
  Work as WorkIcon,
  Description as DescriptionIcon,
  AccountCircle as AccountCircleIcon,
  Payment as PaymentIcon,
  Message as MessageIcon,
  Settings as SettingsIcon,
  AddCircleOutline as AddCircleOutlineIcon,
  Search as SearchIcon,
  AssignmentTurnedIn as AssignmentTurnedInIcon } from
'@mui/icons-material';
export function Sidebar() {
  const { user } = useAuth();
  const employerLinks = [
  {
    name: 'Overview',
    path: '/employer/dashboard',
    icon: <DashboardIcon />
  },
  {
    name: 'Post a Job',
    path: '/employer/post-job',
    icon: <AddCircleOutlineIcon />
  },
  {
    name: 'My Jobs',
    path: '/employer/jobs',
    icon: <WorkIcon />
  },
  {
    name: 'Proposals',
    path: '/employer/proposals',
    icon: <DescriptionIcon />
  },
  {
    name: 'Active Projects',
    path: '/employer/projects',
    icon: <AssignmentTurnedInIcon />
  },
  {
    name: 'Payments',
    path: '/employer/payments',
    icon: <PaymentIcon />
  },
  {
    name: 'Messages',
    path: '/employer/messages',
    icon: <MessageIcon />
  },
  {
    name: 'Settings',
    path: '/employer/settings',
    icon: <SettingsIcon />
  }];

  const contractorLinks = [
  {
    name: 'Overview',
    path: '/contractor/dashboard',
    icon: <DashboardIcon />
  },
  {
    name: 'My Profile',
    path: '/contractor/profile',
    icon: <AccountCircleIcon />
  },
  {
    name: 'Find Jobs',
    path: '/jobs',
    icon: <SearchIcon />
  },
  {
    name: 'My Proposals',
    path: '/contractor/proposals',
    icon: <DescriptionIcon />
  },
  {
    name: 'Active Projects',
    path: '/contractor/projects',
    icon: <AssignmentTurnedInIcon />
  },
  {
    name: 'Earnings',
    path: '/contractor/earnings',
    icon: <PaymentIcon />
  },
  {
    name: 'Messages',
    path: '/contractor/messages',
    icon: <MessageIcon />
  },
  {
    name: 'Settings',
    path: '/contractor/settings',
    icon: <SettingsIcon />
  }];

  const links = user?.role === 'employer' ? employerLinks : contractorLinks;
  return (
    <div className="w-64 bg-navy-900 text-white min-h-[calc(100vh-4rem)] flex flex-col hidden md:flex">
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
            
              <span className="mr-3 h-5 w-5 flex-shrink-0 opacity-75 group-hover:opacity-100">
                {cloneElement(link.icon as React.ReactElement, {
                fontSize: 'small'
              })}
              </span>
              {link.name}
            </NavLink>
          )}
        </nav>
      </div>
    </div>);

}