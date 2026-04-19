export type Role = 'employer' | 'contractor';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
  location?: string;
  joinedAt: string;
}

export interface ContractorProfile extends User {
  role: 'contractor';
  title: string;
  bio: string;
  trades: string[];
  experienceYears: number;
  hourlyRate: number;
  rating: number;
  reviewCount: number;
  certifications: string[];
  portfolioImages: string[];
  availability: 'available' | 'busy' | 'unavailable';
}

export interface EmployerProfile extends User {
  role: 'employer';
  companyName?: string;
  totalSpent: number;
  jobsPosted: number;
  rating: number;
}

export type JobStatus = 'open' | 'in-progress' | 'completed' | 'cancelled';
export type Urgency = 'low' | 'medium' | 'high' | 'emergency';

export interface Job {
  id: string;
  employerId: string;
  title: string;
  description: string;
  trade: string;
  budgetMin: number;
  budgetMax: number;
  location: string;
  status: JobStatus;
  urgency: Urgency;
  postedAt: string;
  bidsCount: number;
  requiredCertifications: string[];
  employer?: EmployerProfile;
}

export type BidStatus = 'pending' | 'accepted' | 'declined' | 'countered';

export interface Bid {
  id: string;
  jobId: string;
  contractorId: string;
  amount: number;
  estimatedDays: number;
  coverLetter: string;
  status: BidStatus;
  submittedAt: string;
  contractor?: ContractorProfile;
  job?: Job;
}

export interface Project {
  id: string;
  jobId: string;
  employerId: string;
  contractorId: string;
  status: 'active' | 'completed' | 'on-hold';
  startDate: string;
  endDate?: string;
  totalAmount: number;
  amountPaid: number;
  job?: Job;
  contractor?: ContractorProfile;
  employer?: EmployerProfile;
}

export interface Milestone {
  id: string;
  projectId: string;
  title: string;
  description: string;
  amount: number;
  status: 'pending' | 'in-progress' | 'completed' | 'approved';
  dueDate: string;
  completedDate?: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  read: boolean;
  attachments?: string[];
}

export interface Conversation {
  id: string;
  participants: string[];
  lastMessage: Message;
  unreadCount: number;
  job?: Job;
}

export interface Review {
  id: string;
  projectId: string;
  reviewerId: string;
  revieweeId: string;
  rating: number;
  comment: string;
  createdAt: string;
  reviewer?: User;
  reviewee?: User;
}

export interface Notification {
  id: string;
  userId: string;
  type: string;
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  link?: string;
}

export interface Payment {
  id: string;
  projectId: string;
  milestoneId: string;
  amount: number;
  status: 'held' | 'released' | 'pending';
  date: string;
  project?: Project;
  milestone?: Milestone;
}