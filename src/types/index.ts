export interface User {
  id: string;
  name: string;
  email: string;
  company: string;
  plan: 'starter' | 'pro' | 'enterprise';
  avatarUrl?: string;
}

export interface UploadedFile {
  id: string;
  fileName: string;
  fileSize: string;
  uploadDate: string;
  status: 'Processing' | 'Synced to Power BI' | 'Failed';
  type: 'Lead Data' | 'Ad Spend' | 'Property Details' | 'Other';
}

export interface Invoice {
  id: string;
  date: string;
  amount: string;
  status: 'Paid' | 'Pending' | 'Failed';
  description: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}
