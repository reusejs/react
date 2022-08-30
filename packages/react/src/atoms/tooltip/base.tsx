import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import { useThemeContext } from "../../theme/ThemeProvider";

export interface ToolTipBaseProps {
  content: string;
  children: JSX.Element;
  trigger?: "Hover" | "Click",
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

const zoom = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  exit: { scale: 0 },
};

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
    if(props.trigger === undefined || props.trigger === "Hover"){
      setShowToolTip(true);
    }
  }

  const onMouseExitFinc = () => {
    if(props.trigger === undefined || props.trigger === "Hover"){
      setShowToolTip(false);
    }
  }
  const onFocusFunc = () => {
    // console.log("This function is called on Focus");
    // console.log("This is proops value<>>>>>", props);
    if(props.trigger === "Click"){
      setShowToolTip(true);
    }
  }
  const onBlurFunc = () => {
    // console.log("This function is called on BLur");
    if(props.trigger === "Click"){
      setShowToolTip(false);
    }
  }

  console.log("Computed style for tool tip are>>", tooltipStyleClasses);
  console.log(
    "Current style is>>>>",
    "absolute top-[h-full] z-10 flex h-fit w-fit items-center justify-center rounded-lg border border-white bg-black px-4 py-2 text-white"
  );

  console.log("Props are>>>", props);

  return (
    <div
     tabIndex={0}
      className="relative h-fit w-fit"
      onMouseEnter={onMouseEnterFunc}
      onMouseLeave={onMouseExitFinc}
      onFocus={onFocusFunc}
      onBlur={onBlurFunc}
    >
      <AnimatePresence>
        {showToolTip && (
          <motion.div
            className={tooltipStyleClasses}
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

export default ToopTipBase;
