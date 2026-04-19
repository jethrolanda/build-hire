import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { mockJobs } from '../../data/mockData';
import { JobCard } from '../../components/JobCard';
import { Button } from '../../components/Button';
import { Briefcase } from 'lucide-react';
export function MyJobs() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');
  const myJobs = mockJobs.filter((j) => j.employerId === user?.id);
  const filteredJobs = myJobs.filter((job) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Open') return job.status === 'open';
    if (activeTab === 'In Progress') return job.status === 'in-progress';
    if (activeTab === 'Completed') return job.status === 'completed';
    return true;
  });
  const tabs = ['All', 'Open', 'In Progress', 'Completed'];
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">My Posted Jobs</h1>
          <p className="text-gray-600">
            Manage your job listings and view their status.
          </p>
        </div>
        <Button onClick={() => navigate('/employer/post-job')}>
          Post a New Job
        </Button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="border-b border-gray-200 px-6">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) =>
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === tab ? 'border-amber-500 text-amber-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              
                {tab}
              </button>
            )}
          </nav>
        </div>

        <div className="p-6">
          {filteredJobs.length > 0 ?
          <div className="space-y-4">
              {filteredJobs.map((job) =>
            <div key={job.id} className="relative">
                  <JobCard
                job={job}
                onClick={() => navigate(`/jobs/${job.id}`)} />
              
                  <div className="absolute top-6 right-6 flex space-x-2">
                    <Button
                  size="sm"
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate('/employer/proposals');
                  }}>
                  
                      View Bids ({job.bidsCount})
                    </Button>
                  </div>
                </div>
            )}
            </div> :

          <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Briefcase size={28} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-navy-900 mb-2">
                No jobs found
              </h3>
              <p className="text-gray-500 mb-6">
                You don't have any jobs matching this status.
              </p>
              {activeTab === 'All' &&
            <Button onClick={() => navigate('/employer/post-job')}>
                  Post Your First Job
                </Button>
            }
            </div>
          }
        </div>
      </div>
    </div>);

}