import React, { useEffect, useState } from "react";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import LabelBase from "../../atoms/labels/base";
import { useThemeContext } from "../../theme/ThemeProvider";
import "../../../tailwind.css";
import { LabelBaseProps } from "../../atoms/labels/base";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

export interface AccordionBaseProps {
  labelBaseProps?: LabelBaseProps;
  variant?: string;
  content?: any;
  contentProps?: any;
  onClick?: (val: boolean) => void;
  isExpanded?: boolean;
  accordionSuffix?: any;
  accordionBaseClasses?: {
    width?: string;
    borderRadius?: string;
    border?: string;
    padding?: string;
    font?: string;
    textColor?: string;
    backgroundColor?: string;
  };
}

const AccordionBase = (props: AccordionBaseProps) => {
  const [opened, setOpened] = useState<boolean>(false);
  const theme: any = useThemeContext();

  let allProps = Object.assign({}, props);

  const titleClassNames = resolvedStyleProps(
    "accordionBaseClasses",
    ["width", "padding", "font", "textColor", "backgroundColor", "display"],
    allProps,
    theme
  );

  const wrappersClassNames = resolvedStyleProps(
    "accordionBaseClasses",
    ["wrapper"],
    props,
    theme
  );

  const contentClassNames = resolvedStyleProps(
    "accordionBaseClasses",
    ["content"],
    props,
    theme
  );

  useEffect(() => {
    if (
      props.hasOwnProperty("isExpanded") &&
      typeof props.isExpanded === "boolean"
    ) {
      setOpened(props.isExpanded);
    }
  }, [props.isExpanded]);

  return (
    <div className={wrappersClassNames}>
      <div
        className={titleClassNames}
        onClick={(e) => {
          setOpened(!opened);
          props.onClick?.(!opened);
        }}
      >
        <LabelBase {...props.labelBaseProps} />
        {props.accordionSuffix ? (
          props.accordionSuffix
        ) : opened ? (
          <ChevronUpIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        ) : (
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        )}
      </div>
      {opened && (
        <div className={contentClassNames}>
          <props.content {...props.contentProps} />
        </div>
      )}
    </div>
  );
};

export default AccordionBase;
