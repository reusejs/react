import React, { useEffect, useState } from "react";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import { useThemeContext } from "../../theme/ThemeProvider";
import DefaultIcon from "./DefaultIcon";

export interface IconListBaseProps {
  content?: React.ReactNode[];
  iconListBaseClasses?: {
    layout?: string;
    width?: string;
    margin?: string;
    padding?: string;
  };
  listElementWrapperClasses?: {
    layout?: string;
    margin?: string;
    padding?: string;
  };
  iconWrapperClasses?: {
    layout?: string;
    margin?: string;
  };
  customIcon?: React.ReactNode;
}

const IconList = (props: IconListBaseProps) => {
  const theme: any = useThemeContext();

  let allProps = Object.assign({}, props);

  const baseClassName = resolvedStyleProps(
    "iconListBaseClasses",
    ["layout", "width", "margin", "padding"],
    allProps,
    theme
  );

  const listElementWrapperClassname = resolvedStyleProps(
    "listElementWrapperClasses",
    ["layout", "margin", "padding"],
    allProps,
    theme
  );
  const iconWrapperClassname = resolvedStyleProps(
    "iconWrapperClasses",
    ["layout", "margin"],
    allProps,
    theme
  );

  const Icon = (
    <div className={iconWrapperClassname}>
      {props?.customIcon ? props.customIcon : <DefaultIcon />}
    </div>
  );

  return (
    <div className={baseClassName}>
      {props?.content && props.content?.length > 0
        ? props.content.map((ele, index) => {
            return (
              <div key={index} className={listElementWrapperClassname}>
                {Icon}
                {ele}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default IconList;
