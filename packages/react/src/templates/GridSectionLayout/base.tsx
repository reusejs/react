import React from "react";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import { useThemeContext } from "../../theme/ThemeProvider";

export interface CenteredGridBaseInterface {
  items?: any;
  itemsRenderer?: any;
  centeredGridBaseClasses?: {
    gridWrapper?: string;
    gridClasses?: string;
  };
}

const CenteredGridBase = (props: CenteredGridBaseInterface) => {
  const theme: any = useThemeContext();
  
  const gridWrapper = resolvedStyleProps(
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


  const renderItem = () => {
    const ItemRenderer = props.itemsRenderer;
    return (
      <ItemRenderer items={props.items} />
    )
  }

  return (
    <div className={gridWrapper}>
      <dl className={gridStyles}>
        {renderItem()}
      </dl>
    </div>
  );
};

export default CenteredGridBase;
