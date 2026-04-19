import React from 'react';
import { Job } from '../data/types';
import { Badge } from './Badge';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Wrench } from 'lucide-react';
interface JobCardProps {
  job: Job;
  onClick?: () => void;
}
export function JobCard({ job, onClick }: JobCardProps) {
  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'emergency':
        return 'danger';
      case 'high':
        return 'warning';
      case 'medium':
        return 'info';
      default:
        return 'neutral';
    }
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'success';
      case 'in-progress':
        return 'primary';
      case 'completed':
        return 'neutral';
      default:
        return 'neutral';
    }
  };
  const timeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 3600 * 24)
    );
    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return 'Yesterday';
    return `${diffInDays} days ago`;
  };
  return (
    <motion.div
      whileHover={{
        y: -4,
        boxShadow:
        '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
      }}
      className="bg-white rounded-xl border border-gray-200 p-6 cursor-pointer transition-all duration-200 shadow-sm"
      onClick={onClick}>
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-navy-900 mb-1 line-clamp-1">
            {job.title}
          </h3>
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <span className="flex items-center">
              <MapPin size={14} className="mr-1" /> {job.location}
            </span>
            <span className="flex items-center">
              <Clock size={14} className="mr-1" /> {timeAgo(job.postedAt)}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-end space-y-2">
          <Badge variant={getStatusColor(job.status)}>
            {job.status.toUpperCase()}
          </Badge>
          {job.urgency !== 'low' &&
          <Badge variant={getUrgencyColor(job.urgency)}>
              {job.urgency} urgency
            </Badge>
          }
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {job.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
          <Wrench size={12} className="mr-1" /> {job.trade}
        </span>
        {job.requiredCertifications.map((cert) =>
        <span
          key={cert}
          className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-50 text-gray-600 border border-gray-200">
          
            {cert}
          </span>
        )}
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <div className="flex items-center text-navy-800 font-semibold">
          <DollarSign size={18} className="text-amber-500" />
          {job.budgetMin.toLocaleString()} - ${job.budgetMax.toLocaleString()}
        </div>
        <div className="text-sm text-gray-500">
          <span className="font-medium text-gray-900">{job.bidsCount}</span>{' '}
          proposals
        </div>
      </div>
    </motion.div>);

}