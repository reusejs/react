import React, { ReactNode } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import classNames from "../../utils/classNames";

export interface SectionHeaderBaseProps {
  textAlign?: string;
  title?: any;
  subTitle?: any;
  actions?: any;
  horizontalPadding?: string;
  verticalPadding?: string;
  backgroundClasses?: string;
  widthClasses?: string;
}

const SectionHeaderBase = (props: SectionHeaderBaseProps) => {
  const backgroundClasses = props.backgroundClasses || "bg-gray-50";
  const widthClasses =
    props.widthClasses ||
    "mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8";

  const textAlign = props.textAlign ? `text-${props.textAlign}` : "text-center";

  return (
    <div className={backgroundClasses}>
      <div className={classNames(widthClasses, textAlign)}>
        {props.title}

        {props.subTitle}
      </div>
    </div>
  );
};

export default SectionHeaderBase;
