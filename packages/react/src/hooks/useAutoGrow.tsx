import React, { useEffect } from "react";

export default function (
  onChange: any,
  value = "",
  autoGrow: boolean | undefined,
  textareaRef: any
) {
  useEffect(() => {
    if (autoGrow === true) {
      autoReziseTextarea();
    }
  }, [value]);

  const autoReziseTextarea = () => {
    textareaRef.current.style.height = "20px";
    textareaRef.current.style.overflowY = "hidden";
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + "px";
  };

  const handleChange = (e: any) => {
    if (autoGrow === true) {
      autoReziseTextarea();
    }

    onChange(e);
  };

  return { handleChange };
}
