import React from "react";
import "../../../../tailwind.css";
import { useThemeContext } from "../../../theme/ThemeProvider";
import resolvedStyleProps from "../../../utils/resolvedStyleProps";

export interface TwoColumnSectionBase {
  firstColumnEl: React.ReactNode,
  secondColumnEl: React.ReactNode,
  twoColumnSectionBaseClasses?: {
    columnsFlexWrapperStyles?: string;
    firstElWrapperStyles?: string;
    secondElWrapperStyles?: string;
  }
}

const TwoColumnSectionBase = (props: TwoColumnSectionBase) => {
  const theme: any = useThemeContext();

  const columnFlexStyles = resolvedStyleProps(
    "twoColumnSectionBaseClasses",
    ["columnsFlexWrapperStyles"],
    props,
    theme
  );

  const firstColumnFlexStyles = resolvedStyleProps(
    "twoColumnSectionBaseClasses",
    ["firstElWrapperStyles"],
    props,
    theme
  );

  const secondColumnFlexStyles = resolvedStyleProps(
    "twoColumnSectionBaseClasses",
    ["secondElWrapperStyles"],
    props,
    theme
  );

  return (
    <section>
      <div className={columnFlexStyles}>
          {props.firstColumnEl && (
            <div className={firstColumnFlexStyles}>
              {props.firstColumnEl}
            </div>
          )}

          {props.secondColumnEl && (
            <div className={secondColumnFlexStyles}>
              {props.secondColumnEl}
            </div>
          )}
      </div>
    </section>
  );
};

export default TwoColumnSectionBase;
