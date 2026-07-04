export interface Package {
  id: string;
  name: string;
  price: number;
  unit: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  accentColor?: string;
  badge?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string; // Refers to lucide-react icons
}

export interface Step {
  stepNumber: string;
  title: string;
  description: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  avatarUrl: string;
  text: string;
}

export interface BookingDetails {
  name: string;
  whatsapp: string;
  packageName: string;
  quantity: number;
  durationDays: number;
  eventDate: string;
  notes: string;
}
