import React, { useRef, useEffect, useState } from "react";

function useMounted() {
  const [mounted, setMounted] = useState(false);
  const isMountedRef = useRef<any>(null);

  useEffect((): any => {
    isMountedRef.current = true;
    setMounted(true);
    return () => (isMountedRef.current = false);
  }, []);

  return { mounted, isMountedRef };
}

export default useMounted;
