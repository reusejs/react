import React, { ReactNode } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import classNames from "../../utils/classNames";

export interface BadgeBaseProps {
  label: string;
  badgeStyles?: any;
  badgeSuffix?: any;
  badgePrefix?: any;
  badgeClasses: {
    alignment?: any;
    padding?: any;
    color?: any;
    font?: any;
    borderRadius?: any;
  };
}

const BadgeBase = (props: BadgeBaseProps) => {
  const theme: any = useThemeContext();

  return (
    <span
      className={classNames(
        props.badgeClasses?.alignment || theme.badgeClasses.alignment,
        props.badgeClasses?.padding || theme.badgeClasses.padding,
        props.badgeClasses?.color || theme.badgeClasses.color,
        props.badgeClasses?.font || theme.badgeClasses.font,
        props.badgeClasses?.borderRadius || theme.badgeClasses.borderRadius
      )}
      style={props.badgeStyles}
    >
      {props.badgePrefix && props.badgePrefix}
      {props.label}
      {props.badgeSuffix && props.badgeSuffix}
    </span>
  );
};

export default BadgeBase;
