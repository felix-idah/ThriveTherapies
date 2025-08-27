import { NAVIGATION_ITEMS } from '@/constants/navigation';
import { ROUTES } from '@/constants/routes';

import type { NavigationItem } from '@/types/constants';

export const getActiveNavItemPath = (routePathname: string): NavigationItem['path'] | undefined => {
  let activeNavItem: NavigationItem | undefined = undefined;

  // don't highlight home route

  switch (true) {
    case routePathname === ROUTES.ABOUT:
      activeNavItem = getNavItem(ROUTES.ABOUT);
      break;
    case routePathname === ROUTES.CONTACT:
      activeNavItem = getNavItem(ROUTES.CONTACT);
      break;
    case routePathname === ROUTES.JOIN_OUR_TEAM:
      activeNavItem = getNavItem(ROUTES.JOIN_OUR_TEAM);
      break;
    // unused
    case routePathname === ROUTES.FREE_TRIAL_FOR_INDIVIDUAL_PROVIDERS:
      activeNavItem = getNavItem(ROUTES.FREE_TRIAL_FOR_INDIVIDUAL_PROVIDERS);
      break;
    case routePathname.startsWith(ROUTES.RESULTS_DRIVEN_SERVICES):
      activeNavItem = getNavItem(ROUTES.RESULTS_DRIVEN_SERVICES);
      break;
    case routePathname.startsWith(ROUTES.INTELLIGENT_TOOLS):
      activeNavItem = getNavItem(ROUTES.INTELLIGENT_TOOLS);
      break;
    case routePathname.startsWith(ROUTES.SECURITY_COMPLIANCE):
      activeNavItem = getNavItem(ROUTES.SECURITY_COMPLIANCE);
      break;

    case routePathname.startsWith(ROUTES.COMPARE_TOOLS):
      activeNavItem = getNavItem(ROUTES.COMPARE_TOOLS);
      break;

    case routePathname.startsWith(ROUTES.PRODUCT_SUPPORT):
      activeNavItem = getNavItem(ROUTES.PRODUCT_SUPPORT);
      break;

    case routePathname.startsWith(ROUTES.ABOUT):
      activeNavItem = getNavItem(ROUTES.ABOUT);
      break;

    default:
      activeNavItem = undefined;
      break;
  }

  const activeNavItemPath = activeNavItem?.path;

  return activeNavItemPath;
};

export const getNavItem = (path: string): NavigationItem | undefined =>
  NAVIGATION_ITEMS.find((navItem) => navItem.path === path);
