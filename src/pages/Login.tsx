import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import ConstructionIcon from '@mui/icons-material/Construction';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'employer' | 'contractor'>('employer');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      login(email, role);
      navigate(`/${role}/dashboard`);
      setIsLoading(false);
    }, 800);
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <ConstructionIcon className="h-12 w-12 text-amber-500" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-navy-900">
          Sign in to BuildHire
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <Link
            to="/signup"
            className="font-medium text-amber-600 hover:text-amber-500">
            
            create a new account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-100">
          {/* Role Toggle for Demo Purposes */}
          <div className="mb-6 bg-gray-100 p-1 rounded-lg flex">
            <button
              type="button"
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${role === 'employer' ? 'bg-white shadow-sm text-navy-900' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setRole('employer')}>
              
              Employer
            </button>
            <button
              type="button"
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${role === 'contractor' ? 'bg-white shadow-sm text-navy-900' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setRole('contractor')}>
              
              Contractor
            </button>
          </div>

          <div className="mb-4 p-3 bg-blue-50 text-blue-800 text-sm rounded-md border border-blue-100">
            <strong>Demo Mode:</strong> Logging in as{' '}
            {role === 'employer' ? 'Sarah (Employer)' : 'David (Contractor)'}.
            Any email/password works.
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              label="Email address"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={<EmailIcon fontSize="small" />}
              placeholder="you@example.com" />
            

            <Input
              label="Password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={<LockIcon fontSize="small" />}
              placeholder="••••••••" />
            

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-amber-500 focus:ring-amber-500 border-gray-300 rounded" />
                
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900">
                  
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-amber-600 hover:text-amber-500">
                  
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <Button type="submit" fullWidth isLoading={isLoading}>
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>);

}