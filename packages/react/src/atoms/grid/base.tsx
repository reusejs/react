import React, { ReactNode } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import {
  GridBaseClasses,
} from "../../interfaces/interfaces";

export interface GridBaseProps {
  content: JSX.Element[] | React.FC[] | string[];
  variant?: string;
  gridBaseClasses?: GridBaseClasses;
}

const GridBase = (props: GridBaseProps) => {
  const theme = useThemeContext();

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
      <div className={gridClassName}>
        {props.content.map((content, index) => {
          return <div key={index}>{content as ReactNode}</div>;
        })}
      </div>
    </>
  );
};

export default GridBase;
