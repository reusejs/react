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
  labelAlign?: "left" | "right" | undefined;
  dividerBaseClasses?: {
    color?: string;
    height?: string;
  };
}

const DividerBase = (props: DividerBaseProps) => {
  const theme: any = useThemeContext();

  const finalDividerClasses = resolvedStyleProps(
    "dividerBaseClasses",
    ["color", "height"],
    props,
    theme
  );

  return (
    <div className="flex items-center justify-center">
      {props?.labelAlign === "left" ? null : (
        <div className={finalDividerClasses}>{""}</div>
      )}
      {props.labelBaseProps !== undefined && (
        <LabelBase {...props.labelBaseProps} />
      )}
      {props.label !== undefined && props?.labelBaseProps === undefined && (
        <p className="mx-2">{props?.label}</p>
      )}
      {props?.labelAlign === "right" ? null : (
        <div className={finalDividerClasses}>{""}</div>
      )}
    </div>
  );
};

export default DividerBase;
