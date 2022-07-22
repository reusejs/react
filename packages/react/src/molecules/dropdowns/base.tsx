import React, { Fragment, ReactNode } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import { Menu, Transition } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/outline";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export interface DropdownBaseProps {
  sections?: any;
  label?: any;
  activeLabel?: any;
  itemRenderer?: any;
  variant?: string;
  dropdownBaseClasses?: {
    wrapper?: any;
    transition?: any;
    itemsWrapper?: any;
    menuButton?: any;
  };
  onClick?: (item: any) => void;
}

const DropdownBase = (props: DropdownBaseProps) => {
  const theme: any = useThemeContext();

  const wrappersClassNames = resolvedStyleProps(
    "dropdownBaseClasses",
    ["wrapper"],
    props,
    theme
  );

  const itemsWrapperClassNames = resolvedStyleProps(
    "dropdownBaseClasses",
    ["itemsWrapper"],
    props,
    theme
  );

  const menuButtonClassNames = resolvedStyleProps(
    "dropdownBaseClasses",
    ["menuButton"],
    props,
    theme
  );

  const transitionClasses = {
    ...(props?.dropdownBaseClasses?.transition ||
      (props.variant &&
        theme.variants &&
        theme.variants[props.variant] &&
        theme.variants[props.variant]["dropdownBaseClasses"] &&
        theme.variants[props.variant]["dropdownBaseClasses"]["transition"]) ||
      theme.dropdownBaseClasses.transition),
  };

  return (
    <Menu as="div" className={wrappersClassNames}>
      <div>
        <Menu.Button className={menuButtonClassNames}>
          {<props.label />}
        </Menu.Button>
      </div>

      <Transition as={Fragment} {...transitionClasses}>
        <Menu.Items className={itemsWrapperClassNames}>
          {props.sections.map((section: any, sectionIndex: number) => (
            <div className="py-1" key={`${section}-${sectionIndex}`}>
              <section>
                <div>
                  {section.label && (
                    <div
                      className={
                        "block px-4 py-2 text-xs text-gray-500 dark:text-gray-300"
                      }
                    >
                      {section.label}
                    </div>
                  )}

                  {section.items.map((item: any, itemIndex: number) => (
                    <Menu.Item
                      key={`section-${sectionIndex}-item-${itemIndex}`}
                    >
                      {({ active }) => (
                        <>
                          {props.itemRenderer && item.comp === undefined && (
                            <props.itemRenderer item={item} />
                          )}
                          {item.comp && <item.comp item={item} />}
                          {props.itemRenderer === undefined &&
                            item.comp === undefined && (
                              <button
                                type="button"
                                onClick={() => {
                                  if (props.onClick) {
                                    props?.onClick(item);
                                  }
                                }}
                                className={classNames(
                                  item.active
                                    ? "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white"
                                    : "",

                                  "block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-700"
                                )}
                              >
                                <div className="flex items-center justify-between">
                                  <div>{item.label}</div>
                                </div>
                              </button>
                            )}
                        </>
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

export default DropdownBase;
