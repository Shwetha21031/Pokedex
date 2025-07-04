import { useEffect, useState } from "react";

export const useMultipleFetch = <T= any,>(urls: string[]) => {
  const [data, setData] = useState<T[]>([]);
  const [err, setErr] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchAll = async () => {
      try {
        setIsLoading(true);
        const responses = await Promise.all(
          urls.map((url) =>
            fetch(url).then((res) => {
              if (!res.ok) throw new Error(`Failed to fetch ${url}`);
              return res.json();
            })
          )
        );
        if (isMounted) {
          setData(responses);
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

    fetchAll();

    return () => {
      isMounted = false;
    };
  }, [urls]);

  return { data, err, isLoading };
};
