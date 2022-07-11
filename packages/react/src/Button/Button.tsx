import React, { ReactNode } from "react";
import { useThemeContext } from "../theme/ThemeProvider";

export interface ButtonProps {
  children?: ReactNode;
}

const Button = () => {
  const theme = useThemeContext();

  // console.log("theme", theme);

  return (
    <button className="rounded-md bg-green-800 p-2 text-green-100">
      I SHOULD BE HERE 1
    </button>
  );
};

export default Button;
