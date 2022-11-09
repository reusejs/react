import React, { useState } from "react";
import "../../../tailwind.css";
import classNames from "../../utils/classNames";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import { ChevronDownIcon } from "@heroicons/react/solid";

export interface SidebarProps {
  topItem?: any;
  navigationItems?: any;
  onClick?: any;
  sidebarBaseClasses?: {
    wrapper?: string;
    backgroundClasses?: string;
    navItemClasses?: string;
    navItemActiveClasses?: string;
  };
}

const ItemRenderer = (props: any) => {
  const [open, setOpen] = useState(false);
  const { item, index } = props;

  return item.children ? (
    <>
      <div
        key={item.label}
        onClick={(e) => {
          e.preventDefault();
          setOpen(!open);
        }}
        className={classNames(
          open || item.current
            ? props.navItemActiveClasses
            : props.navItemClasses,
          "group flex items-center rounded-md px-2 py-2 text-sm font-medium"
        )}
      >
        {item.icon && (
          <item.icon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
        )}
        <span className={item.icon && "ml-3"}>{item.label}</span>
        <ChevronDownIcon
          className={classNames(
            open ? "rotate-180" : "",
            "ml-auto h-5 w-5 transform transition-transform"
          )}
          aria-hidden="true"
        />
      </div>
      {open && (
        <div
          key={`${item.label}_${index}`}
          className="mt-2 space-y-2 px-7"
          role="menu"
          arial-label={item.label}
        >
          {item.children.map((element: any, i: any) => (
            <div
              key={`${element.label}_${i}`}
              onClick={(e) => props.onClick(e, element)}
              className={classNames(
                element.current
                  ? props.navItemActiveClasses
                  : props.navItemClasses,
                "block rounded-md p-2 text-sm transition-colors duration-200"
              )}
            >
              <span className="ml-3">{element.label}</span>
            </div>
          ))}
        </div>
      )}
    </>
  ) : (
    <div
      key={item.label}
      onClick={(e) => props.onClick(e, item)}
      className={classNames(
        item.current ? props.navItemActiveClasses : props.navItemClasses,
        "group flex items-center rounded-md px-2 py-2 text-sm font-medium"
      )}
    >
      {item.icon && (
        <item.icon className="mr-3 h-6 w-6 flex-shrink-0" aria-hidden="true" />
      )}
      {item.label}
    </div>
  );
};

const SidebarBase = (props: SidebarProps) => {
  const theme: any = useThemeContext();

  const wrapperStyles = resolvedStyleProps(
    "sidebarBaseClasses",
    ["wrapper"],
    props,
    theme
  );

  const backgroundStyles = resolvedStyleProps(
    "sidebarBaseClasses",
    ["backgroundClasses"],
    props,
    theme
  );

  const navItemStyles = resolvedStyleProps(
    "sidebarBaseClasses",
    ["navItemClasses"],
    props,
    theme
  );

  const navItemActiveStyles = resolvedStyleProps(
    "sidebarBaseClasses",
    ["navItemActiveClasses"],
    props,
    theme
  );

  return (
    <aside className={wrapperStyles}>
      <div
        className={classNames(
          backgroundStyles,
          "flex flex-grow flex-col overflow-y-auto"
        )}
      >
        <div className="flex flex-shrink-0 items-center px-4">
          {props.topItem}
        </div>
        <div className="mt-5 flex flex-1 flex-col">
          <nav className="flex-1 space-y-1 px-2 pb-4">
            {props.navigationItems.map((item: any, index: any) => (
              <ItemRenderer
                key={index}
                item={item}
                index={index}
                navItemClasses={navItemStyles}
                navItemActiveClasses={navItemActiveStyles}
                {...props}
              />
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default SidebarBase;
