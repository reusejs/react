import React from "react";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import { useThemeContext } from "../../theme/ThemeProvider";
import CenteredGridBase from "./base";

export interface CenteredGridInterface {
  sectionHeading?: any;
  sectionDescription?: any;
  headingSection?:any;
  footerSection?:any;
  sectionContentData?: any;
  itemsRenderer?: any;
  centeredGridBaseClasses?: {
    backgroundColor?: string;
    verticalWrapperPadding?: string;
    horizontalMargin?: string;
    horizontalPadding?: string;
    width?: string;
    gridWrapper?: string;
    gridClasses?: string;
  };
}

const CenteredGridWithHeading = (props: CenteredGridInterface) => {
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

  const gridWrapperStyles = resolvedStyleProps(
    "centeredGridBaseClasses",
    ["gridWrapper"],
    props,
    theme
  );

  const gridStyles = resolvedStyleProps(
    "centeredGridBaseClasses",
    ["gridClasses"],
    props,
    theme
  );

  const footerSectionWrapperStyles = resolvedStyleProps(
    "centeredGridBaseClasses",
    ["footerSection"],
    props,
    theme
  );

  return (
    <div className={backgroundWrapperContainer}>
      <div className={innerContainer}>
        <>
          {props.headingSection}
        </>

        <>
          <CenteredGridBase
            items={props.sectionContentData}
            itemsRenderer={props.itemsRenderer}
            centeredGridBaseClasses={{
              gridWrapper: gridWrapperStyles,
              gridClasses:gridStyles
            }}
          />
        </>

        {props.footerSection && (
          <div className={footerSectionWrapperStyles}>
            {props.footerSection}
          </div>
        )}

        
      </div>
    </div>
  );
};

export default CenteredGridWithHeading;
