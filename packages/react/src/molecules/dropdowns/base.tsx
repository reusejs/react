import React, { Fragment, ReactNode } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import { Menu, Transition } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/outline";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export interface DropdownBaseProps {
  label?: string;
  htmlFor?: string;
  labelStyles?: any;
  variant?: string;
  dropdownBaseClasses?: {
    alignment?: any;
    color?: any;
    font?: any;
  };
}

const LinkComponent = (props: any) => {
  let { href, children, ...rest } = props;

  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
};

const DropdownBase = (props: DropdownBaseProps) => {
  const theme: any = useThemeContext();

  const finalClassNames = resolvedStyleProps(
    "dropdownBaseClasses",
    ["alignment", "color", "font"],
    props,
    theme
  );

  const uniqueId = "hi";

  const sections = [
    {
      label: "Manage Account",
      items: [
        { label: "Your Profile", href: "#", active: false },
        { label: "Settings", href: "#", active: true },
      ],
    },
    {
      label: "Team Switcher",
      items: [
        { label: "Beta", href: "#", active: false },
        { label: "Betalectic", href: "#", active: true },
      ],
      activeIcon: <CheckCircleIcon className="mr-1 h-6 w-6 text-green-500" />,
    },
    {
      items: [{ label: "Sign Out", href: "#", active: false }],
    },
  ];

  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button
          className={classNames("flex bg-red-50 text-sm focus:outline-none")}
        >
          <span className="sr-only">Open user menu</span>
          <>Dropdown</>
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
            "absolute right-0 z-10 origin-top-left",
            "mt-2 w-48 divide-y divide-gray-100 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-gray-500 dark:bg-gray-800"
          )}
        >
          {sections.map((section, sectionIndex) => (
            <div
              className="py-1"
              key={`${uniqueId}-${section}-${sectionIndex}`}
            >
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
                  {section.items.map((item, itemIndex) => (
                    <Menu.Item
                      key={`${uniqueId}-section-${sectionIndex}-item-${itemIndex}`}
                    >
                      {({}) => (
                        <LinkComponent
                          href={item.href}
                          className={classNames(
                            item.active
                              ? "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white"
                              : "",
                            "block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-700"
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

export default DropdownBase;
