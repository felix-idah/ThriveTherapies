import { DEFAULT_METADATA, PAGE_METADATA, titleSeparator } from '@/constants/metadata';
import { CONFIG_CLIENT } from '@/config/client';

import type { PageMetadataKey } from '@/constants/metadata';
// import { getOpenGraphImagePath } from '@/libs/api/open-graph/image-path';

import type { Metadata } from '@/types/common';

// can't import getDefaultOpenGraphImagePath here, circular dependency

const { SITE_NAME } = CONFIG_CLIENT;

export const getPageMetadata = (path: PageMetadataKey): Metadata => {
  // const image = getOpenGraphImagePath(path);
  const image = '';
  const metadata: Metadata = { ...PAGE_METADATA[path], image };

  return metadata;
};

export const handleTitle = (metadata: Metadata): Metadata => {
  const { title: passedTitle } = metadata;
  const { title: defaultTitle } = DEFAULT_METADATA;

  const newMetadata = {
    ...metadata,
    title: passedTitle ? `${passedTitle} ${titleSeparator} ${SITE_NAME}` : defaultTitle,
  };

  return newMetadata;
};
