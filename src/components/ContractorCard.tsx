import React from 'react';
import { ContractorProfile } from '../data/types';
import { Badge } from './Badge';
import { motion } from 'framer-motion';
import {
  Star as StarIcon,
  LocationOn as LocationOnIcon,
  Verified as VerifiedIcon } from
'@mui/icons-material';
interface ContractorCardProps {
  contractor: ContractorProfile;
  onClick?: () => void;
}
export function ContractorCard({ contractor, onClick }: ContractorCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        boxShadow:
        '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
      }}
      className="bg-white rounded-xl border border-gray-200 p-6 cursor-pointer transition-all duration-200 shadow-sm flex flex-col h-full"
      onClick={onClick}>
      
      <div className="flex items-start space-x-4 mb-4">
        <img
          src={contractor.avatar}
          alt={contractor.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-gray-100" />
        
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-navy-900 flex items-center">
                {contractor.name}
                <VerifiedIcon
                  className="w-4 h-4 text-blue-500 ml-1"
                  fontSize="small" />
                
              </h3>
              <p className="text-sm text-gray-600 font-medium">
                {contractor.title}
              </p>
            </div>
            <div className="flex items-center bg-amber-50 px-2 py-1 rounded-md">
              <StarIcon
                className="w-4 h-4 text-amber-500 mr-1"
                fontSize="small" />
              
              <span className="font-bold text-amber-700 text-sm">
                {contractor.rating}
              </span>
              <span className="text-xs text-amber-600 ml-1">
                ({contractor.reviewCount})
              </span>
            </div>
          </div>
          <div className="flex items-center text-xs text-gray-500 mt-1">
            <LocationOnIcon className="w-3 h-3 mr-0.5" fontSize="small" />{' '}
            {contractor.location}
          </div>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
        {contractor.bio}
      </p>

      <div className="mb-4">
        <div className="flex flex-wrap gap-1.5">
          {contractor.trades.map((trade) =>
          <Badge key={trade} variant="primary" className="text-xs">
              {trade}
            </Badge>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-auto">
        <div className="text-sm">
          <span className="font-semibold text-navy-900">
            ${contractor.hourlyRate}
          </span>
          <span className="text-gray-500">/hr</span>
        </div>
        <div className="text-sm text-gray-600">
          <span className="font-medium">{contractor.experienceYears}</span> yrs
          exp
        </div>
      </div>
    </motion.div>);

}