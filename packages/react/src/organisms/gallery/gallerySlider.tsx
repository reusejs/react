import React, { useEffect } from "react";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import { useThemeContext } from "../../theme/ThemeProvider";

export interface GallerySliderProps {
  current: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  children: JSX.Element[];
  variant?: string;
  gallerySliderBaseClasses?: {
    scroll?: string;
    gap?: string;
    height?: string;
    alignment?: string;
    backgroundColor?: string;
    opacity?: string;
    imageSize?: string;
    imagePointer?: string;
    imageSpacing?: string;
    imageActive?: string;
  };
}

export const GallerySlider = (props: GallerySliderProps) => {
  const theme = useThemeContext();
  const finalClassName = resolvedStyleProps(
    "gallerySliderBaseClasses",
    ["scroll", "gap", "height", "alignment", "backgroundColor", "opacity"],
    props,
    theme
  );
  const imageClassName = resolvedStyleProps(
    "gallerySliderBaseClasses",
    ["imageSize", "imagePointer", "imageSpacing"],
    props,
    theme
  );
  const imageActiveClassName = resolvedStyleProps(
    "gallerySliderBaseClasses",
    ["imageActive"],
    props,
    theme
  );

  console.log("Styling for IMgae>>>>>", imageActiveClassName);

  const init = () => {
    const element = document.getElementById(props.current.toString());
    element?.scrollIntoView();
  };

  useEffect(() => {
    init();
  }, [props.current]);

  return (
    <div className={finalClassName}>
      {props.children.map((child: JSX.Element, index: number) => {
        return (
          <div
            key={index}
            id={index.toString()}
            className={
              imageClassName + (index === props.current ? " "+imageActiveClassName : "")
            }
            onClick={() => {
              props.setIndex(index);
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};
