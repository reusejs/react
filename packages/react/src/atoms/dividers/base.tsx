import React, { ReactNode } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import LabelBase from "../labels/base";
import { LabelBaseProps } from "../labels/base";

export interface DividerBaseProps {
  variant?: string;
  label?: string;
  labelBaseProps?: LabelBaseProps;
  // dividerLabelClasses?: {
  //   margin?: string;
  //   color?: string;
  // };
  dividerBaseClasses?: {
    dividerColor?: string;
    dividerHeight?: string;
    labelAlign?: "left" | "right" | undefined;
  };
}

const DividerBase = (props: DividerBaseProps) => {
  const theme: any = useThemeContext();

  const finaldividerClass = resolvedStyleProps(
    "dividerBaseClasses",
    ["dividerColor", "dividerHeight"],
    props,
    theme
  );

  return (
    <div className="flex items-center justify-center">
      {props?.dividerBaseClasses?.labelAlign === "left" ? null : (
        <div className={finaldividerClass}>{""}</div>
      )}
      {props.labelBaseProps !== undefined && (
        <LabelBase {...props.labelBaseProps} />
      )}
      {props.label !== undefined && props?.labelBaseProps === undefined && (
        <p className="mx-2">{props?.label}</p>
      )}
      {props?.dividerBaseClasses?.labelAlign === "right" ? null : (
        <div className={finaldividerClass}>{""}</div>
      )}
    </div>
  );
};

export default DividerBase;
