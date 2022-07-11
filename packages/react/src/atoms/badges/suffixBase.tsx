import React, { ReactNode } from "react";
import "../../../tailwind.css";
import BadgeBase from "./base";

export interface BadgeSuffixBaseProps {
  label: string;
  badgeStyles?: any;
  badge: {};
}

const BadgeSuffixBase = (props: BadgeSuffixBaseProps) => {
  return (
    <BadgeBase
      {...props}
      badgeClasses={{}}
      badgeSuffix={
        <svg
          className="ml-1.5 h-2 w-2 text-indigo-400"
          fill="currentColor"
          viewBox="0 0 8 8"
        >
          <circle cx={4} cy={4} r={3} />
        </svg>
      }
    />
  );
};

export default BadgeSuffixBase;
