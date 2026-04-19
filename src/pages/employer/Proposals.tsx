import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { mockJobs, mockBids } from '../../data/mockData';
import { Button } from '../../components/Button';
import { Badge } from '../../components/Badge';
import { FileText, Star, ChevronDown, ChevronUp } from 'lucide-react';
export function Proposals() {
  const { user } = useAuth();
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const myJobs = mockJobs.filter((j) => j.employerId === user?.id);
  const myJobIds = myJobs.map((j) => j.id);
  const myBids = mockBids.filter((b) => myJobIds.includes(b.jobId));
  const jobsWithBids = myJobs.filter((job) =>
  myBids.some((b) => b.jobId === job.id)
  );
  const toggleExpand = (jobId: string) => {
    setExpandedJobId(expandedJobId === jobId ? null : jobId);
  };
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-navy-900">Received Proposals</h1>
        <p className="text-gray-600">
          Review and manage bids from contractors.
        </p>
      </div>

      {jobsWithBids.length > 0 ?
      <div className="space-y-6">
          {jobsWithBids.map((job) => {
          const jobBids = myBids.filter((b) => b.jobId === job.id);
          const isExpanded = expandedJobId === job.id;
          return (
            <div
              key={job.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              
                <div
                className="p-6 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleExpand(job.id)}>
                
                  <div>
                    <h3 className="text-lg font-bold text-navy-900">
                      {job.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {jobBids.length} proposals received
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge
                    variant={job.status === 'open' ? 'success' : 'neutral'}>
                    
                      {job.status.toUpperCase()}
                    </Badge>
                    {isExpanded ?
                  <ChevronUp className="text-gray-400" /> :

                  <ChevronDown className="text-gray-400" />
                  }
                  </div>
                </div>

                {isExpanded &&
              <div className="border-t border-gray-200 bg-gray-50 p-6 space-y-4">
                    {jobBids.map((bid) =>
                <div
                  key={bid.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center space-x-4">
                            <img
                        src={bid.contractor?.avatar}
                        alt=""
                        className="w-12 h-12 rounded-full" />
                      
                            <div>
                              <h4 className="font-semibold text-navy-900">
                                {bid.contractor?.name}
                              </h4>
                              <div className="flex items-center text-sm text-gray-500">
                                <Star
                            size={14}
                            className="text-amber-500 mr-1 fill-amber-500" />
                          
                                {bid.contractor?.rating} (
                                {bid.contractor?.reviewCount} reviews)
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-navy-900">
                              ${bid.amount.toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-500">
                              {bid.estimatedDays} days est.
                            </div>
                            <Badge
                        variant={
                        bid.status === 'pending' ?
                        'warning' :
                        bid.status === 'accepted' ?
                        'success' :
                        'danger'
                        }
                        className="mt-1">
                        
                              {bid.status.toUpperCase()}
                            </Badge>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg mb-4 text-sm text-gray-700">
                          <p className="font-medium mb-1">Cover Letter:</p>
                          <p>{bid.coverLetter}</p>
                        </div>
                        {bid.status === 'pending' &&
                  <div className="flex space-x-3 justify-end">
                            <Button size="sm" variant="ghost">
                              Decline
                            </Button>
                            <Button size="sm" variant="outline">
                              Message
                            </Button>
                            <Button size="sm">Accept Proposal</Button>
                          </div>
                  }
                      </div>
                )}
                  </div>
              }
              </div>);

        })}
        </div> :

      <div className="bg-white p-12 rounded-xl border border-gray-200 text-center shadow-sm">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
            <FileText size={28} className="text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-navy-900 mb-2">
            No proposals yet
          </h3>
          <p className="text-gray-500">
            You haven't received any bids on your jobs yet.
          </p>
        </div>
      }
    </div>);

}