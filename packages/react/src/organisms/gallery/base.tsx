import React, { useEffect } from "react";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import { useThemeContext } from "../../theme/ThemeProvider";
import { Carousel } from "./carousel";
import { GallerySlider } from "./gallerySlider";
import { BaseArrowProps } from "./intefaces";

export interface GalleryBaseProps {
  children: JSX.Element[];
  renderArrowLeft?: (args: {
    handlePrev: () => void;
    activeIndex: number;
  }) => React.ReactNode;
  renderArrowRight?: (args: {
    handleNext: () => void;
    activeIndex: number;
  }) => React.ReactNode;
  autoPlay?: boolean;
  interval?: number;
  loop?: boolean;
  baseArrowClasses?: BaseArrowProps;
  sliderPageClasses?: any;
  sliderBaseClasses?: any;
  hideArrows?: boolean;
  variant?: any;
  galleryBaseClasses?: {
    wrapper?: string;
    display?: string;
    height?: string;
    width?: string;
    margin?: string;
  };
  gallerySliderBaseClasses?: any;
  galleryArrowBaseClasses?: any;
}

const GalleryBase = (props: GalleryBaseProps) => {
  const [index, setIndex] = React.useState(0);

  console.log("###########Props are>>>", props);
  const theme = useThemeContext();
  const finalClassName = resolvedStyleProps(
    "galleryBaseClasses",
    ["display", "height", "width", "margin"],
    props,
    theme
  );

  const wrapperClassName = resolvedStyleProps(
    "galleryBaseClasses",
    ["wrapper"],
    props,
    theme
  );

  return (
    <div className={wrapperClassName}>
      <Carousel index={index} setIndex={setIndex} {...props}>
        {props.children.map((item, i) => (
          <div key={i} className={finalClassName}>
            {item}
          </div>
        ))}
      </Carousel>
      {/* gallerySliderBaseClasses={props.gallerySliderBaseClasses} variant={props.variant}> */}
      <GallerySlider
        current={index}
        setIndex={setIndex}
        gallerySliderBaseClasses={props.gallerySliderBaseClasses}
        {...props}
      >
        {props.children}
      </GallerySlider>
    </div>
  );
};

export default GalleryBase;
