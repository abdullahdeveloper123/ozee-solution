import type { PageRoute } from '@/types';

export const routePaths: Record<PageRoute, string> = {
  home: '/',
  'about-us': '/about-us',
  services: '/services',
  'quantity-takeoff': '/quantity-takeoff',
  'detailed-estimation': '/detailed-estimation',
  'mep-hvac-estimation': '/mep-hvac-estimation',
  'bim-3d-modeling': '/bim-3d-modeling',
  'tender-bid-estimates': '/tender-bid-estimates',
  blog: '/blog',
  'privacy-policy': '/privacy-policy',
  'terms-of-use': '/terms-of-use',
  'contact-us': '/contact-us',
};

export const routes = routePaths;
