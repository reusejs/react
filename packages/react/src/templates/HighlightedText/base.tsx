import React from "react";
import { useThemeContext } from "../../theme/ThemeProvider";
import Highlighter from "./Highlighter";

export interface HighlightedTextInterface {
  children: React.ReactNode;
  highlightedTextBaseClasses: {
    color?: string;
    width?: number;
    height?: number;
    margin?: string;
    top?: string;
    scale?: string;
  };
}

const HighlightedText = (props: HighlightedTextInterface) => {

  return (
    <div
      className={
        "relative flex justify-center " +
        props?.highlightedTextBaseClasses?.margin
      }
    >
      <Highlighter
        top={props?.highlightedTextBaseClasses?.top || "top-[-7px]"}
        width={props?.highlightedTextBaseClasses?.width || 200}
        height={props?.highlightedTextBaseClasses?.height || 50}
        color={props?.highlightedTextBaseClasses?.color || "text-orange-500"}
        scale={props?.highlightedTextBaseClasses?.scale || ""}
      />
      {props.children}
    </div>
  );
};

export default HighlightedText;
