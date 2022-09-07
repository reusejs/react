import React from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";

export interface SectionContainerBaseProps {
  children: React.ReactNode,
  sectionContainerBaseClasses?: {
    outerContainerStyles?: any;
    innerContainerStyles?: string;
  }
}

const SectionContainerBase = (props: SectionContainerBaseProps) => {
  const theme: any = useThemeContext();

  const outerContainerWrapper = resolvedStyleProps(
    "sectionContainerBaseClasses",
    ["outerContainerStyles"],
    props,
    theme
  );

  const innerContainerWrapper = resolvedStyleProps(
    "sectionContainerBaseClasses",
    ["innerContainerStyles"],
    props,
    theme
  );

  return (
    <div className={outerContainerWrapper}>
      <div className={innerContainerWrapper}>
        {props.children}
      </div>
    </div>
  );
};

export default SectionContainerBase;
