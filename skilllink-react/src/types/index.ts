export interface Artisan {
  id: number;
  name: string;
  skill: string;
  experience: string;
  location: string;
  rating: number;
  availability: string;
  projects: number;
  match: number;
  color: string;
  bio: string;
  skills: string[];
  languages: string[];
  certificates: string[];
  portfolio: string[];
  reviews: { name: string; rating: number; text: string }[];
}

export interface Requirement {
  id: number;
  title: string;
  type: string;
  location: string;
  status: 'Draft' | 'AI matching' | 'Published';
  daysLeft?: number;
  apps?: number;
}

export interface Application {
  id: number;
  artisan: Artisan;
  skill: string;
  experience: string;
  match: number;
  rating: number;
  date: string;
  status: 'New' | 'Shortlisted' | 'Rejected' | 'Accepted';
}

export interface MessageThread {
  id: number;
  name: string;
  color: string;
  last: string;
  time: string;
  messages: { from: string; text: string; time: string }[];
}

export interface Notification {
  id: number;
  text: string;
  time: string;
  read: boolean;
}

export interface Milestone {
  name: string;
  done: boolean;
  amount: number;
}

export interface Project {
  id: number;
  name: string;
  artisan: Artisan;
  budget: number;
  startDate: string;
  deadline: string;
  progress: number;
  status: 'In Progress' | 'Completed' | 'Assigned';
  milestones: Milestone[];
  updates: { text: string; time: string }[];
}

export type Page = 
  | "landing"
  | "login"
  | "manufacturer-dashboard"
  | "artisan-dashboard"
  | "admin-dashboard"
  | "aimatches"
  | "artisan-profile"
  | "project-tracking"
  | "feed"
  | "requirements"
  | "applications"
  | "projects"
  | "messages"
  | "payments"
  | "reviews"
  | "notifications"
  | "settings"
  | "profile";