import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import {
  Search,
  FileText,
  Shield,
  CreditCard,
  Star,
  HardHat,
  Building2,
  CheckCircle } from
'lucide-react';
export function HowItWorks() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            How BuildHire Works
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A simple, secure process from finding the right professional to
            completing your project.
          </p>
        </div>
      </section>

      {/* For Employers */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center space-x-3 mb-12">
            <div className="p-3 rounded-full bg-amber-100 text-amber-600">
              <Building2 size={28} />
            </div>
            <h2 className="text-3xl font-bold text-navy-900">For Employers</h2>
          </div>

          <div className="space-y-16">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">
                  Post Your Project
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Describe your construction project in detail — the trade
                  needed, your budget range, location, and timeline. Add any
                  required certifications to attract qualified professionals.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
                    <CheckCircle size={14} className="mr-1 text-green-500" />{' '}
                    Free to post
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
                    <CheckCircle size={14} className="mr-1 text-green-500" />{' '}
                    Takes 5 minutes
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">
                  Review Proposals
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Vetted contractors will submit proposals with their bid
                  amount, estimated timeline, and a cover letter explaining
                  their approach. Compare profiles, ratings, and past work to
                  find the best fit.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
                    <CheckCircle size={14} className="mr-1 text-green-500" />{' '}
                    Verified profiles
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
                    <CheckCircle size={14} className="mr-1 text-green-500" />{' '}
                    Real reviews
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">
                  Hire & Manage
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Accept a proposal to start the project. Set milestones,
                  communicate through in-app messaging, and track progress in
                  real time. Funds are held in escrow until you approve each
                  milestone.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
                    <CheckCircle size={14} className="mr-1 text-green-500" />{' '}
                    Milestone payments
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
                    <CheckCircle size={14} className="mr-1 text-green-500" />{' '}
                    Escrow protection
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Contractors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center space-x-3 mb-12">
            <div className="p-3 rounded-full bg-navy-800 text-amber-500">
              <HardHat size={28} />
            </div>
            <h2 className="text-3xl font-bold text-navy-900">
              For Contractors
            </h2>
          </div>

          <div className="space-y-16">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-navy-900 text-amber-500 flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">
                  Build Your Profile
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Create a professional profile showcasing your trade
                  specialties, certifications, years of experience, and a
                  portfolio of past work. A strong profile gets more
                  invitations.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-navy-900 text-amber-500 flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">
                  Find & Bid on Jobs
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Browse the job board filtered by your trade, location, and
                  budget preferences. Submit competitive proposals with your
                  price, timeline, and why you're the best fit.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-navy-900 text-amber-500 flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">
                  Get Paid Securely
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Once hired, complete milestones and submit them for approval.
                  Funds are held in escrow before you start, so you know you'll
                  get paid for quality work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-12">
            Built on Trust & Safety
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-gray-200">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-600 mb-4">
                <Shield size={28} />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">
                Escrow Protection
              </h3>
              <p className="text-gray-600 text-sm">
                Funds are held securely until work is approved. Both parties are
                protected.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Star size={28} />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">
                Verified Reviews
              </h3>
              <p className="text-gray-600 text-sm">
                Only users who completed a project together can leave reviews.
                No fake ratings.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-100 text-amber-600 mb-4">
                <CreditCard size={28} />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">
                Secure Payments
              </h3>
              <p className="text-gray-600 text-sm">
                All transactions are processed through Stripe with bank-level
                encryption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-6">
            Ready to get started?
          </h2>
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