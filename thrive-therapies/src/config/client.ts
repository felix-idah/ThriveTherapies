import { PLAUSIBLE_DOMAIN, PLAUSIBLE_SCRIPT_URL, SITE_URL } from 'astro:env/client';

import { configClientSchema } from '@/schemas/config';
import { validateData } from '@/utils/data/validation';

import type { ConfigClientType } from '@/types/config';

const configClientData: ConfigClientType = {
  /** all urls without '/' */
  SITE_URL,
  /** same for all environments, defined here, not env var */
  SITE_URL_CANONICAL: 'https://thrive-therapies.com',
  SITE_TITLE: 'Thrive Therapies',
  SITE_DESCRIPTION: 'Thrive Therapies is a platform for mental health and well-being',
  PLAUSIBLE_SCRIPT_URL,
  PLAUSIBLE_DOMAIN,
  SITE_NAME: 'Thrive Therapies',
  SITE_EMAIL: 'thrive.therapies@gmail.com',
  SITE_LINKEDIN: 'https://www.linkedin.com/in/thrive-therapies',
  SITE_TWITTER: 'https://x.com/thrive_therapies',
  SITE_YOUTUBE: 'https://www.youtube.com/@thrive_therapies',
};

export const CONFIG_CLIENT = validateData(configClientData, configClientSchema);