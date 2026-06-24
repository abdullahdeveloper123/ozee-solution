export type PageRoute = 'home' | 'about-us' | 'services' | 'blog' | 'privacy-policy' | 'contact-us' | 'terms-of-use' | 'quantity-takeoff' | 'detailed-estimation' | 'mep-hvac-estimation' | 'bim-3d-modeling' | 'tender-bid-estimates';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  tag: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
