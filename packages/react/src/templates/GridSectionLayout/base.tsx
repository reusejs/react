import React from "react";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import { useThemeContext } from "../../theme/ThemeProvider";

export interface CenteredGridBaseInterface {
  items?: any;
  itemsRenderer?: any;
  centeredGridBaseClasses?: {
    verticalWrapperPadding?: string;
    horizontalMargin?: string;
    horizontalPadding?: string;
    width?: string;
    gridWrapper?: string;
    gridClasses?: string;
    sectionHeadingAlignmentClasses?: string;
  };
}

const CenteredGridBase = (props: CenteredGridBaseInterface) => {
  const theme: any = useThemeContext();

  

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

  


  const renderItem = () => {
    const ItemRenderer = props.itemsRenderer;
    return (
      <ItemRenderer items={props.items} />
    )
  }

  return (
    // <div className={backgroundWrapperContainer}>
    //   <div className={innerContainer}>

        <div className={gridWrapper}>
          <dl className={gridStyles}>
            {renderItem()}
          </dl>
        </div>
    //   </div>
    // </div>
  );
};

export default CenteredGridBase;
