import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import {
  Search,
  HardHat,
  Droplets,
  Zap,
  Home,
  Paintbrush,
  Wind,
  CheckCircle } from
'lucide-react';
export function Landing() {
  const navigate = useNavigate();
  const categories = [
  {
    name: 'General Contracting',
    icon: <HardHat size={32} />
  },
  {
    name: 'Plumbing',
    icon: <Droplets size={32} />
  },
  {
    name: 'Electrical',
    icon: <Zap size={32} />
  },
  {
    name: 'Roofing',
    icon: <Home size={32} />
  },
  {
    name: 'Painting',
    icon: <Paintbrush size={32} />
  },
  {
    name: 'HVAC',
    icon: <Wind size={32} />
  }];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000"
            alt="Construction background"
            className="w-full h-full object-cover" />
          
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 lg:py-32">
          <div className="max-w-3xl">
            <motion.h1
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.5
              }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              
              Find the Right Builder. <br />
              <span className="text-amber-500">Get the Job Done.</span>
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.5,
                delay: 0.1
              }}
              className="text-xl text-gray-300 mb-10 max-w-2xl">
              
              The premier marketplace connecting property owners with vetted,
              licensed construction professionals for projects of any size.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.5,
                delay: 0.2
              }}
              className="bg-white p-2 rounded-lg flex flex-col sm:flex-row shadow-lg max-w-2xl">
              
              <div className="flex-1 flex items-center px-4 py-2 sm:py-0 text-gray-900">
                <Search size={20} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="What trade are you looking for? (e.g. Plumber)"
                  className="w-full focus:outline-none bg-transparent" />
                
              </div>
              <div className="w-full sm:w-auto mt-2 sm:mt-0">
                <Button size="lg" fullWidth onClick={() => navigate('/jobs')}>
                  Search
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                duration: 0.5,
                delay: 0.4
              }}
              className="mt-8 flex items-center space-x-6 text-sm font-medium text-gray-300">
              
              <span className="flex items-center">
                <CheckCircle size={18} className="text-amber-500 mr-2" /> Vetted
                Professionals
              </span>
              <span className="flex items-center">
                <CheckCircle size={18} className="text-amber-500 mr-2" /> Secure
                Payments
              </span>
              <span className="flex items-center">
                <CheckCircle size={18} className="text-amber-500 mr-2" />{' '}
                Project Protection
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-amber-500 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-navy-900">
            <div>
              <div className="text-4xl font-bold mb-2">10k+</div>
              <div className="font-medium">Vetted Contractors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$50M+</div>
              <div className="font-medium">Jobs Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <div className="font-medium">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="font-medium">Project Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              Browse by Trade
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find specialized professionals for your specific project needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) =>
            <motion.div
              key={category.name}
              whileHover={{
                y: -5
              }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center cursor-pointer hover:border-amber-500 hover:shadow-md transition-all"
              onClick={() => navigate('/jobs')}>
              
                <div className="text-navy-700 mb-4 flex justify-center">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  {category.name}
                </h3>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              How BuildHire Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A seamless experience from posting a job to project completion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-navy-900 mb-8 border-b border-gray-200 pb-4">
                For Employers
              </h3>
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Post a Job
                    </h4>
                    <p className="text-gray-600">
                      Describe your project, set a budget, and specify the
                      skills needed.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Review Bids
                    </h4>
                    <p className="text-gray-600">
                      Receive proposals from vetted contractors. Compare
                      profiles, reviews, and quotes.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Hire & Pay Securely
                    </h4>
                    <p className="text-gray-600">
                      Fund milestones in escrow. Release payment only when
                      you're satisfied with the work.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Button onClick={() => navigate('/signup')}>
                  Post a Job Now
                </Button>
              </div>
            </div>

            <div className="bg-navy-900 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-8 border-b border-navy-700 pb-4">
                For Contractors
              </h3>
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy-700 text-amber-500 flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">
                      Build Your Profile
                    </h4>
                    <p className="text-gray-400">
                      Showcase your portfolio, certifications, and experience to
                      stand out.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy-700 text-amber-500 flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">Find Work</h4>
                    <p className="text-gray-400">
                      Browse local jobs that match your skills and submit
                      competitive bids.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy-700 text-amber-500 flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">
                      Get Paid On Time
                    </h4>
                    <p className="text-gray-400">
                      With milestone escrow, you know the funds are secure
                      before you start working.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-navy-700">
                <Button
                  variant="outline"
                  className="border-navy-600 text-white hover:bg-navy-800"
                  onClick={() => navigate('/signup')}>
                  
                  Find Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-500 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-6">
            Ready to get started?
          </h2>
          <p className="text-navy-800 text-lg mb-8">
            Join thousands of professionals and property owners building the
            future together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate('/signup')}>
              
              I want to hire
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="!bg-white !text-navy-900 !border-white hover:!bg-gray-100"
              onClick={() => navigate('/signup')}>
              
              I want to work
            </Button>
          </div>
        </div>
      </section>
    </div>);

}