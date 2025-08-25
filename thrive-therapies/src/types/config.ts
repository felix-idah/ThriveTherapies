import type { configClientSchema, configServerSchema, processEnvSchema } from '@/schemas/config';
import type { z } from 'zod';

type ConfigServerSchemaType = typeof configServerSchema;
type ConfigServerType = z.infer<ConfigServerSchemaType>;

type ConfigClientSchemaType = typeof configClientSchema;
type ConfigClientType = z.infer<ConfigClientSchemaType>;

type ProcessEnvSchemaType = typeof processEnvSchema;
type ProcessEnvType = z.infer<ProcessEnvSchemaType>;

export type {
  ConfigServerSchemaType,
  ConfigServerType,
  ConfigClientSchemaType,
  ConfigClientType,
  ProcessEnvSchemaType,
  ProcessEnvType,
};
