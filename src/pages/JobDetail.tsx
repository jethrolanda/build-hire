import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockJobs, mockBids } from '../data/mockData';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { Textarea, Input } from '../components/Input';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BuildIcon from '@mui/icons-material/Build';
import BusinessIcon from '@mui/icons-material/Business';
import StarIcon from '@mui/icons-material/Star';
export function JobDetail() {
  const { id } = useParams<{
    id: string;
  }>();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [isBidding, setIsBidding] = useState(false);
  const job = mockJobs.find((j) => j.id === id);
  if (!job) {
    return <div className="p-8 text-center">Job not found</div>;
  }
  const isEmployerOwner =
  user?.role === 'employer' && user.id === job.employerId;
  const jobBids = mockBids.filter((b) => b.jobId === job.id);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 space-y-6">
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-2xl font-bold text-navy-900 mb-2">
                  {job.title}
                </h1>
                <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4">
                  <span className="flex items-center">
                    <LocationOnIcon className="w-4 h-4 mr-1" /> {job.location}
                  </span>
                  <span className="flex items-center">
                    <AccessTimeIcon className="w-4 h-4 mr-1" /> Posted{' '}
                    {new Date(job.postedAt).toLocaleDateString()}
                  </span>
                  <span className="flex items-center text-amber-600 font-medium">
                    <AttachMoneyIcon className="w-4 h-4" /> $
                    {job.budgetMin.toLocaleString()} - $
                    {job.budgetMax.toLocaleString()}
                  </span>
                </div>
              </div>
              <Badge variant={job.status === 'open' ? 'success' : 'neutral'}>
                {job.status.toUpperCase()}
              </Badge>
            </div>

            <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-gray-100">
              <Badge variant="primary" className="text-sm py-1 px-3">
                <BuildIcon className="w-4 h-4 mr-1" /> {job.trade}
              </Badge>
              <Badge
                variant={job.urgency === 'emergency' ? 'danger' : 'info'}
                className="text-sm py-1 px-3 capitalize">
                
                {job.urgency} Urgency
              </Badge>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold text-navy-900 mb-4">
                Project Description
              </h2>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {job.description}
              </div>
            </div>

            {job.requiredCertifications.length > 0 &&
            <div>
                <h2 className="text-lg font-semibold text-navy-900 mb-4">
                  Required Certifications
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {job.requiredCertifications.map((cert) =>
                <li key={cert}>{cert}</li>
                )}
                </ul>
              </div>
            }
          </div>

          {/* Bidding Section for Contractors */}
          {user?.role === 'contractor' && job.status === 'open' &&
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-navy-900 mb-6">
                Submit a Proposal
              </h2>

              {!isBidding ?
            <div className="text-center py-8 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                  <p className="text-gray-600 mb-4">
                    You have the required skills for this job.
                  </p>
                  <Button onClick={() => setIsBidding(true)}>
                    Write Proposal
                  </Button>
                </div> :

            <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                  label="Bid Amount ($)"
                  type="number"
                  placeholder="e.g. 15000"
                  required />
                
                    <Input
                  label="Estimated Duration (Days)"
                  type="number"
                  placeholder="e.g. 14"
                  required />
                
                  </div>
                  <Textarea
                label="Cover Letter"
                rows={6}
                placeholder="Describe why you are the best fit for this project, your approach, and relevant experience..."
                required />
              
                  <div className="flex justify-end space-x-4">
                    <Button variant="ghost" onClick={() => setIsBidding(false)}>
                      Cancel
                    </Button>
                    <Button
                  type="button"
                  onClick={() => {
                    alert('Proposal submitted successfully! (Demo)');
                    setIsBidding(false);
                  }}>
                  
                      Submit Proposal
                    </Button>
                  </div>
                </form>
            }
            </div>
          }

          {/* Bids List for Employer Owner */}
          {isEmployerOwner &&
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-navy-900 mb-6">
                Proposals ({jobBids.length})
              </h2>

              {jobBids.length > 0 ?
            <div className="space-y-4">
                  {jobBids.map((bid) =>
              <div
                key={bid.id}
                className="border border-gray-200 rounded-lg p-6 hover:border-amber-300 transition-colors">
                
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center space-x-4">
                          <img
                      src={bid.contractor?.avatar}
                      alt=""
                      className="w-12 h-12 rounded-full" />
                    
                          <div>
                            <h3 className="font-semibold text-navy-900">
                              {bid.contractor?.name}
                            </h3>
                            <div className="flex items-center text-sm text-gray-500">
                              <StarIcon className="w-4 h-4 text-amber-500 mr-1" />
                              {bid.contractor?.rating} (
                              {bid.contractor?.reviewCount} reviews)
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-navy-900">
                            ${bid.amount.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-500">
                            {bid.estimatedDays} days est.
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {bid.coverLetter}
                      </p>
                      <div className="flex space-x-3">
                        <Button size="sm">Accept Bid</Button>
                        <Button size="sm" variant="outline">
                          Message
                        </Button>
                        <Button size="sm" variant="ghost">
                          Decline
                        </Button>
                      </div>
                    </div>
              )}
                </div> :

            <p className="text-gray-500 text-center py-8">
                  No proposals received yet.
                </p>
            }
            </div>
          }
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-80 flex-shrink-0 space-y-6">
          {/* Employer Info */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-navy-900 mb-4">
              About the Employer
            </h3>
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={job.employer?.avatar}
                alt=""
                className="w-16 h-16 rounded-full border border-gray-200" />
              
              <div>
                <div className="font-medium text-gray-900">
                  {job.employer?.name}
                </div>
                {job.employer?.companyName &&
                <div className="text-sm text-gray-500 flex items-center">
                    <BusinessIcon className="w-3 h-3 mr-1" />{' '}
                    {job.employer.companyName}
                  </div>
                }
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-500">Location</span>
                <span className="font-medium text-gray-900">
                  {job.employer?.location}
                </span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-500">Jobs Posted</span>
                <span className="font-medium text-gray-900">
                  {job.employer?.jobsPosted}
                </span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-500">Total Spent</span>
                <span className="font-medium text-gray-900">
                  ${job.employer?.totalSpent.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Member Since</span>
                <span className="font-medium text-gray-900">
                  {new Date(job.employer?.joinedAt || '').getFullYear()}
                </span>
              </div>
            </div>
          </div>

          {/* Action Card for unauthenticated users */}
          {!isAuthenticated &&
          <div className="bg-navy-900 p-6 rounded-xl text-white text-center">
              <h3 className="font-semibold mb-2">Interested in this job?</h3>
              <p className="text-sm text-gray-300 mb-4">
                Sign up as a contractor to submit a proposal.
              </p>
              <Button fullWidth onClick={() => navigate('/signup')}>
                Sign Up to Bid
              </Button>
            </div>
          }
        </div>
      </div>
    </div>);

}