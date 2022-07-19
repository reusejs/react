import React, { ReactNode } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedDividerClassName from "../../utils/resolveDividerClassName";
import resolvedStyleProps from "../../utils/resolvedStyleProps";

export interface DividerBaseProps {
  //String which will be displayed as divider text
  label: string;
  //To create Varient of the Divider
  variant?: string;
  //Pass True if you want to display the label at the right of the divider
  showAsSuffix?: boolean;
  //Pass True if you want to display the label at the left of the divider
  showAsPrefix?: boolean;
  dividerBaseClasses?: {
    //Margin for Label between the label
    labelMargin?: any;
    //Text color for label
    textColor?: any;
  };
}

const DividerBase= (props:DividerBaseProps) => {
  const theme: any = useThemeContext();

  const dividerClassName = resolvedDividerClassName(props);

  const finalClassNames = resolvedStyleProps(
    "dividerBaseClasses",
    [
      "labelMargin",
      "textColor"
    ],
    props,
    theme
  );

  
  return (
    <div className={dividerClassName}>
      <p className={finalClassNames}>{props.label}</p>
    </div>
  ) 
};

export default DividerBase;
