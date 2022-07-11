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
      badge={{
        badgeColor: "bg-green-100 text-green-800",
        badgeFont: "text-sm font-medium",
        badgeBorderRadius: "rounded-md",
      }}
    />
  );
};

export default BadgeGreen;
