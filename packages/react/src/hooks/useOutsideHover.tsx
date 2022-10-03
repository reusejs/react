import React from "react";

export default function useOutsideHover(callback: () => void) {
  const visRef = React.useRef<any>(null);

  const handleClickOutside = (event: { target: any }) => {
    if (visRef.current && !visRef.current?.contains(event.target)) {
      callback();
    }
  };

  React.useEffect(() => {
    if (document !== undefined) {
      document.addEventListener("mousemove", handleClickOutside, true);
    }
    return () => {
      if (document !== undefined) {
        document.removeEventListener("mousemove", handleClickOutside, true);
      }
    };
  });

  return visRef;
}
