import React, { ReactNode } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import classNames from "../../utils/classNames";

export interface BadgeBaseProps {
  label: string;
  badgeStyles?: any;
  badgeSuffix?: any;
  badgePrefix?: any;
  badge: {
    badgeAlignment?: any;
    badgePadding?: any;
    badgeColor?: any;
    badgeFont?: any;
    badgeBorderRadius?: any;
  };
}

const BadgeBase = (props: BadgeBaseProps) => {
  const theme: any = useThemeContext();

  return (
    <span
      className={classNames(
        props.badge?.badgeAlignment || theme.badge.badgeAlignment,
        props.badge?.badgePadding || theme.badge.badgePadding,
        props.badge?.badgeColor || theme.badge.badgeColor,
        props.badge?.badgeFont || theme.badge.badgeFont,
        props.badge?.badgeBorderRadius || theme.badge.badgeBorderRadius
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
