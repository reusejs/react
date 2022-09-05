import React from "react";
import { ArrowProps } from "./types";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";

//{ left = false, children, onClick }
const Arrow = (props: ArrowProps) => {
  const theme = useThemeContext();
  console.log("###Props in arrows are>>>>", props);
  console.log("Arro style classes are>>>", props.baseArrowStyleProps);


  const baseArrowClassName = resolvedStyleProps(
    "baseArrowClasses",
    ["position", "size", "backgroundColor","borderRadius","cursor","textStyle"],
    props,
    theme
  );

  const positionLeft =resolvedStyleProps(
    "baseArrowClasses",
    ["left"],
    props,
    theme
  );

  const positionRight = resolvedStyleProps(
    "baseArrowClasses",
    ["right"],
    props,
    theme
  );

  return (
    <div
      onClick={props.onClick}
      className={baseArrowClassName + (props.left ? " "+positionLeft : " "+positionRight)}
    >
      {props.children}
    </div>
  );
};

export default Arrow;
