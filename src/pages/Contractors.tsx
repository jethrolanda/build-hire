import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockContractors } from '../data/mockData';
import { ContractorCard } from '../components/ContractorCard';
import { Input } from '../components/Input';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Button } from '../components/Button';
export function Contractors() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [tradeFilter, setTradeFilter] = useState('');
  const allTrades = Array.from(
    new Set(mockContractors.flatMap((c) => c.trades))
  );
  const filtered = mockContractors.filter((c) => {
    const matchesSearch =
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.bio.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTrade = tradeFilter ? c.trades.includes(tradeFilter) : true;
    return matchesSearch && matchesTrade;
  });
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-navy-900 mb-2">
          Find Contractors
        </h1>
        <p className="text-gray-600">
          Browse vetted construction professionals ready to work on your
          project.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm sticky top-24">
            <div className="flex items-center mb-4 pb-4 border-b border-gray-100">
              <SlidersHorizontal size={18} className="text-gray-500 mr-2" />
              <h2 className="text-lg font-semibold text-navy-900">Filters</h2>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Trade Specialty
                </label>
                <select
                  className="w-full bg-white border border-gray-300 rounded-lg p-2.5 focus:ring-amber-500 focus:border-amber-500 text-sm"
                  value={tradeFilter}
                  onChange={(e) => setTradeFilter(e.target.value)}>
                  
                  <option value="">All Trades</option>
                  {allTrades.map((t) =>
                  <option key={t} value={t}>
                      {t}
                    </option>
                  )}
                </select>
              </div>
              <Button
                variant="outline"
                fullWidth
                onClick={() => {
                  setSearchTerm('');
                  setTradeFilter('');
                }}>
                
                Clear Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex-1">
          <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="w-full sm:w-96">
              <Input
                placeholder="Search by name, title, or skill..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon={<Search size={16} />} />
              
            </div>
            <div className="text-sm text-gray-500">
              Showing{' '}
              <span className="font-semibold text-navy-900">
                {filtered.length}
              </span>{' '}
              contractors
            </div>
          </div>

          {filtered.length > 0 ?
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map((contractor) =>
            <ContractorCard
              key={contractor.id}
              contractor={contractor}
              onClick={() => navigate(`/contractors/${contractor.id}`)} />

            )}
            </div> :

          <div className="bg-white p-12 rounded-xl border border-gray-200 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Search size={28} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-navy-900 mb-2">
                No contractors found
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