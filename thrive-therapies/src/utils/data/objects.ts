/**
 * @description filter undefined values from an object
 * @returns {T} object with undefined values removed
 */
const filterUndefined = <T extends object>(obj: T): T => {
  const result = {} as T;
  for (const [key, value] of Object.entries(obj)) {
    if (value !== undefined) {
      (result as Record<string, unknown>)[key] = value;
    }
  }
  return result;
};

export { filterUndefined };
