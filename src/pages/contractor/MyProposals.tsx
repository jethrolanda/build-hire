import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { mockBids } from '../../data/mockData';
import { Button } from '../../components/Button';
import { Badge } from '../../components/Badge';
import { FileText, Building2, Clock, DollarSign } from 'lucide-react';
export function MyProposals() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');
  const myBids = mockBids.filter((b) => b.contractorId === user?.id);
  const filteredBids = myBids.filter((bid) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Pending') return bid.status === 'pending';
    if (activeTab === 'Accepted') return bid.status === 'accepted';
    if (activeTab === 'Declined') return bid.status === 'declined';
    return true;
  });
  const tabs = ['All', 'Pending', 'Accepted', 'Declined'];
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">My Proposals</h1>
          <p className="text-gray-600">
            Track the status of your submitted bids.
          </p>
        </div>
        <Button onClick={() => navigate('/jobs')}>Find More Jobs</Button>
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
          {filteredBids.length > 0 ?
          <div className="space-y-4">
              {filteredBids.map((bid) =>
            <div
              key={bid.id}
              className="border border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-colors">
              
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                    <div>
                      <h3
                    className="text-lg font-bold text-navy-900 mb-1 cursor-pointer hover:text-amber-600"
                    onClick={() => navigate(`/jobs/${bid.jobId}`)}>
                    
                        {bid.job?.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <span className="flex items-center">
                          <Building2 size={14} className="mr-1" />{' '}
                          {bid.job?.employer?.name}
                        </span>
                        <span className="flex items-center">
                          <Clock size={14} className="mr-1" /> Submitted{' '}
                          {new Date(bid.submittedAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <Badge
                    variant={
                    bid.status === 'pending' ?
                    'warning' :
                    bid.status === 'accepted' ?
                    'success' :
                    'danger'
                    }
                    className="mb-2">
                    
                        {bid.status.toUpperCase()}
                      </Badge>
                      <div className="text-lg font-bold text-navy-900 flex items-center">
                        <DollarSign size={18} className="text-amber-500" />
                        {bid.amount.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-700">
                    <p className="line-clamp-2">{bid.coverLetter}</p>
                  </div>
                </div>
            )}
            </div> :

          <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <FileText size={28} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-navy-900 mb-2">
                No proposals found
              </h3>
              <p className="text-gray-500 mb-6">
                You don't have any proposals matching this status.
              </p>
              {activeTab === 'All' &&
            <Button onClick={() => navigate('/jobs')}>
                  Browse Open Jobs
                </Button>
            }
            </div>
          }
        </div>
      </div>
    </div>);

}