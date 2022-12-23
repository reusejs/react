import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import { useThemeContext } from "../../theme/ThemeProvider";
import { ToolTipBase } from "../..";

export interface ToolTipBaseProps {
  content: string;
  children: JSX.Element;
  trigger?: "Hover" | "Click";
  toolTipBaseStyleProps?: {
    positioning?: string;
    layout?: string;
    border?: string;
    borderRadius?: string;
    margin?: string;
    padding?: string;
    backgroundColor?: string;
    textColor?: string;
  };
}

const ToopTipBase = (props: ToolTipBaseProps) => {
  const [showToolTip, setShowToolTip] = React.useState<boolean>(false);
  const theme: any = useThemeContext();

  const tooltipStyleClasses = resolvedStyleProps(
    "toolTipBaseStyleProps",
    [
      "positioning",
      "layout",
      "border",
      "borderRadius",
      "margin",
      "padding",
      "backgroundColor",
      "textColor",
    ],
    props,
    theme
  );

  const onMouseEnterFunc = () => {
    if (props.trigger === "Hover") {
      setShowToolTip(true);
    }
  };

  const onMouseExitFinc = () => {
    if (props.trigger === "Hover") {
      setShowToolTip(false);
    }
  };
  const onFocusFunc = () => {
    if (props.trigger === "Click") {
      setShowToolTip(!showToolTip);
    }
  };
  const onBlurFunc = () => {
    if (props.trigger === "Click") {
      setShowToolTip(false);
    }
  };

  return (
    <div
      tabIndex={0}
      className="relative h-fit w-fit"
      onMouseEnter={onMouseEnterFunc}
      onMouseLeave={onMouseExitFinc}
      onBlur={onBlurFunc}
      onClick={onFocusFunc}
    >
      <AnimatePresence>
        {showToolTip && (
          <motion.div
            className={"absolute z-10 " + tooltipStyleClasses}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            {props.content}
          </motion.div>
        )}
      </AnimatePresence>
      {props.children}
    </div>
  );
};

ToopTipBase.defaultProps = {
  trigger: "Hover",
  content: "Enter ToolTip message here",
}

export default ToopTipBase;
