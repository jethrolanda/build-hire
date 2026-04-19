import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockJobs } from '../data/mockData';
import { JobCard } from '../components/JobCard';
import { Input, Select } from '../components/Input';
import { Button } from '../components/Button';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
export function JobBoard() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [tradeFilter, setTradeFilter] = useState('');
  const [urgencyFilter, setUrgencyFilter] = useState('');
  // Filter jobs based on criteria
  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch =
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTrade = tradeFilter ? job.trade === tradeFilter : true;
    const matchesUrgency = urgencyFilter ? job.urgency === urgencyFilter : true;
    // Only show open jobs on the public board
    return (
      job.status === 'open' && matchesSearch && matchesTrade && matchesUrgency);

  });
  const trades = [
  {
    value: 'Plumbing',
    label: 'Plumbing'
  },
  {
    value: 'Electrical',
    label: 'Electrical'
  },
  {
    value: 'Carpentry',
    label: 'Carpentry'
  },
  {
    value: 'Roofing',
    label: 'Roofing'
  },
  {
    value: 'HVAC',
    label: 'HVAC'
  },
  {
    value: 'General Contracting',
    label: 'General Contracting'
  }];

  const urgencies = [
  {
    value: 'low',
    label: 'Low'
  },
  {
    value: 'medium',
    label: 'Medium'
  },
  {
    value: 'high',
    label: 'High'
  },
  {
    value: 'emergency',
    label: 'Emergency'
  }];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-navy-900 mb-2">
          Find Construction Jobs
        </h1>
        <p className="text-gray-600">
          Browse open projects and submit your proposals.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm sticky top-24">
            <div className="flex items-center mb-4 pb-4 border-b border-gray-100">
              <FilterListIcon className="text-gray-500 mr-2" />
              <h2 className="text-lg font-semibold text-navy-900">Filters</h2>
            </div>

            <div className="space-y-6">
              <Select
                label="Trade Category"
                options={trades}
                value={tradeFilter}
                onChange={(e) => setTradeFilter(e.target.value)} />
              

              <Select
                label="Urgency Level"
                options={urgencies}
                value={urgencyFilter}
                onChange={(e) => setUrgencyFilter(e.target.value)} />
              

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range
                </label>
                <div className="flex items-center space-x-2">
                  <Input placeholder="Min" type="number" />
                  <span className="text-gray-500">-</span>
                  <Input placeholder="Max" type="number" />
                </div>
              </div>

              <Button
                variant="outline"
                fullWidth
                onClick={() => {
                  setSearchTerm('');
                  setTradeFilter('');
                  setUrgencyFilter('');
                }}>
                
                Clear Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="w-full sm:w-96">
              <Input
                placeholder="Search jobs by title or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon={<SearchIcon fontSize="small" />} />
              
            </div>
            <div className="text-sm text-gray-500">
              Showing{' '}
              <span className="font-semibold text-navy-900">
                {filteredJobs.length}
              </span>{' '}
              jobs
            </div>
          </div>

          {filteredJobs.length > 0 ?
          <div className="space-y-4">
              {filteredJobs.map((job) =>
            <JobCard
              key={job.id}
              job={job}
              onClick={() => navigate(`/jobs/${job.id}`)} />

            )}
            </div> :

          <div className="bg-white p-12 rounded-xl border border-gray-200 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <SearchIcon className="text-gray-400" fontSize="large" />
              </div>
              <h3 className="text-lg font-medium text-navy-900 mb-2">
                No jobs found
              </h3>
              <p className="text-gray-500">
                Try adjusting your filters or search terms.
              </p>
            </div>
          }
        </div>
      </div>
    </div>);

}