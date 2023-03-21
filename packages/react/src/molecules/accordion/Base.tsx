import React, { useEffect, useState } from "react";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import LabelBase from "../../atoms/labels/base";
import { useThemeContext } from "../../theme/ThemeProvider";
import "../../../tailwind.css";
import { LabelBaseProps } from "../../atoms/labels/base";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { motion, AnimatePresence } from "framer-motion";

const AccordionAnimationVariant = {
  initial: {
    scaleY: 0,
  },
  final: {
    scale: 1,
    transition: {
      duration: 3,
    },
  },
  style: {
    originY: 0,
  },
};

export interface AccordionBaseProps {
  labelBaseProps?: LabelBaseProps;
  variant?: string;
  content?: any;
  contentProps?: any;
  onClick?: (val: boolean) => void;
  isExpanded?: boolean;
  accordionSuffix?: any;
  animationDuration?: number;
  accordionBaseClasses?: {
    width?: string;
    borderRadius?: string;
    border?: string;
    padding?: string;
    font?: string;
    textColor?: string;
    backgroundColor?: string;
    wrapper?: string;
    content?: string;
  };
}

const AccordionBase = (props: AccordionBaseProps) => {
  const [opened, setOpened] = useState<boolean>(false);

  const theme: any = useThemeContext();

  let allProps = Object.assign({}, props);

  const titleClassNames = resolvedStyleProps(
    "accordionBaseClasses",
    [
      "width",
      "border",
      "padding",
      "font",
      "textColor",
      "backgroundColor",
      "display",
    ],
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
    <motion.div className={wrappersClassNames}>
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
      <AnimatePresence exitBeforeEnter>
        {opened && (
          <motion.div
            className={contentClassNames}
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration:
                    props.animationDuration &&
                    typeof props.animationDuration === "number"
                      ? props.animationDuration
                      : 0.4,
                },
                opacity: {
                  duration:
                    props.animationDuration &&
                    typeof props.animationDuration === "number"
                      ? props.animationDuration * 0.625
                      : 0.25,
                  delay:
                    props.animationDuration &&
                    typeof props.animationDuration === "number"
                      ? props.animationDuration * 0.375
                      : 0.15,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration:
                    props.animationDuration &&
                    typeof props.animationDuration === "number"
                      ? props.animationDuration
                      : 0.4,
                },
                opacity: {
                  duration:
                    props.animationDuration &&
                    typeof props.animationDuration === "number"
                      ? props.animationDuration * 0.625
                      : 0.25,
                },
              },
            }}
          >
            <props.content {...props.contentProps} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AccordionBase;
