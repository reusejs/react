import React, { useImperativeHandle } from "react";
import "../../../tailwind.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";

export interface SimpleSliderBaseProps {
  children: React.ReactNode[];
  id: string;
  scrollWidth: number;
  renderArrowLeft?: any;
  renderArrowRight?: any;
  hideArrow?: boolean;
  variant?: string;
  simpleSliderBaseClasses?: {
    layout?: string;
    size?: string;
    sliderClasses?: string;
  };
}

const SimpleSliderBase = (props: SimpleSliderBaseProps) => {
  const theme = useThemeContext();
  const wrapperClassName = resolvedStyleProps(
    "simpleSliderBaseClasses",
    ["layout", "size"],
    props,
    theme
  );

  const sliderClassName = resolvedStyleProps(
    "simpleSliderBaseClasses",
    ["sliderClasses"],
    props,
    theme
  );

  const slideLeft = (): void => {
    var slider = document.getElementById(props.id) as HTMLElement;
    slider.scrollLeft = slider.scrollLeft - props.scrollWidth;
  };

  const slideRight = (): void => {
    var slider = document.getElementById(props.id) as HTMLElement;
    slider.scrollLeft = slider.scrollLeft + props.scrollWidth;
  };

  return (
    <div className={wrapperClassName}>
      {/* {!props.hideArrow && props.renderArrowLeft ? (
        props.renderArrowLeft({ slideLeft })
      ) : (
        <ChevronLeftIcon
          className="absolute left-10 top-1/2 h-10 w-10 -translate-y-1/2 cursor-pointer text-black"
          onClick={slideLeft}
        />
      )} */}
      {/* {!props.hideArrow && props.renderArrowRight ? (
        props.renderArrowRight({ slideRight })
      ) : (
        <ChevronRightIcon
          className="absolute right-10 top-1/2 h-10 w-10 -translate-y-1/2 cursor-pointer text-black"
          onClick={slideRight}
        />
      )} */}
      { !props.hideArrow && (props.renderArrowLeft ? (
        props.renderArrowLeft({ slideLeft })
      ) : (
        <ChevronLeftIcon
          className="absolute left-10 top-1/2 h-10 w-10 -translate-y-1/2 cursor-pointer text-black"
          onClick={slideLeft}
        />
      ))}
      { !props.hideArrow && (props.renderArrowRight ? (
        props.renderArrowRight({ slideRight })
      ) : (
        <ChevronRightIcon
          className="absolute right-10 top-1/2 h-10 w-10 -translate-y-1/2 cursor-pointer text-black"
          onClick={slideRight}
        />
      ))}
      <div id={props.id} className={sliderClassName}>
        {props.children}
      </div>
    </div>
  );
};

export default SimpleSliderBase;
