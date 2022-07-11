import React, { ReactNode } from "react";
import "../../../tailwind.css";
import BadgeBase from "./base";

export interface BadgeGreenProps {
  label: string;
  badgeStyles?: any;
  badge: {};
}

const BadgeGreen = (props: BadgeGreenProps) => {
  return (
    <BadgeBase
      {...props}
      badgeClasses={{
        color: "bg-green-100 text-green-800",
        font: "text-sm font-medium",
        borderRadius: "rounded-md",
      }}
    />
  );
};

export default BadgeGreen;
