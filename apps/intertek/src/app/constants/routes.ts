export const ROUTES = {
  HOME: '/',
  GALLERY: '/gallery',
  SERVICES: '/services',
  CODE_OF_PRACTICE: '/code-of-practice',
  CONTACT: '/contact',
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
