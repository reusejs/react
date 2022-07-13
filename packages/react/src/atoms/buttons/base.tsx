import React from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";

export interface ButtonBaseProps {
  label: string;
  type?: "submit" | "reset" | "button";
  disabled: false;
  busy: false;
  busyText?: any;
  buttonStyles?: any;
  variant?: string;
  buttonSuffix?: any;
  buttonPrefix?: any;
  buttonClasses: {
    alignment?: any;
    focus?: any;
    font?: any;
    backgroundColor?: any;
    textColor?: any;
    borderRadius?: any;
    padding?: any;
    border?: any;
    width?: any;
    disabledClasses?: any;
  };
  onClick: () => void;
}

const ButtonBase = (props: ButtonBaseProps) => {
  const theme: any = useThemeContext();

  const finalClassNames = resolvedStyleProps(
    "buttonClasses",
    [
      "alignment",
      "focus",
      "font",
      "backgroundColor",
      "textColor",
      "borderRadius",
      "padding",
      "border",
      "width",
      "disabledClasses",
    ],
    props,
    theme
  );

  console.log("finalClassNames", finalClassNames);

  return (
    <button
      type={props.type}
      className={finalClassNames}
      style={props.buttonStyles}
      onClick={props.onClick}
      disabled={props.disabled || props.busy}
    >
      {props.buttonPrefix && props.buttonPrefix}
      {props.busy && <>{props.busyText}</>}
      {!props.busy && props.label}
      {props.buttonSuffix && props.buttonSuffix}
    </button>
  );
};

export default ButtonBase;
