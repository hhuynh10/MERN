import React, { useState, useCallback } from "react";

export const useArray = (INITIAL_ARRAY) => {
  const [array, setArray] = useState([INITIAL_ARRAY]);

  const set = useCallback((arr) => {
    setArray(arr);
  }, []);

  const push = useCallback((arg) => {
    setArray((currentVal) => {
      return [...currentVal, arg];
    });
  }, []);

  const replace = useCallback(
    (indx, arg) => [
      setArray((currentVal) => {
        return [
          ...currentVal.slice(0, indx),
          arg,
          ...currentVal.slice(indx + 1),
        ];
      }),
    ],
    []
  );

  const filter = useCallback((arg) => {
    setArray((currentVal) => {
      return currentVal.filter((el) => el < arg);
    });
  }, []);

  const remove = useCallback((indx) => {
    setArray((currentVal) => {
      return [...currentVal.slice(0, indx), ...currentVal.slice(indx + 1)];
    });
  }, []);

  const clear = useCallback(() => {
    setArray([]);
  }, []);

  const reset = useCallback(() => {
    setArray(INITIAL_ARRAY);
  }, []);

  return { array, set, push, replace, filter, remove, clear, reset };
};
