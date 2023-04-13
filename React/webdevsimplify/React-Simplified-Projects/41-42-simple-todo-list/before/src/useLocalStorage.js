import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialVal) => {
  const [value, setValue] = useState(() => {
    const localValue = localStorage.getItem(key);
    if (localValue === null) {
      if (typeof initialVal === "function") {
        return initialVal();
      } else {
        return initialVal;
      }
    } else {
      return JSON.parse(localValue);
    }
  });

  useEffect(() => {
    if (value === undefined) {
      localStorage.removeItem(key);
    } else {
      return localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
};
