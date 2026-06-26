export const ROUTES = {
  HOME: '/',
  GALLERY: '/gallery',
  SERVICES: '/services',
  ABOUT: '/about',
  CONTACT: '/contact',
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
