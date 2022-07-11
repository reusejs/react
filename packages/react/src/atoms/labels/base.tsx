import React, { ReactNode } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import classNames from "../../utils/classNames";

export interface LabelBaseProps {
  label: string;
  htmlFor: string;
  labelStyles?: any;
  labelClasses: {
    alignment?: any;
    color?: any;
    font?: any;
  };
}

const LabelBase = (props: LabelBaseProps) => {
  const theme: any = useThemeContext();
  return (
    <label
      htmlFor={props.htmlFor}
      className={classNames(
        props.labelClasses?.alignment || theme.labelClasses.alignment,
        props.labelClasses?.color || theme.labelClasses.color,
        props.labelClasses?.font || theme.labelClasses.font
      )}
      style={props.labelStyles}
    >
      {props.label}
    </label>
  );
};

export default LabelBase;
