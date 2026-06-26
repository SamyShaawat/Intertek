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

export const serviceHighlights = [
  'Ships registration and mortgages',
  'Crew documentation and endorsement',
  'Class, statutory, and consultancy support',
  'ISM, ISPS, and compliance work',
  'Marine surveys and PSC inspections',
  'Incident and near-miss attendance',
];

export const homeImages: MosaicImage[] = [
  { src: '/img/IG PHOTOS/marine-inspection-005.jpeg', alt: 'Marine inspection at port', label: 'Field work' },
  { src: '/img/IG PHOTOS/marine-inspection-018.jpeg', alt: 'Deck inspection', label: 'Deck work' },
  { src: '/img/IG PHOTOS/marine-inspection-032.jpeg', alt: 'Hull inspection', label: 'Hull work' },
  { src: '/img/IG PHOTOS/marine-inspection-036.jpg', alt: 'Suspended boat inspection', label: 'Lift work' },
];

export const aboutImages: MosaicImage[] = [
  { src: '/img/IG PHOTOS/marine-inspection-001.jpeg', alt: 'Marine inspection' },
  { src: '/img/IG PHOTOS/marine-inspection-017.jpg', alt: 'Engine room inspection' },
  { src: '/img/IG PHOTOS/marine-inspection-021.jpeg', alt: 'Vessel inspection' },
  { src: '/img/IG PHOTOS/marine-inspection-037.jpeg', alt: 'Surveyor near hull' },
];

export const servicesImages: MosaicImage[] = [
  { src: '/img/IG PHOTOS/marine-inspection-010.jpg', alt: 'Inspection team on deck' },
  { src: '/img/IG PHOTOS/marine-inspection-026.jpg', alt: 'Intertek vessel branding' },
  { src: '/img/IG PHOTOS/marine-inspection-030.jpeg', alt: 'Bridge inspection' },
  { src: '/img/IG PHOTOS/marine-inspection-038.jpg', alt: 'Surveyors on deck' },
];
