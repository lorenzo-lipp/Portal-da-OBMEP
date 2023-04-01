import { useEffect } from "react";
import useQuery from "/src/hooks/useQuery";

export default function ScrollToTop() {
  const query = useQuery();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [query]);

  return null;
}