import React, { useRef } from "react";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";

export interface HorizontalListBaseProps {
  content: React.ReactNode[];
  horizontalListBaseClasses: {
    layout?: string;
  };
  dividerClasses: {
    layout?: string;
    margin?: string;
    size?: string;
    color?: string;
  };
  customDivider?: React.ReactNode;
}

const HorizontalList = (props: HorizontalListBaseProps) => {
  const theme = useThemeContext();

  //   console.log("props>>>", props);

  const wrapperClassNames = resolvedStyleProps(
    "horizontalListBaseClasses",
    ["layout"],
    props,
    theme
  );

  const dividerClassName = resolvedStyleProps(
    "dividerClasses",
    ["layout", "margin", "size", "color"],
    props,
    theme
  );

  //   console.log("wrapp>>", wrapperClassNames);
  //   console.log("divider>>", dividerClassName);

  const divider = props?.customDivider ? (
    props.customDivider
  ) : (
    <div className={dividerClassName} />
  );

  return (
    <div className={wrapperClassNames}>
      {props.content && props.content.length > 0
        ? props.content.map((ele, index) => {
            return (
              <div key={index} className="flex">
                {ele}
                {index !== props.content.length - 1 ? divider : null}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default HorizontalList;
