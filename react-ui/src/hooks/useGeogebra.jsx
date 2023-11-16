import { useEffect } from 'react';

export default function useGeogebra(callback) {
  useEffect(() => {
    const script = document.createElement('script');

    window.ggbOnInit = () => {};
    script.src = "https://www.geogebra.org/apps/deployggb.js";
    script.onload = callback;
    
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [callback]);
};