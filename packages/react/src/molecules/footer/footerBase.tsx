import React from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";

export interface FooterBaseProps {
  leftContent?: any;
  rightContent?: any;
  variant?: string;
  footerBaseCalsses?: {
    alignment?: any;
    padding?: any;
    backgroundColor?: any;
    width?: any;
  };
}

const FooterBase = (props: FooterBaseProps) => {
  const theme: any = useThemeContext();

  const finalClassNames = resolvedStyleProps(
    "footerBaseCalsses",
    ["width", "alignment", "padding", "backgroundColor"],
    props,
    theme
  );

  return (
    <footer className={finalClassNames}>
      {props.leftContent}
      {props.rightContent}
    </footer>
  );
};

export default FooterBase;
