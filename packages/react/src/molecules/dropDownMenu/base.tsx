import React, { Fragment } from "react";
import "../tailwind.css";
import { Menu, Transition } from "@headlessui/react";
import classNames from "../../utils/classNames";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import { useThemeContext } from "../../theme/ThemeProvider";
import LabelBase from "../../atoms/labels/base"
import { LabelBaseProps } from "../../atoms/labels/base";

export interface LinkComponentProps {
    href?: string,
    children?: JSX.Element,
    linkElementBaseClasses?: {
        color?: string,
        font?: string,
        hoverStyle?: string,
    }
}

const LinkComponent:React.FC<LinkComponentProps> = ({...props}) => {
    const theme: any = useThemeContext();

    const linkElementClassNames = resolvedStyleProps(
        "linkElementBaseClasses",
        ["color", "font", "hoverStyle"],
        props,
        theme
      );

    return (
      <a href={props.href} className={linkElementClassNames}>
        {props.children}
      </a>
    );
  };

export interface DropdownMenuProps {
    labelBaseProps?: LabelBaseProps,
    section?: {
        label?: string,
        items?: {
            label?: string,
            href?: string,

        }
    }
}

const DropdownMenu = ({
  labelBaseProps?: LabelBaseProps;
  sections,
  linkCom,
  ...props
}) => {
  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button
          className={classNames(
            props.labelClasses || "flex text-sm focus:outline-none"
          )}
        >
          <span className="sr-only">Open user menu</span>
          <>{label}</>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={classNames(
            props.positionClasses || "origin-top-right absolute right-0 z-10",
            "mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 dark:divide-gray-500 focus:outline-none"
          )}
        >
          {sections.map((section, sectionIndex) => (
            <div
              className="py-1"
              key={`${props.uniqueId}-${section}-${sectionIndex}`}
            >
              <section>
                <div>
                  {section.label && (
                    <div
                      className={
                        props.sectionLabelClasses ||
                        "block px-4 py-2 text-xs text-gray-500 dark:text-gray-300"
                      }
                    >
                      {section.label}
                    </div>
                  )}
                  {section.items.map((item, itemIndex) => (
                    <Menu.Item
                      key={`${props.uniqueId}-section-${sectionIndex}-item-${itemIndex}`}
                    >
                      {({}) => (
                        <LinkComponent
                          href={item.href}
                          className={classNames(
                            item.active
                              ? props.activeItemClasses ||
                                  "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white"
                              : "",
                            "w-full block px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700"
                          )}
                          item={item}
                        >
                          <div className="flex items-center justify-between">
                            <div>{item.label}</div>
                            {item.active && section.activeIcon && (
                              <>{section.activeIcon}</>
                            )}
                          </div>
                        </LinkComponent>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </section>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropdownMenu;