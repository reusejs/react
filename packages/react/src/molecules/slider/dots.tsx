import React from "react";
import { DotProps } from "./types";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import { useThemeContext } from "../../theme/ThemeProvider";
import extractStyleProps from "../../utils/extractStyleProps";

const default_dots = {
  active: "bg-slate-900",
  inactive: "bg-slate-300",
};

const dark_dots = {
  active: "bg-white",
  inactive: "bg-slate-600",
};

// { length, activeIndex, setActiveIndex, theme }
const Dots = (props: DotProps) => {
  const theme = useThemeContext();

  const dotWrapperClassName = resolvedStyleProps(
    "dotWrapperClasses",
    ["layout", "bottom", "position"],
    props,
    theme
  );

  const dotItemStyleClasses = resolvedStyleProps(
    "dotItemClasses",
    ["size", "radius", "margin", "cursor"],
    props,
    theme
  );

  // const testStyle = extractStyleProps(
  //   "sliderBaseStyleClasses",
  //   ["dotItemStyleClasses"],
  //   props,
  //   theme
  // )
  // console.log("Color for dot is>>>>", testStyle);

  const setDotColors = () => {
    if(props.dotColors){
      if(props.dotColors === "default"){
        return default_dots;
      }else if(props.dotColors === "dark"){
        return dark_dots;
      }else{
        return props.dotColors;
      }
    }
    return default_dots
  }
  const dot_colors = setDotColors();

  return (
    <div className={dotWrapperClassName}>
      {new Array(props.length).fill("").map((_, i) => (
        <span
          onClick={() => props.setActiveIndex(i)}
          key={i}
          className={dotItemStyleClasses + (i === props.activeIndex ? " "+dot_colors.active : " "+dot_colors.inactive) + (i === props.activeIndex ? " scale-125" : "")}
        ></span>
      ))}
    </div>
  );
};

export default Dots;
