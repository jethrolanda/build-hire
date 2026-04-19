import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockContractors, mockReviews } from '../data/mockData';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import {
  Star,
  MapPin,
  BadgeCheck,
  Clock,
  Briefcase,
  MessageSquare } from
'lucide-react';
export function ContractorProfile() {
  const { id } = useParams<{
    id: string;
  }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  // If no ID provided, use the first contractor for demo purposes
  const contractorId = id || mockContractors[0].id;
  const contractor = mockContractors.find((c) => c.id === contractorId);
  if (!contractor) {
    return <div className="p-8 text-center">Contractor not found</div>;
  }
  const reviews = mockReviews.filter((r) => r.revieweeId === contractor.id);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 space-y-8">
          {/* Header Profile Card */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-32 bg-navy-900"></div>

            <div className="relative pt-16 flex flex-col sm:flex-row gap-6 items-start sm:items-end">
              <img
                src={contractor.avatar}
                alt={contractor.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover bg-white" />
              
              <div className="flex-1 pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-3xl font-bold text-navy-900 flex items-center">
                      {contractor.name}
                      <BadgeCheck size={24} className="text-blue-500 ml-2" />
                    </h1>
                    <p className="text-lg text-gray-600 font-medium mt-1">
                      {contractor.title}
                    </p>
                  </div>
                  <Badge
                    variant={
                    contractor.availability === 'available' ?
                    'success' :
                    'warning'
                    }
                    className="capitalize">
                    
                    {contractor.availability}
                  </Badge>
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <MapPin size={16} className="mr-1" /> {contractor.location}
                  </span>
                  <span className="flex items-center text-amber-600 font-medium">
                    <Star size={16} className="mr-1 fill-amber-500" />
                    {contractor.rating} ({contractor.reviewCount} reviews)
                  </span>
                  <span className="flex items-center">
                    <Clock size={16} className="mr-1" /> Member since{' '}
                    {new Date(contractor.joinedAt).getFullYear()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center">
              <div className="text-gray-500 text-sm mb-1">Hourly Rate</div>
              <div className="text-xl font-bold text-navy-900">
                ${contractor.hourlyRate}/hr
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center">
              <div className="text-gray-500 text-sm mb-1">Experience</div>
              <div className="text-xl font-bold text-navy-900">
                {contractor.experienceYears} Years
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center">
              <div className="text-gray-500 text-sm mb-1">Jobs Completed</div>
              <div className="text-xl font-bold text-navy-900">24</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center">
              <div className="text-gray-500 text-sm mb-1">Response Time</div>
              <div className="text-xl font-bold text-navy-900">&lt; 2 hrs</div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold text-navy-900 mb-4">About</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {contractor.bio}
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">
                  Trade Specialties
                </h3>
                <div className="flex flex-wrap gap-2">
                  {contractor.trades.map((trade) =>
                  <Badge key={trade} variant="primary">
                      {trade}
                    </Badge>
                  )}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">
                  Certifications
                </h3>
                <ul className="space-y-2">
                  {contractor.certifications.map((cert) =>
                  <li
                    key={cert}
                    className="flex items-center text-gray-700 text-sm">
                    
                      <BadgeCheck size={16} className="text-green-500 mr-2" />{' '}
                      {cert}
                    </li>
                  )}
                  {contractor.certifications.length === 0 &&
                  <li className="text-gray-500 text-sm">
                      No certifications listed
                    </li>
                  }
                </ul>
              </div>
            </div>
          </div>

          {/* Portfolio */}
          {contractor.portfolioImages.length > 0 &&
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-navy-900 mb-6">
                Portfolio
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {contractor.portfolioImages.map((img, i) =>
              <div
                key={i}
                className="aspect-square rounded-lg overflow-hidden border border-gray-200 cursor-pointer hover:opacity-90 transition-opacity">
                
                    <img
                  src={img}
                  alt={`Portfolio item ${i + 1}`}
                  className="w-full h-full object-cover" />
                
                  </div>
              )}
              </div>
            </div>
          }

          {/* Reviews */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold text-navy-900 mb-6 flex items-center">
              Reviews{' '}
              <span className="ml-2 bg-gray-100 text-gray-600 text-sm py-0.5 px-2 rounded-full">
                {reviews.length}
              </span>
            </h2>

            {reviews.length > 0 ?
            <div className="space-y-6">
                {reviews.map((review) =>
              <div
                key={review.id}
                className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center space-x-3">
                        <img
                      src={review.reviewer?.avatar}
                      alt=""
                      className="w-10 h-10 rounded-full" />
                    
                        <div>
                          <div className="font-medium text-navy-900">
                            {review.reviewer?.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {new Date(review.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) =>
                    <Star
                      key={i}
                      size={14}
                      className={
                      i < review.rating ?
                      'text-amber-500 fill-amber-500' :
                      'text-gray-300'
                      } />

                    )}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm mt-3">
                      {review.comment}
                    </p>
                  </div>
              )}
              </div> :

            <p className="text-gray-500 text-center py-4">No reviews yet.</p>
            }
          </div>
        </div>

        {/* Sidebar Actions */}
        <div className="w-full lg:w-80 flex-shrink-0 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm sticky top-24">
            {user?.role === 'employer' ?
            <div className="space-y-4">
                <Button fullWidth size="lg" icon={<Briefcase size={18} />}>
                  Invite to Job
                </Button>
                <Button
                fullWidth
                size="lg"
                variant="outline"
                icon={<MessageSquare size={18} />}>
                
                  Send Message
                </Button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  Inviting a contractor allows them to submit a proposal for
                  your private job.
                </p>
              </div> :
            user?.id === contractor.id ?
            <div className="space-y-4">
                <Button
                fullWidth
                size="lg"
                onClick={() => navigate('/contractor/profile')}>
                
                  Edit Profile
                </Button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  This is how employers see your profile.
                </p>
              </div> :

            <div className="space-y-4 text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Sign in as an employer to hire {contractor.name.split(' ')[0]}
                  .
                </p>
                <Button fullWidth onClick={() => navigate('/login')}>
                  Log in to Hire
                </Button>
              </div>
            }
          </div>
        </div>
      </div>
    </div>);

}