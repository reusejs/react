import React, { ReactNode } from "react";
import "../../tailwind.css";

export interface ButtonProps {
  children?: ReactNode;
}

export default ({ children }: ButtonProps) => (
  <button className="bg-blue-800 text-blue-100 p-2 rounded-md">
    I SHOULD BE HERE 3
  </button>
);
