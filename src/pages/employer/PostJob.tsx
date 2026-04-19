import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input, Select, Textarea } from '../../components/Input';
import { CheckCircle } from 'lucide-react';
export function PostJob() {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    value: 'Painting',
    label: 'Painting'
  },
  {
    value: 'General Contracting',
    label: 'General Contracting'
  },
  {
    value: 'Architecture',
    label: 'Architecture'
  },
  {
    value: 'Landscaping',
    label: 'Landscaping'
  }];

  const timelines = [
  {
    value: '<1 week',
    label: 'Less than 1 week'
  },
  {
    value: '1-2 weeks',
    label: '1 to 2 weeks'
  },
  {
    value: '2-4 weeks',
    label: '2 to 4 weeks'
  },
  {
    value: '1-3 months',
    label: '1 to 3 months'
  },
  {
    value: '3+ months',
    label: 'More than 3 months'
  }];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  if (isSubmitted) {
    return (
      <div className="bg-white p-12 rounded-xl border border-gray-200 text-center max-w-2xl mx-auto mt-10 shadow-sm">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-navy-900 mb-2">
          Job Posted Successfully!
        </h2>
        <p className="text-gray-600 mb-8">
          Your job is now live on the marketplace. Contractors can now submit
          proposals.
        </p>
        <div className="flex justify-center space-x-4">
          <Button
            variant="outline"
            onClick={() => navigate('/employer/dashboard')}>
            
            Go to Dashboard
          </Button>
          <Button onClick={() => navigate('/employer/jobs')}>
            View My Jobs
          </Button>
        </div>
      </div>);

  }
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-navy-900">Post a New Job</h1>
        <p className="text-gray-600">
          Provide details about your project to attract the right contractors.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm space-y-6">
        
        <Input
          label="Job Title"
          placeholder="e.g. Master Bathroom Remodel"
          required />
        

        <Textarea
          label="Project Description"
          rows={5}
          placeholder="Describe the scope of work, materials needed, and any specific requirements..."
          required />
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select label="Trade Category" options={trades} required />
          <Input
            label="Location (City, State)"
            placeholder="e.g. Austin, TX"
            required />
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Budget Range ($)
            </label>
            <div className="flex items-center space-x-2">
              <Input placeholder="Min" type="number" required />
              <span className="text-gray-500">-</span>
              <Input placeholder="Max" type="number" required />
            </div>
          </div>
          <Select label="Estimated Timeline" options={timelines} required />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Urgency Level
          </label>
          <div className="flex space-x-4">
            {['Low', 'Medium', 'High', 'Emergency'].map((level) =>
            <label
              key={level}
              className="flex items-center space-x-2 cursor-pointer">
              
                <input
                type="radio"
                name="urgency"
                value={level.toLowerCase()}
                className="text-amber-500 focus:ring-amber-500"
                required />
              
                <span className="text-sm text-gray-700">{level}</span>
              </label>
            )}
          </div>
        </div>

        <Input
          label="Required Certifications (Optional)"
          placeholder="e.g. Licensed Plumber, OSHA 30 (comma separated)" />
        

        <div className="pt-6 border-t border-gray-100 flex justify-end space-x-4">
          <Button
            variant="ghost"
            type="button"
            onClick={() => navigate('/employer/dashboard')}>
            
            Cancel
          </Button>
          <Button type="submit">Post Job</Button>
        </div>
      </form>
    </div>);

}