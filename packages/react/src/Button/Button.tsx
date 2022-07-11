import React, { ReactNode } from "react";
import "../../tailwind.css";
import { useThemeContext } from "../utils/ThemeProvider";

export interface ButtonProps {
  children?: ReactNode;
}

const Button = () => {
  const theme = useThemeContext();

  console.log("theme", theme);

  return (
    <button className="bg-green-800 text-green-100 p-2 rounded-md">
      I SHOULD BE HERE 1
    </button>
  );
};

export default Button;
