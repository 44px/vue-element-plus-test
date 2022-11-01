const APP_PREFIX = "rm";

export const getKey = (key: string) => `${APP_PREFIX}:${key}`;

export const getItemStorage = <Type>(key: string, defaultValue: Type) => {
  const prefixedKey = getKey(key);

  const get = (): Type => {
    const serializedValue = localStorage.getItem(prefixedKey);

    return serializedValue ? JSON.parse(serializedValue) : defaultValue;
  };

  const set = (value: Type) => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  };

  return { get, set };
};
