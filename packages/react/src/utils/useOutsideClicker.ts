import { useEffect, useRef } from "react";

export default function useOutsideClicker(callback: () => void) {
  const visRef = useRef<HTMLInputElement>(null);

  const handleClickOutside = (event: { target: any }) => {
    if (visRef.current && !visRef.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return visRef;
}
