import React, { ReactNode } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";

export interface LabelBaseProps {
  label: string;
  htmlFor: string;
  labelStyles?: any;
  variant?: string;
  labelClasses?: {
    alignment?: any;
    color?: any;
    font?: any;
  };
}

const LabelBase = (props: LabelBaseProps) => {
  const theme: any = useThemeContext();

  const finalClassNames = resolvedStyleProps(
    "labelClasses",
    ["alignment", "color", "font"],
    props,
    theme
  );

  return (
    <label
      htmlFor={props.htmlFor}
      className={finalClassNames}
      style={props.labelStyles}
    >
      {props.label}
    </label>
  );
};

export default LabelBase;
