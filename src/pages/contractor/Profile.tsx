import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/Button';
import { Input, Textarea } from '../../components/Input';
import { Camera, Plus, X, CheckCircle } from 'lucide-react';
export function ContractorProfileEditor() {
  const { user } = useAuth();
  const [isSaved, setIsSaved] = useState(false);
  // In a real app, this would be initialized from the user's actual profile data
  const [trades, setTrades] = useState(['Plumbing', 'HVAC']);
  const [certs, setCerts] = useState(['Licensed Master Plumber', 'OSHA 30']);
  const [newCert, setNewCert] = useState('');
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };
  const addCert = () => {
    if (newCert.trim() && !certs.includes(newCert.trim())) {
      setCerts([...certs, newCert.trim()]);
      setNewCert('');
    }
  };
  const removeCert = (cert: string) => {
    setCerts(certs.filter((c) => c !== cert));
  };
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">Edit Profile</h1>
          <p className="text-gray-600">
            Update your public profile to attract more clients.
          </p>
        </div>
        <Button
          onClick={() => window.open(`/contractors/${user?.id}`, '_blank')}
          variant="outline">
          
          View Public Profile
        </Button>
      </div>

      {isSaved &&
      <div className="bg-green-50 text-green-800 p-4 rounded-lg flex items-center border border-green-200">
          <CheckCircle size={20} className="mr-2" />
          Profile saved successfully!
        </div>
      }

      <form onSubmit={handleSave} className="space-y-8">
        {/* Basic Info */}
        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm space-y-6">
          <h2 className="text-lg font-bold text-navy-900 border-b border-gray-100 pb-4">
            Basic Information
          </h2>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <img
                src={user?.avatar}
                alt=""
                className="w-24 h-24 rounded-full object-cover border-4 border-gray-50" />
              
              <button
                type="button"
                className="absolute bottom-0 right-0 bg-amber-500 text-white p-2 rounded-full hover:bg-amber-600 transition-colors border-2 border-white">
                
                <Camera size={16} />
              </button>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Profile Photo</h3>
              <p className="text-sm text-gray-500">
                JPG, GIF or PNG. Max size of 5MB.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Full Name" defaultValue={user?.name} required />
            <Input
              label="Professional Title"
              defaultValue="Master Plumber"
              required />
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Location" defaultValue={user?.location} required />
            <Input
              label="Hourly Rate ($)"
              type="number"
              defaultValue={85}
              required />
            
          </div>

          <Textarea
            label="Bio / About Me"
            rows={4}
            defaultValue="Over 15 years of experience in residential and commercial plumbing. Specializing in pipe fitting, water heater installation, and emergency repairs."
            required />
          
        </div>

        {/* Skills & Experience */}
        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm space-y-6">
          <h2 className="text-lg font-bold text-navy-900 border-b border-gray-100 pb-4">
            Skills & Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Years of Experience"
              type="number"
              defaultValue={15}
              required />
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Availability
              </label>
              <select className="w-full bg-white border border-gray-300 rounded-lg p-2.5 focus:ring-amber-500 focus:border-amber-500">
                <option value="available">Available for work</option>
                <option value="busy">Busy, but accepting offers</option>
                <option value="unavailable">Not available</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Certifications & Licenses
            </label>
            <div className="flex space-x-2 mb-3">
              <Input
                placeholder="e.g. OSHA 30"
                value={newCert}
                onChange={(e) => setNewCert(e.target.value)}
                onKeyPress={(e) =>
                e.key === 'Enter' && (e.preventDefault(), addCert())
                }
                className="mb-0 flex-1" />
              
              <Button
                type="button"
                onClick={addCert}
                variant="secondary"
                className="flex-shrink-0">
                
                <Plus size={18} />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {certs.map((cert) =>
              <span
                key={cert}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                
                  {cert}
                  <button
                  type="button"
                  onClick={() => removeCert(cert)}
                  className="ml-2 text-gray-500 hover:text-red-500">
                  
                    <X size={14} />
                  </button>
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Portfolio */}
        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm space-y-6">
          <h2 className="text-lg font-bold text-navy-900 border-b border-gray-100 pb-4">
            Portfolio
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Upload photos of your past work to show employers your quality.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-400 hover:text-amber-500 hover:border-amber-500 cursor-pointer transition-colors">
              <Plus size={32} className="mb-2" />
              <span className="text-sm font-medium">Add Photo</span>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=400"
                alt=""
                className="w-full h-full object-cover" />
              
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button type="button" className="text-white hover:text-red-400">
                  <X size={24} />
                </button>
              </div>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1607472586893-edb57cb31328?auto=format&fit=crop&q=80&w=400"
                alt=""
                className="w-full h-full object-cover" />
              
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button type="button" className="text-white hover:text-red-400">
                  <X size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <Button type="submit" size="lg">
            Save Profile
          </Button>
        </div>
      </form>
    </div>);

}