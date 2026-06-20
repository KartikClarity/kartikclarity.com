export interface User {
  id: string;
  email: string;
  name: string;
  company?: string;
  role?: string;
  avatar?: string;
  createdAt: string;
  subscription?: Subscription;
}

export interface Subscription {
  plan: 'free' | 'starter' | 'professional' | 'enterprise';
  status: 'active' | 'cancelled' | 'past_due';
  currentPeriodEnd: string;
  cancelAtPeriodEnd: boolean;
}

export interface RevenueScan {
  id: string;
  userId: string;
  createdAt: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  score: number;
  insights: Insight[];
  recommendations: Recommendation[];
  websiteUrl?: string;
  industry?: string;
  revenue?: string;
}

export interface Insight {
  id: string;
  category: 'revenue_leak' | 'positioning' | 'offer' | 'outbound' | 'conversion' | 'pricing' | 'trust';
  severity: 'critical' | 'high' | 'medium' | 'low';
  title: string;
  description: string;
  impact: string;
  currentState: string;
  idealState: string;
}

export interface Recommendation {
  id: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  title: string;
  description: string;
  expectedImpact: string;
  effort: 'low' | 'medium' | 'high';
  category: string;
  actionItems: string[];
}

export interface DashboardMetrics {
  revenueScore: number;
  pipelineHealth: number;
  leadQuality: number;
  revenueLeakScore: number;
  opportunityScore: number;
  weeklyTrend: number;
  monthlyTrend: number;
}

export interface OnboardingData {
  company: string;
  website: string;
  industry: string;
  revenue: string;
  teamSize: string;
  mainChallenge: string;
  goals: string[];
}
