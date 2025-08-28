import { ROUTES } from '@/constants/routes';

export const NAVIGATION_ITEMS = [
  {
    title: 'Tools',
    path: ROUTES.TOOLS,
  },
  {
    title: 'Services',
    path: ROUTES.SERVICES,
  },
  {
    title: 'Our Partners',
    path: ROUTES.OUR_PARTNERS,
  },
  {
    title: 'About Us',
    path: ROUTES.ABOUT,
  },
] as const;
