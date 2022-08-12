import React, { ReactNode } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import LabelBase from "../labels/base";
import {
  LabelBaseProps,
  GridBaseClasses,
} from "../../../../interfaces/intefaces";

export interface GridBaseProps {
  content: JSX.Element[] | React.FC[] | string[];
  variant?: string;
  labelBaseProps?: LabelBaseProps;
  gridBaseClasses?: GridBaseClasses;
}

const GridBase = (props: GridBaseProps) => {
  const theme: any = useThemeContext();

  const gridClassName = resolvedStyleProps(
    "gridBaseClasses",
    [
      "gap",
      "grid",
      "size",
      "border",
      "margin",
      "columns",
      "padding",
      "alignment",
      "backgroundColor",
    ],
    props,
    theme
  );

  return (
    <>
      {props.labelBaseProps && <LabelBase {...props.labelBaseProps} />}
      <div className={gridClassName}>
        {props.content.map((content, index) => {
          return <div key={index}>{content as ReactNode}</div>;
        })}
      </div>
    </>
  );
};

export default GridBase;
