import React, { ReactNode } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";

const LabelBase = () => {
  const theme = useThemeContext();
  return (
    <label htmlFor="email" className="block text-sm font-medium text-red-700">
      Email
    </label>
  );
};

export default LabelBase;
