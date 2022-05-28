import { isObject } from "util";

export const upperToLowerCase = (data: Object | any): any => {
  if (Array.isArray(data)) {
    return data.map((item) => upperToLowerCase(item));
  }
  if (isObject(data)) {
    return Object.keys(data).reduce((prev, key) => {
      let value = data[key];

      if (isObject(value) || Array.isArray(value)) {
        value = upperToLowerCase(value);
      }

      return { ...prev, [key[0].toLocaleLowerCase() + key.slice(1)]: value };
    }, {});
  }
  return data;
};
