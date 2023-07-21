import { useEffect } from 'react';
const useScript = (url, container) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    container.current.appendChild(script);
  }, [url]);
};
export default useScript;
