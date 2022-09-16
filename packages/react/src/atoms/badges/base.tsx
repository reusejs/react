import React, { ReactNode } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";

export interface BadgeBaseProps {
  label: string;
  badgeStyles?: any;
  badgeSuffix?: any;
  badgePrefix?: any;
  variant?: string;
  badgeBaseClasses?: {
    alignment?: any;
    padding?: any;
    backgroundColor?: any;
    textColor?: any;
    font?: any;
    borderRadius?: any;
  };
}

const BadgeBase = (props: BadgeBaseProps) => {
  const theme: any = useThemeContext();

  const finalClassNames = resolvedStyleProps(
    "badgeBaseClasses",
    [
      "alignment",
      "padding",
      "backgroundColor",
      "textColor",
      "font",
      "borderRadius",
    ],
    props,
    theme
  );

  return (
    <span className={finalClassNames} style={props.badgeStyles}>
      {props.badgePrefix && props.badgePrefix}
      {props.label}
      {props.badgeSuffix && props.badgeSuffix}
    </span>
  );
};

export default BadgeBase;
