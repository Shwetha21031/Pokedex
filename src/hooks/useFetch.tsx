import { useEffect, useState } from "react";

export const useFetch = <T=any,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [err, setErr] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const json = await res.json();
          if (isMounted) {
        console.log(json)
          setData(json);
        }
      } catch (e: any) {
        if (isMounted) {
          setErr(e);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, err, isLoading };
};
