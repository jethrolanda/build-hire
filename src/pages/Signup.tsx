import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import ConstructionIcon from '@mui/icons-material/Construction';
import BusinessIcon from '@mui/icons-material/Business';
import EngineeringIcon from '@mui/icons-material/Engineering';
export function Signup() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<'employer' | 'contractor' | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleRoleSelect = (selectedRole: 'employer' | 'contractor') => {
    setRole(selectedRole);
    setStep(2);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!role) return;
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      login('newuser@example.com', role);
      navigate(`/${role}/dashboard`);
      setIsLoading(false);
    }, 1000);
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <ConstructionIcon className="h-12 w-12 text-amber-500" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-navy-900">
          Join BuildHire
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-medium text-amber-600 hover:text-amber-500">
            
            Log in
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-100">
          {step === 1 &&
          <div>
              <h3 className="text-lg font-medium text-gray-900 mb-6 text-center">
                How do you want to use BuildHire?
              </h3>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div
                className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${role === 'employer' ? 'border-amber-500 bg-amber-50' : 'border-gray-200 hover:border-amber-300'}`}
                onClick={() => handleRoleSelect('employer')}>
                
                  <div className="flex flex-col items-center text-center">
                    <div
                    className={`p-3 rounded-full mb-4 ${role === 'employer' ? 'bg-amber-100 text-amber-600' : 'bg-gray-100 text-gray-500'}`}>
                    
                      <BusinessIcon fontSize="large" />
                    </div>
                    <h4 className="text-lg font-bold text-navy-900 mb-2">
                      I'm an Employer
                    </h4>
                    <p className="text-sm text-gray-500">
                      I want to post jobs, hire contractors, and manage
                      projects.
                    </p>
                  </div>
                </div>

                <div
                className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${role === 'contractor' ? 'border-amber-500 bg-amber-50' : 'border-gray-200 hover:border-amber-300'}`}
                onClick={() => handleRoleSelect('contractor')}>
                
                  <div className="flex flex-col items-center text-center">
                    <div
                    className={`p-3 rounded-full mb-4 ${role === 'contractor' ? 'bg-amber-100 text-amber-600' : 'bg-gray-100 text-gray-500'}`}>
                    
                      <EngineeringIcon fontSize="large" />
                    </div>
                    <h4 className="text-lg font-bold text-navy-900 mb-2">
                      I'm a Contractor
                    </h4>
                    <p className="text-sm text-gray-500">
                      I want to find work, submit bids, and build my business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          }

          {step === 2 &&
          <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Create your {role} account
                </h3>
                <button
                type="button"
                onClick={() => setStep(1)}
                className="text-sm text-amber-600 hover:text-amber-500">
                
                  Change role
                </button>
              </div>

              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <Input label="First name" required placeholder="John" />
                <Input label="Last name" required placeholder="Doe" />
              </div>

              <Input
              label="Email address"
              type="email"
              required
              placeholder="john@example.com" />
            

              <Input
              label="Password"
              type="password"
              required
              placeholder="Create a strong password" />
            

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-amber-500 focus:ring-amber-500 border-gray-300 rounded" />
                
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="text-gray-500">
                    I agree to the{' '}
                    <a
                    href="#"
                    className="font-medium text-amber-600 hover:text-amber-500">
                    
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a
                    href="#"
                    className="font-medium text-amber-600 hover:text-amber-500">
                    
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>
              </div>

              <div>
                <Button type="submit" fullWidth isLoading={isLoading}>
                  Create Account
                </Button>
              </div>
            </form>
          }
        </div>
      </div>
    </div>);

}