import React from "react";

export default function useOutsideClicker(callback: () => void) {
  const visRef = React.useRef<any>(null);

  const handleClickOutside = (event: { target: any }) => {
    if (visRef.current && !visRef.current?.contains(event.target)) {
      callback();
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return visRef;
}
