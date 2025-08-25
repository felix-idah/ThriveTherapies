import { z, ZodType, ZodError } from "zod";

const zodErrorToString = (error: ZodError): string => {
  return error.issues
    .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
    .join(", ");
};

const validateData = <T extends ZodType<any>>(config: unknown, schema: T): z.infer<T> => {
  const parsedConfig = schema.safeParse(config);

  if (!parsedConfig.success) {
    const errorMsg = `Zod validation error: ${zodErrorToString(parsedConfig.error)}`;
    console.error(errorMsg);
    throw new Error(errorMsg);
  }

  return parsedConfig.data;
};

export { zodErrorToString, validateData };
