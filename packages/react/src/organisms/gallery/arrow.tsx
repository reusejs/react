import React from "react";
import { ArrowProps } from "./types";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";

export interface GalleryArrowProps {
  variant?: string;
  onClick: () => void;
  left?: boolean;
  children?: React.ReactNode;
  galleryArrowBaseClasses?: {
    position?: string;
    size?: string;
    backgroundColor?: string;
    borderRadius?: string;
    cursor?: string;
    textStyle?: string;
    left?: string;
    right?: string;
  };
}

//{ left = false, children, onClick }
const Arrow = (props: GalleryArrowProps) => {
  const theme = useThemeContext();

  console.log("Props for Arrow are as follows>>>>", props);

  const baseArrowClassName = resolvedStyleProps(
    "galleryArrowBaseClasses",
    [
      "position",
      "size",
      "backgroundColor",
      "borderRadius",
      "cursor",
      "textStyle",
    ],
    props,
    theme
  );

  const positionLeft = resolvedStyleProps(
    "galleryArrowBaseClasses",
    ["left"],
    props,
    theme
  );

  const positionRight = resolvedStyleProps(
    "galleryArrowBaseClasses",
    ["right"],
    props,
    theme
  );

  return (
    <div
      onClick={props.onClick}
      className={
        baseArrowClassName +
        (props.left ? " " + positionLeft : " " + positionRight)
      }
    >
      {props.children}
    </div>
  );
};

export default Arrow;
