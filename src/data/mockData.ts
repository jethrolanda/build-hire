import { ContractorProfile, EmployerProfile, Job, Bid, Project } from './types';

export const mockEmployers: EmployerProfile[] = [
{
  id: 'emp-1',
  name: 'Sarah Jenkins',
  email: 'sarah@horizondev.com',
  role: 'employer',
  companyName: 'Horizon Development',
  location: 'Austin, TX',
  joinedAt: '2023-01-15T00:00:00Z',
  avatar: 'https://i.pravatar.cc/150?u=emp-1',
  totalSpent: 145000,
  jobsPosted: 12,
  rating: 4.8
},
{
  id: 'emp-2',
  name: 'Michael Chang',
  email: 'michael@homeowner.com',
  role: 'employer',
  location: 'Seattle, WA',
  joinedAt: '2023-06-22T00:00:00Z',
  avatar: 'https://i.pravatar.cc/150?u=emp-2',
  totalSpent: 12500,
  jobsPosted: 2,
  rating: 5.0
}];


export const mockContractors: ContractorProfile[] = [
{
  id: 'con-1',
  name: 'David Miller',
  email: 'david@millerplumbing.com',
  role: 'contractor',
  title: 'Master Plumber',
  bio: 'Over 15 years of experience in residential and commercial plumbing. Specializing in pipe fitting, water heater installation, and emergency repairs.',
  trades: ['Plumbing', 'HVAC'],
  experienceYears: 15,
  hourlyRate: 85,
  rating: 4.9,
  reviewCount: 42,
  certifications: ['Licensed Master Plumber', 'OSHA 30'],
  portfolioImages: [
  'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1607472586893-edb57cb31328?auto=format&fit=crop&q=80&w=800'],

  availability: 'available',
  location: 'Austin, TX',
  joinedAt: '2022-11-10T00:00:00Z',
  avatar: 'https://i.pravatar.cc/150?u=con-1'
},
{
  id: 'con-2',
  name: 'Elena Rodriguez',
  email: 'elena@rodriguezelectric.com',
  role: 'contractor',
  title: 'Licensed Electrician',
  bio: 'Expert in smart home wiring, panel upgrades, and commercial electrical systems. Fully insured and bonded.',
  trades: ['Electrical'],
  experienceYears: 8,
  hourlyRate: 95,
  rating: 4.7,
  reviewCount: 28,
  certifications: ['Journeyman Electrician', 'Smart Home Certified'],
  portfolioImages: [
  'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800'],

  availability: 'busy',
  location: 'Seattle, WA',
  joinedAt: '2023-03-05T00:00:00Z',
  avatar: 'https://i.pravatar.cc/150?u=con-2'
},
{
  id: 'con-3',
  name: 'James Wilson',
  email: 'james@wilsonbuilds.com',
  role: 'contractor',
  title: 'General Contractor & Carpenter',
  bio: 'Custom framing, decking, and full home remodels. I take pride in precision and quality craftsmanship.',
  trades: ['Carpentry', 'General Contracting'],
  experienceYears: 12,
  hourlyRate: 75,
  rating: 4.9,
  reviewCount: 56,
  certifications: ['Licensed General Contractor'],
  portfolioImages: [
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800'],

  availability: 'available',
  location: 'Austin, TX',
  joinedAt: '2021-08-14T00:00:00Z',
  avatar: 'https://i.pravatar.cc/150?u=con-3'
}];


export const mockJobs: Job[] = [
{
  id: 'job-1',
  employerId: 'emp-1',
  title: 'Commercial Office Buildout - Electrical & Data Wiring',
  description:
  'Looking for a licensed electrician to handle the complete wiring of a 5,000 sq ft office space. Includes lighting, floor outlets, and Cat6 data drops. Must be completed within 3 weeks.',
  trade: 'Electrical',
  budgetMin: 15000,
  budgetMax: 25000,
  location: 'Austin, TX',
  status: 'open',
  urgency: 'high',
  postedAt: '2023-10-24T10:00:00Z',
  bidsCount: 3,
  requiredCertifications: ['Licensed Electrician', 'Commercial Insurance'],
  employer: mockEmployers[0]
},
{
  id: 'job-2',
  employerId: 'emp-2',
  title: 'Master Bathroom Remodel - Plumbing Reroute',
  description:
  'Need a plumber to reroute water lines and drain for a new freestanding tub and double vanity. Slab foundation. Demo is already completed.',
  trade: 'Plumbing',
  budgetMin: 3000,
  budgetMax: 5000,
  location: 'Seattle, WA',
  status: 'open',
  urgency: 'medium',
  postedAt: '2023-10-25T14:30:00Z',
  bidsCount: 1,
  requiredCertifications: ['Licensed Plumber'],
  employer: mockEmployers[1]
},
{
  id: 'job-3',
  employerId: 'emp-1',
  title: 'Custom Deck Build (Trex Composite)',
  description:
  'Looking for an experienced carpenter to build a 400 sq ft multi-level deck using Trex composite decking. Plans are approved and ready to go.',
  trade: 'Carpentry',
  budgetMin: 12000,
  budgetMax: 18000,
  location: 'Austin, TX',
  status: 'in-progress',
  urgency: 'low',
  postedAt: '2023-10-15T09:00:00Z',
  bidsCount: 5,
  requiredCertifications: [],
  employer: mockEmployers[0]
},
{
  id: 'job-4',
  employerId: 'emp-2',
  title: 'Emergency Roof Leak Repair',
  description:
  'Tree branch fell and damaged a section of asphalt shingles. Need immediate patch/repair before the next rain storm.',
  trade: 'Roofing',
  budgetMin: 500,
  budgetMax: 1200,
  location: 'Seattle, WA',
  status: 'open',
  urgency: 'emergency',
  postedAt: '2023-10-26T08:15:00Z',
  bidsCount: 0,
  requiredCertifications: ['Insured'],
  employer: mockEmployers[1]
},
{
  id: 'job-5',
  employerId: 'emp-1',
  title: 'HVAC System Replacement - 2 Units',
  description:
  'Need to replace two aging 3-ton HVAC units for a commercial property. Looking for energy-efficient options. Crane service will be needed for roof access.',
  trade: 'HVAC',
  budgetMin: 18000,
  budgetMax: 24000,
  location: 'Austin, TX',
  status: 'open',
  urgency: 'medium',
  postedAt: '2023-10-20T11:45:00Z',
  bidsCount: 2,
  requiredCertifications: ['EPA Certified', 'HVAC License'],
  employer: mockEmployers[0]
}];


export const mockBids: Bid[] = [
{
  id: 'bid-1',
  jobId: 'job-1',
  contractorId: 'con-2',
  amount: 22500,
  estimatedDays: 18,
  coverLetter:
  'I have extensive experience with commercial office buildouts. I can start next Monday and guarantee completion within your 3-week timeframe. My bid includes all materials and labor for electrical and data drops.',
  status: 'pending',
  submittedAt: '2023-10-24T15:30:00Z',
  contractor: mockContractors[1],
  job: mockJobs[0]
},
{
  id: 'bid-2',
  jobId: 'job-2',
  contractorId: 'con-1',
  amount: 4200,
  estimatedDays: 3,
  coverLetter:
  'I specialize in slab foundation plumbing reroutes. I can get this done quickly and cleanly so your tile guys can get to work.',
  status: 'pending',
  submittedAt: '2023-10-25T16:00:00Z',
  contractor: mockContractors[0],
  job: mockJobs[1]
},
{
  id: 'bid-3',
  jobId: 'job-3',
  contractorId: 'con-3',
  amount: 16500,
  estimatedDays: 14,
  coverLetter:
  'Trex decks are my specialty. I have built over 50 composite decks in the Austin area. I can provide references and a detailed breakdown of materials vs labor.',
  status: 'accepted',
  submittedAt: '2023-10-16T10:00:00Z',
  contractor: mockContractors[2],
  job: mockJobs[2]
}];


export const mockProjects: Project[] = [
{
  id: 'proj-1',
  jobId: 'job-3',
  employerId: 'emp-1',
  contractorId: 'con-3',
  status: 'active',
  startDate: '2023-10-18T00:00:00Z',
  totalAmount: 16500,
  amountPaid: 5000,
  job: mockJobs[2],
  contractor: mockContractors[2],
  employer: mockEmployers[0]
}];