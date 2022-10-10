import React, { Fragment, ReactNode } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import { Menu, Transition } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/outline";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";
import useOutsideClicker from "../../hooks/useOutsideClicker";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export interface DropdownMultiProps {
  items?: any;
  label?: any;
  activeLabel?: any;
  itemRenderer?: any;
  variant?: string;
  dropdownMultiClasses?: {
    wrapper?: any;
    transition?: any;
    itemsWrapper?: any;
    containerClasses?: any;
    childContainerClasses?: any;
    itemClasses?: any;
  };
  onClick?: (item: any, itemIndex: any) => void;
}

const DropdownMulti = (props: DropdownMultiProps) => {
  const theme: any = useThemeContext();

  const wrappersClassNames = resolvedStyleProps(
    "dropdownMultiClasses",
    ["wrapper"],
    props,
    theme
  );

  const containerClasses = resolvedStyleProps(
    "dropdownMultiClasses",
    ["containerClasses"],
    props,
    theme
  );

  const childContainerClasses = resolvedStyleProps(
    "dropdownMultiClasses",
    ["childContainerClasses"],
    props,
    theme
  );

  const itemClasses = resolvedStyleProps(
    "dropdownMultiClasses",
    ["itemClasses"],
    props,
    theme
  );

  const activeItemClasses = resolvedStyleProps(
    "dropdownMultiClasses",
    ["activeItemClasses"],
    props,
    theme
  );

  const transitionClasses = {
    ...(props?.dropdownMultiClasses?.transition ||
      (props.variant &&
        theme.variants &&
        theme.variants[props.variant] &&
        theme.variants[props.variant]["dropdownMultiClasses"] &&
        theme.variants[props.variant]["dropdownMultiClasses"]["transition"]) ||
      theme.dropdownMultiClasses.transition),
  };

  const [level1, setLevel1] = React.useState<Boolean>(false);
  const [level2, setLevel2] = React.useState<string>("");
  const [level3, setLevel3] = React.useState<string>("");

  const visRef = useOutsideClicker(() => {
    // console.log("Outside Click");
    setLevel1(false);
    setLevel2("");
    setLevel3("");
  });

  return (
    <div className="relative" ref={visRef}>
      <div
        className={wrappersClassNames}
        onClick={() => {
          setLevel1((prev) => {
            return !prev;
          });
        }}
      >
        {<props.label />}
      </div>
      <Transition
        show={level1}
        appear={true}
        as={Fragment}
        {...transitionClasses}
      >
        <div className={containerClasses}>
          <div className="py-1">
            {props.items.map((item: any, firstLevelIndex: number) => (
              <div
                className={itemClasses}
                onClick={(e) => {
                  e.stopPropagation();
                  if (props.onClick) {
                    props.onClick(item, `item-${firstLevelIndex}`);
                  }
                  setLevel2(`item-${firstLevelIndex}`);
                }}
                key={`item-${firstLevelIndex}`}
              >
                <span
                  className={classNames(
                    "flex items-center justify-between",
                    level2 === `item-${firstLevelIndex}`
                      ? activeItemClasses
                      : ""
                  )}
                >
                  <span>{item.label}</span>
                  {item.children && item.children.length && (
                    <span>
                      <ChevronRightIcon className="h-4 w-4" />
                    </span>
                  )}
                </span>

                {item.children && item.children.length && (
                  <Transition
                    show={level2 === `item-${firstLevelIndex}` ? true : false}
                    appear={true}
                    as={Fragment}
                    {...transitionClasses}
                  >
                    <div className={childContainerClasses}>
                      {item.children.map(
                        (child: any, secondLevelIndex: number) => (
                          <div
                            className={itemClasses}
                            key={`child-${secondLevelIndex}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              if (props.onClick) {
                                props.onClick(
                                  child,
                                  `child-${secondLevelIndex}`
                                );
                              }
                              setLevel3(`child-${secondLevelIndex}`);
                            }}
                          >
                            <span
                              className={classNames(
                                "flex items-center justify-between",
                                level3 === `child-${secondLevelIndex}`
                                  ? activeItemClasses
                                  : ""
                              )}
                            >
                              <span>{child.label}</span>
                              {child.children && child.children.length && (
                                <span>
                                  <ChevronRightIcon className="h-4 w-4" />
                                </span>
                              )}
                            </span>

                            {child.children && child.children.length && (
                              <Transition
                                show={
                                  level3 === `child-${secondLevelIndex}`
                                    ? true
                                    : false
                                }
                                appear={true}
                                as={Fragment}
                                {...transitionClasses}
                              >
                                <div className={childContainerClasses}>
                                  {child.children.map(
                                    (
                                      grandChild: any,
                                      thirdLevelIndex: number
                                    ) => (
                                      <div
                                        className={itemClasses}
                                        key={`grand-child-${thirdLevelIndex}`}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          if (props.onClick) {
                                            props.onClick(
                                              grandChild,
                                              `grand-child-${thirdLevelIndex}`
                                            );
                                          }
                                        }}
                                      >
                                        {grandChild.label}
                                      </div>
                                    )
                                  )}
                                </div>
                              </Transition>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </Transition>
                )}
              </div>
            ))}
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default DropdownMulti;
