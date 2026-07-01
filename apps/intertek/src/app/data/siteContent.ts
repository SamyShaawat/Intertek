export type ServiceCategory =
  | 'Registration'
  | 'Crew'
  | 'Consultancy'
  | 'Safety'
  | 'Surveys'
  | 'Inspections';

export interface Service {
  title: string;
  category: ServiceCategory;
}

export interface Subsidiary {
  name: string;
  logo: string;
  tagline: string;
  description: string;
  image?: string;
}

export interface Office {
  label: string;
  city: string;
  country: string;
  address: string;
  email: string;
  logo?: string;
}

export interface HeroMetric {
  value: string;
  label: string;
}

export const services: Service[] = [
  { title: "Ships' Registration", category: 'Registration' },
  { title: "Offshore Corporates' Registration", category: 'Registration' },
  { title: 'Mortgages Registration', category: 'Registration' },
  { title: 'Crew Documentation & Endorsement', category: 'Crew' },
  { title: 'Class H&M Services & Consultancy', category: 'Consultancy' },
  { title: 'Statutory Services & Consultancy', category: 'Consultancy' },
  { title: 'Naval Architecture & Consultancy', category: 'Consultancy' },
  { title: 'ISM & ISPS Services and Consultancy', category: 'Safety' },
  { title: 'Third Party Marine Surveys', category: 'Surveys' },
  { title: 'Pre/Post-PSC Inspections', category: 'Inspections' },
  { title: 'Incident & Near-Miss Response Attendance', category: 'Inspections' },
  { title: 'MLC Crew Welfare Inspections', category: 'Crew' },
];

export const subsidiaries: Subsidiary[] = [
  {
    name: 'Legal Marine Tek',
    logo: '/img/branding/legal-marine-tek-logo.png',
    tagline: 'Top-Five maritime law firm in Panama',
    description: 'Ships and corporates registration, plus crew endorsements for complex ownership structures.',
  },
  {
    name: 'Intertek Maritime Bureau',
    logo: '/img/branding/itmb-logo.png',
    tagline: 'Class, statutory, and naval architecture',
    description: 'Survey, class, and technical support across vessel types, ports, and operating regimes.',
  },
  {
    name: 'Intertek Maritime Middle East',
    logo: '/img/branding/intertek-maritime-logo.png',
    tagline: 'ISM, ISPS, NAVCOM, and GMDSS',
    description: 'Operational safety, third-party surveys, and compliance support across the region.',
    image: '/img/branding/marine-inspection-020.jpeg',
  },
];

export const offices: Office[] = [
  {
    label: 'Head Office',
    city: 'Panama City',
    country: 'Panama',
    address: 'Calle 56 Marbella, Panama City',
    email: 'legal@intertekgroup.org',
    logo: '/img/branding/legal-marine-tek-logo.png',
  },
  {
    label: 'North America',
    city: 'Mississauga',
    country: 'Canada',
    address: '2386 Poplar Cres, L5J4H3, Mississauga, Ontario',
    email: 'aimy@intertekgroup.org',
    logo: '/img/branding/itmb-logo.png',
  },
  {
    label: 'Middle East',
    city: 'Dubai',
    country: 'UAE',
    address: 'Mohammad bin Rashid Bldg, Mamzar, Dubai',
    email: 'aimy@intertekgroup.org',
    logo: '/img/branding/intertek-maritime-logo.png',
  },
];

export const markets = [
  'Deepsea shipping',
  'Offshore vessels, tugs, and workboats',
  'Government and port authorities',
  'Fishing boats and pleasure yachts',
];

export const locations = ['Panama', 'Canada', 'UAE', 'Turkey', 'Italy', 'Egypt', 'Syria', 'Belgium', 'Algeria', 'Lebanon', 'KSA'];

export const heroMetrics: HeroMetric[] = [
  { value: '2006', label: 'Founded in Panama' },
  { value: '3', label: 'Specialized entities' },
  { value: '24/7', label: 'Global response' },
];

// ponytail: keep the source data lean; images were removed from the simplified pages.
