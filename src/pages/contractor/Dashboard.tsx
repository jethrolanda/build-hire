import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { mockJobs, mockBids, mockProjects } from '../../data/mockData';
import { JobCard } from '../../components/JobCard';
import { Button } from '../../components/Button';
import { Badge } from '../../components/Badge';
import { Search, FileText, ClipboardCheck, Wallet } from 'lucide-react';
export function ContractorDashboard() {
  const { user } = useAuth();
  const myBids = mockBids.filter((b) => b.contractorId === user?.id);
  const activeBids = myBids.filter((b) => b.status === 'pending');
  const myProjects = mockProjects.filter((p) => p.contractorId === user?.id);
  const recommendedJobs = mockJobs.
  filter((j) => j.status === 'open').
  slice(0, 3);
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">
            Welcome back, {user?.name}
          </h1>
          <p className="text-gray-600">Here's your business overview.</p>
        </div>
        <Button>Find New Jobs</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-4">
          <div className="p-3 rounded-full bg-amber-100 text-amber-600">
            <FileText size={22} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">
              Active Proposals
            </p>
            <p className="text-2xl font-bold text-navy-900">
              {activeBids.length}
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-4">
          <div className="p-3 rounded-full bg-green-100 text-green-600">
            <ClipboardCheck size={22} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Active Projects</p>
            <p className="text-2xl font-bold text-navy-900">
              {myProjects.length}
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-4">
          <div className="p-3 rounded-full bg-blue-100 text-blue-600">
            <Wallet size={22} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Earned</p>
            <p className="text-2xl font-bold text-navy-900">$45,200</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-4">
          <div className="p-3 rounded-full bg-purple-100 text-purple-600">
            <Search size={22} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Profile Views</p>
            <p className="text-2xl font-bold text-navy-900">128</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-navy-900">
              Recommended Jobs
            </h2>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>
          <div className="space-y-4">
            {recommendedJobs.map((job) =>
            <JobCard key={job.id} job={job} />
            )}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold text-navy-900">Current Projects</h2>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            {myProjects.length > 0 ?
            <div className="divide-y divide-gray-100">
                {myProjects.map((project) =>
              <div key={project.id} className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-medium text-navy-900 line-clamp-1">
                        {project.job?.title}
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-sm mb-3">
                      <span className="text-gray-500">
                        {project.employer?.name}
                      </span>
                      <Badge variant="primary">In Progress</Badge>
                    </div>
                    <div className="mb-1 flex justify-between text-xs">
                      <span className="text-gray-500">Milestone 2 of 3</span>
                      <span className="font-medium text-navy-900">65%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                    className="bg-amber-500 h-2 rounded-full"
                    style={{
                      width: '65%'
                    }}>
                  </div>
                    </div>
                  </div>
              )}
              </div> :

            <div className="p-6 text-center text-gray-500">
                No active projects right now.
              </div>
            }
          </div>

          <div className="bg-navy-900 rounded-xl p-6 text-white mt-6">
            <h3 className="font-semibold mb-2">Update your availability</h3>
            <p className="text-sm text-gray-300 mb-4">
              Let employers know if you're ready to take on new work.
            </p>
            <select className="w-full bg-navy-800 border border-navy-700 rounded-lg p-2 text-white focus:ring-amber-500 focus:border-amber-500">
              <option value="available">Available for work</option>
              <option value="busy">Busy, but accepting offers</option>
              <option value="unavailable">Not available</option>
            </select>
          </div>
        </div>
      </div>
    </div>);

}