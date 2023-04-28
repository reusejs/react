import React from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";

export interface ButtonBaseProps {
  label: React.ReactNode;
  type?: "submit" | "reset" | "button";
  disabled?: false | true | boolean;
  busy?: boolean;
  busyText?: any;
  buttonStyles?: any;
  variant?: string;
  buttonSuffix?: any;
  buttonPrefix?: any;
  buttonBaseClasses?: {
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
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const ButtonBase = (props: ButtonBaseProps) => {
  const theme: any = useThemeContext();

  const finalClassNames = resolvedStyleProps(
    "buttonBaseClasses",
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

  return (
    <button
      type={props.type}
      className={finalClassNames}
      style={props.buttonStyles}
      onClick={props.onClick}
      disabled={props.disabled || props.busy}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    >
      {props.buttonPrefix && props.buttonPrefix}
      {props.busy && <>{props.busyText}</>}
      {!props.busy && props.label}
      {props.buttonSuffix && props.buttonSuffix}
    </button>
  );
};

export default ButtonBase;
