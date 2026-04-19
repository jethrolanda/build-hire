import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { mockJobs, mockBids, mockProjects } from '../../data/mockData';
import { JobCard } from '../../components/JobCard';
import { Button } from '../../components/Button';
import { Badge } from '../../components/Badge';
import {
  Work as WorkIcon,
  Description as DescriptionIcon,
  AssignmentTurnedIn as AssignmentTurnedInIcon,
  AttachMoney as AttachMoneyIcon } from
'@mui/icons-material';
export function EmployerDashboard() {
  const { user } = useAuth();
  // Filter data for this employer
  const myJobs = mockJobs.filter((j) => j.employerId === user?.id);
  const myActiveJobs = myJobs.filter((j) => j.status === 'open');
  const myProjects = mockProjects.filter((p) => p.employerId === user?.id);
  // Get bids for my jobs
  const myJobIds = myJobs.map((j) => j.id);
  const pendingBids = mockBids.filter(
    (b) => myJobIds.includes(b.jobId) && b.status === 'pending'
  );
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">
            Welcome back, {user?.name}
          </h1>
          <p className="text-gray-600">
            Here's what's happening with your projects today.
          </p>
        </div>
        <Button>Post a New Job</Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-4">
          <div className="p-3 rounded-full bg-blue-100 text-blue-600">
            <WorkIcon />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Active Jobs</p>
            <p className="text-2xl font-bold text-navy-900">
              {myActiveJobs.length}
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-4">
          <div className="p-3 rounded-full bg-amber-100 text-amber-600">
            <DescriptionIcon />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">
              Pending Proposals
            </p>
            <p className="text-2xl font-bold text-navy-900">
              {pendingBids.length}
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-4">
          <div className="p-3 rounded-full bg-green-100 text-green-600">
            <AssignmentTurnedInIcon />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Active Projects</p>
            <p className="text-2xl font-bold text-navy-900">
              {myProjects.length}
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-4">
          <div className="p-3 rounded-full bg-purple-100 text-purple-600">
            <AttachMoneyIcon />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Spent</p>
            <p className="text-2xl font-bold text-navy-900">
              $
              {user?.role === 'employer' ?
              user.totalSpent.toLocaleString() :
              '0'}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Jobs */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-navy-900">
              Your Recent Jobs
            </h2>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>

          <div className="space-y-4">
            {myJobs.slice(0, 3).map((job) =>
            <JobCard key={job.id} job={job} />
            )}
            {myJobs.length === 0 &&
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
                <p className="text-gray-500 mb-4">
                  You haven't posted any jobs yet.
                </p>
                <Button>Post Your First Job</Button>
              </div>
            }
          </div>
        </div>

        {/* Recent Activity / Proposals */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-navy-900">New Proposals</h2>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            {pendingBids.length > 0 ?
            <div className="divide-y divide-gray-100">
                {pendingBids.slice(0, 4).map((bid) =>
              <div
                key={bid.id}
                className="p-4 hover:bg-gray-50 transition-colors">
                
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-medium text-navy-900">
                        {bid.contractor?.name}
                      </div>
                      <div className="font-bold text-amber-600">
                        ${bid.amount.toLocaleString()}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-2 line-clamp-1">
                      For: {bid.job?.title}
                    </p>
                    <Button size="sm" variant="outline" fullWidth>
                      Review Proposal
                    </Button>
                  </div>
              )}
              </div> :

            <div className="p-6 text-center text-gray-500">
                No new proposals at this time.
              </div>
            }
          </div>
        </div>
      </div>
    </div>);

}