import React, { ReactNode } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";

export interface ScrollableBaseProps {
  children?: any;
  scrollableBaseClasses?:
    | {
        position?: any;
        maxHeight?: any;
        width?: any;
        borderRadius?: any;
        border?: any;
        background?: any;
        padding?: any;
      }
    | undefined;
}

const ScrollableBase = (props: ScrollableBaseProps) => {
  const theme: any = useThemeContext();

  const finalClassNames = resolvedStyleProps(
    "scrollableBaseClasses",
    [
      "position",
      "maxHeight",
      "width",
      "borderRadius",
      "border",
      "background",
      "padding",
    ],
    props,
    theme
  );

  return <div className={finalClassNames}>{props.children}</div>;
};

export default ScrollableBase;
