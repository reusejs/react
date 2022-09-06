import React from "react";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import { useThemeContext } from "../../theme/ThemeProvider";

export interface CenteredGridInterface {
  sectionHeading?: any;
  sectionDescription?: any;
  sectionContentData?: any;
  centeredGridBaseClasses?: {
    backgroundColor?: string;
    verticalWrapperPadding?: string;
    horizontalMargin?: string;
    horizontalPadding?: string;
    width?: string;
    gridWrapper?: string;
    gridClasses?: string;
    sectionHeadingAlignmentClasses?: string;
  };
}

const CenteredGrid = (props: CenteredGridInterface) => {
  const theme: any = useThemeContext();

  const backgroundWrapperContainer = resolvedStyleProps(
    "centeredGridBaseClasses",
    ["backgroundColor", "verticalWrapperPadding"],
    props,
    theme
  );

  const innerContainer = resolvedStyleProps(
    "centeredGridBaseClasses",
    ["horizontalMargin", "horizontalPadding", "width"],
    props,
    theme
  );

  const gridWrapper = resolvedStyleProps(
    "centeredGridBaseClasses",
    ["gridWrapperMarginTop"],
    props,
    theme
  );

  const gridStyles = resolvedStyleProps(
    "centeredGridBaseClasses",
    ["gridClasses"],
    props,
    theme
  );

  const sectionHeadingTextAlignment = resolvedStyleProps(
    "centeredGridBaseClasses",
    ["sectionHeadingAlignmentClasses"],
    props,
    theme
  );

  return (
    <div className={backgroundWrapperContainer}>
      <div className={innerContainer}>
        <div className={sectionHeadingTextAlignment}>
          {props.sectionHeading}

          {props.sectionDescription ? props.sectionDescription : null}
        </div>

        <div className={gridWrapper}>
          <dl className={gridStyles}>
            {props.sectionContentData.map((el: any, index: any) => {
              return <span key={index}>{el}</span>;
            })}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default CenteredGrid;
