import React, { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setData(undefined);
    setIsLoading(true);
    setIsError(false);
    const controller = new AbortController();

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((res) => setData(res))
      .catch((err) => {
        if (err?.name === "AbortError") return;
        setIsError(true);
      })
      .finally(() => {
        if (controller.signal.aborted) return;
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isLoading, isError };
};
