import React, { ReactNode } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import classNames from "../../utils/classNames";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import BadgeBaseProps from "./types";

const BadgeBase = (props: BadgeBaseProps) => {
  const theme: any = useThemeContext();

  const finalClassNames = resolvedStyleProps(
    "badgeClasses",
    ["alignment", "padding", "color", "font", "borderRadius"],
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
