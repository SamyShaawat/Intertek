import type { MosaicImage } from '../components/ImageMosaic';

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
}

export interface Office {
  label: string;
  city: string;
  country: string;
  address: string;
  email: string;
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
  },
];

export const offices: Office[] = [
  {
    label: 'Head Office',
    city: 'Panama City',
    country: 'Panama',
    address: 'Calle 56 Marbella, Panama City',
    email: 'legal@intertekgroup.org',
  },
  {
    label: 'North America',
    city: 'Mississauga',
    country: 'Canada',
    address: '2386 Poplar Cres, L5J4H3, Mississauga, Ontario',
    email: 'aimy@intertekgroup.org',
  },
  {
    label: 'Middle East',
    city: 'Dubai',
    country: 'UAE',
    address: 'Mohammad bin Rashid Bldg, Office 117, Mamzar, Dubai',
    email: 'aimy@intertekgroup.org',
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
  { value: '11', label: 'Surveyor countries' },
  { value: '24/7', label: 'Global response' },
];

// homeImages: field/port scenes — distinct from home hero (026) and filmstrip (002,004,007,009,012,016,022,031)
export const homeImages: MosaicImage[] = [
  { src: '/img/IG PHOTOS/marine-inspection-005.jpeg', alt: 'Marine inspection at port', label: 'Field work' },
  { src: '/img/IG PHOTOS/marine-inspection-008.jpg', alt: 'Vessel deck inspection', label: 'Deck work' },
  { src: '/img/IG PHOTOS/marine-inspection-032.jpeg', alt: 'Hull inspection work', label: 'Hull surveys' },
  { src: '/img/IG PHOTOS/marine-inspection-003.jpg', alt: 'Marine survey on deck', label: 'Survey' },
  { src: '/img/IG PHOTOS/marine-inspection-019.jpeg', alt: 'Inspection team at work', label: 'In the field' },
  { src: '/img/IG PHOTOS/marine-inspection-036.jpg', alt: 'Vessel lifted for inspection', label: 'Lift work' },
];

// servicesImages: technical/compliance work — distinct from services hero (030) and filmstrip
export const servicesImages: MosaicImage[] = [
  { src: '/img/IG PHOTOS/marine-inspection-010.jpg', alt: 'Inspection team on deck' },
  { src: '/img/IG PHOTOS/marine-inspection-038.jpg', alt: 'Surveyors at work on deck' },
  { src: '/img/IG PHOTOS/marine-inspection-029.jpeg', alt: 'Close inspection work' },
  { src: '/img/IG PHOTOS/marine-inspection-033.jpeg', alt: 'Technical inspection' },
  { src: '/img/IG PHOTOS/marine-inspection-034.jpeg', alt: 'Marine compliance check' },
  { src: '/img/IG PHOTOS/marine-inspection-035.jpeg', alt: 'Surveyor on vessel' },
];
