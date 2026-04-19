import {
  ContractorProfile,
  EmployerProfile,
  Job,
  Bid,
  Project,
  Milestone,
  Message,
  Conversation,
  Review,
  Notification,
  Payment } from
'./types';

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
},
{
  id: 'con-4',
  name: 'Robert Fox',
  email: 'robert@foxroofing.com',
  role: 'contractor',
  title: 'Roofing Specialist',
  bio: 'Specializing in asphalt, metal, and flat roofs. 10 years of experience.',
  trades: ['Roofing'],
  experienceYears: 10,
  hourlyRate: 65,
  rating: 4.6,
  reviewCount: 34,
  certifications: ['Certified Roofer'],
  portfolioImages: [],
  availability: 'available',
  location: 'Austin, TX',
  joinedAt: '2022-05-12T00:00:00Z',
  avatar: 'https://i.pravatar.cc/150?u=con-4'
},
{
  id: 'con-5',
  name: 'Alice Smith',
  email: 'alice@smithpainting.com',
  role: 'contractor',
  title: 'Professional Painter',
  bio: 'Interior and exterior painting services. High attention to detail.',
  trades: ['Painting'],
  experienceYears: 5,
  hourlyRate: 45,
  rating: 4.8,
  reviewCount: 19,
  certifications: [],
  portfolioImages: [],
  availability: 'available',
  location: 'Seattle, WA',
  joinedAt: '2023-09-01T00:00:00Z',
  avatar: 'https://i.pravatar.cc/150?u=con-5'
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
},
{
  id: 'job-6',
  employerId: 'emp-2',
  title: 'Interior Painting - 3 Bedrooms',
  description:
  'Need 3 bedrooms painted including trim and ceilings. Paint will be provided.',
  trade: 'Painting',
  budgetMin: 1500,
  budgetMax: 2500,
  location: 'Seattle, WA',
  status: 'open',
  urgency: 'low',
  postedAt: '2023-10-28T09:00:00Z',
  bidsCount: 4,
  requiredCertifications: [],
  employer: mockEmployers[1]
},
{
  id: 'job-7',
  employerId: 'emp-1',
  title: 'Landscaping & Hardscaping for New Build',
  description:
  'Full landscaping for a new residential build. Includes retaining walls, sod installation, and planting.',
  trade: 'Landscaping',
  budgetMin: 8000,
  budgetMax: 15000,
  location: 'Austin, TX',
  status: 'open',
  urgency: 'medium',
  postedAt: '2023-10-29T10:00:00Z',
  bidsCount: 1,
  requiredCertifications: [],
  employer: mockEmployers[0]
},
{
  id: 'job-8',
  employerId: 'emp-2',
  title: 'Architectural Plans for Kitchen Extension',
  description:
  'Need stamped architectural plans for a 200 sq ft kitchen extension.',
  trade: 'Architecture',
  budgetMin: 2000,
  budgetMax: 4000,
  location: 'Seattle, WA',
  status: 'completed',
  urgency: 'low',
  postedAt: '2023-09-15T10:00:00Z',
  bidsCount: 6,
  requiredCertifications: ['Licensed Architect'],
  employer: mockEmployers[1]
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


export const mockMilestones: Milestone[] = [
{
  id: 'mil-1',
  projectId: 'proj-1',
  title: 'Materials Delivery & Site Prep',
  description:
  'Delivery of Trex composite materials and framing lumber. Clearing the site and digging footings.',
  amount: 5000,
  status: 'approved',
  dueDate: '2023-10-20T00:00:00Z',
  completedDate: '2023-10-19T00:00:00Z'
},
{
  id: 'mil-2',
  projectId: 'proj-1',
  title: 'Framing & Foundation',
  description: 'Pouring concrete footings and building the structural frame.',
  amount: 6000,
  status: 'completed',
  dueDate: '2023-10-25T00:00:00Z',
  completedDate: '2023-10-24T00:00:00Z'
},
{
  id: 'mil-3',
  projectId: 'proj-1',
  title: 'Decking & Railing Installation',
  description:
  'Installing Trex boards, fascia, and railing systems. Final cleanup.',
  amount: 5500,
  status: 'in-progress',
  dueDate: '2023-11-01T00:00:00Z'
}];


export const mockMessages: Message[] = [
{
  id: 'msg-1',
  senderId: 'emp-1',
  receiverId: 'con-3',
  content:
  'Hi James, the footings look great. When do you expect the framing inspection?',
  timestamp: '2023-10-24T14:00:00Z',
  read: true
},
{
  id: 'msg-2',
  senderId: 'con-3',
  receiverId: 'emp-1',
  content:
  'Thanks Sarah! The inspector is coming tomorrow morning at 9 AM. If all goes well, we start decking in the afternoon.',
  timestamp: '2023-10-24T14:15:00Z',
  read: true
},
{
  id: 'msg-3',
  senderId: 'emp-1',
  receiverId: 'con-3',
  content: 'Perfect. Let me know how it goes.',
  timestamp: '2023-10-24T14:20:00Z',
  read: true
},
{
  id: 'msg-4',
  senderId: 'con-3',
  receiverId: 'emp-1',
  content: 'Inspection passed! We are starting on the decking now.',
  timestamp: '2023-10-25T10:30:00Z',
  read: false
}];


export const mockConversations: Conversation[] = [
{
  id: 'conv-1',
  participants: ['emp-1', 'con-3'],
  lastMessage: mockMessages[3],
  unreadCount: 1,
  job: mockJobs[2]
}];


export const mockReviews: Review[] = [
{
  id: 'rev-1',
  projectId: 'proj-old-1',
  reviewerId: 'emp-1',
  revieweeId: 'con-3',
  rating: 5,
  comment:
  'James did an incredible job on our previous pergola project. Highly recommended!',
  createdAt: '2022-08-15T00:00:00Z',
  reviewer: mockEmployers[0],
  reviewee: mockContractors[2]
},
{
  id: 'rev-2',
  projectId: 'proj-old-2',
  reviewerId: 'emp-2',
  revieweeId: 'con-1',
  rating: 4,
  comment:
  'David fixed our plumbing issue quickly. A bit pricey but good work.',
  createdAt: '2023-01-10T00:00:00Z',
  reviewer: mockEmployers[1],
  reviewee: mockContractors[0]
}];


export const mockNotifications: Notification[] = [
{
  id: 'notif-1',
  userId: 'emp-1',
  type: 'milestone_completed',
  title: 'Milestone Completed',
  message: 'James Wilson has completed "Framing & Foundation".',
  read: false,
  createdAt: '2023-10-24T16:00:00Z',
  link: '/employer/projects'
},
{
  id: 'notif-2',
  userId: 'con-3',
  type: 'payment_released',
  title: 'Payment Released',
  message:
  'Sarah Jenkins released $5,000 for "Materials Delivery & Site Prep".',
  read: true,
  createdAt: '2023-10-20T10:00:00Z',
  link: '/contractor/earnings'
}];


export const mockPayments: Payment[] = [
{
  id: 'pay-1',
  projectId: 'proj-1',
  milestoneId: 'mil-1',
  amount: 5000,
  status: 'released',
  date: '2023-10-20T10:00:00Z',
  project: mockProjects[0],
  milestone: mockMilestones[0]
},
{
  id: 'pay-2',
  projectId: 'proj-1',
  milestoneId: 'mil-2',
  amount: 6000,
  status: 'held',
  date: '2023-10-18T00:00:00Z',
  project: mockProjects[0],
  milestone: mockMilestones[1]
},
{
  id: 'pay-3',
  projectId: 'proj-1',
  milestoneId: 'mil-3',
  amount: 5500,
  status: 'held',
  date: '2023-10-18T00:00:00Z',
  project: mockProjects[0],
  milestone: mockMilestones[2]
}];