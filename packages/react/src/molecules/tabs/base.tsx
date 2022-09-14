import { map } from "lodash";
import React, { useEffect } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";

export interface TabsBaseClassesProps {
  wrapperPadding?: string;
  layout?: string;
  height?: string;
  width?: string;
  backgroundColor?: string;
  padding?: string;
  cursor?: string;
  borderRadius?: string;
  border?: string;
  activeTabClasses?: string;
  inactiveTabClasses?: string;
}

export interface TabsBaseProps {
  elements: {
    title: React.ReactNode;
    content: React.ReactNode;
    icon?: React.ReactNode;
  }[];
  variant?: string;
  tabsBaseClasses?: TabsBaseClassesProps;
}

const TabsBase = (props: TabsBaseProps) => {
  const [activeTabIndex, setActiveTabIndex] = React.useState<number>(0);
  const theme = useThemeContext();

  const wrapperClasses = resolvedStyleProps(
    "tabsBaseClasses",
    ["wrapperClasses"],
    props,
    theme
  );

  const tabClassName = resolvedStyleProps(
    "tabsBaseClasses",
    [
      "layout",
      "height",
      "width",
      "backgroundColor",
      "padding",
      "cursor",
      "borderRadius",
      "border",
    ],
    props,
    theme
  );

  const activeClassName = resolvedStyleProps(
    "tabsBaseClasses",
    ["activeTabClasses"],
    props,
    theme
  );
  const inactiveClassName = resolvedStyleProps(
    "tabsBaseClasses",
    ["inactiveTabClasses"],
    props,
    theme
  );

  return (
    <div className="flex flex-col">
      <div
        className={
          "flex h-full w-full items-end overflow-scroll scroll-smooth scrollbar-hide " +
          wrapperClasses
        }
      >
        {props.elements.map((element, index) => {
          return (
            <div
              className={
                tabClassName +
                " " +
                (index === activeTabIndex ? activeClassName : inactiveClassName)
              }
              onClick={() => {
                setActiveTabIndex(index);
              }}
            >
              {element.title}
              {element.icon && element.icon}
            </div>
          );
        })}
      </div>
      {props.elements[activeTabIndex].content}
    </div>
  );
};

export default TabsBase;
