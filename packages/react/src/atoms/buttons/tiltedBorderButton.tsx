import React from "react";
import ButtonBase, { ButtonBaseProps } from "./base";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";

export interface TiltedBorderButtonProps extends ButtonBaseProps {
  tiltedBorderButtonBaseClasses?: {
    layout?: string;
    zIndex?: string;
    borderWidth?: string;
    rotation?: string;
    borderColor?: string;
    scale?: string;
  };
}

const TiltedBorderButton = (props: TiltedBorderButtonProps) => {
  const theme: any = useThemeContext();

  const inheritedStyles: string = resolvedStyleProps(
    "buttonBaseClasses",
    ["borderRadius"],
    props,
    theme
  );

  const classNameValue: string = resolvedStyleProps(
    "tiltedBorderButtonBaseClasses",
    ["layout", "zIndex", "borderWidth", "rotation", "borderColor", "scale"],
    props,
    theme
  );

  const buttonPrefix: JSX.Element = (
    <>
      <div className={classNameValue + " " + inheritedStyles}></div>
      {props?.buttonPrefix && props.buttonPrefix}
    </>
  );

  const tiltedBorderButton: JSX.Element = (
    <ButtonBase
      {...props}
      buttonPrefix={buttonPrefix}
      buttonBaseClasses={{
        alignment: "relative inline-flex justify-center items-center",
        ...props?.buttonBaseClasses,
      }}
    />
  );

  return tiltedBorderButton;
};

export default TiltedBorderButton;
