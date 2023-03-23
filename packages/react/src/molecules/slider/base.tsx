import React from "react";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import { useThemeContext } from "../../theme/ThemeProvider";
import { Carousel } from "./carousel";
import { DotProps } from "./types";
import { BaseArrowProps, DotItemProps, DotWrapperProps } from "./intefaces";

export interface SliderBaseProps {
  children: JSX.Element[];
  renderArrowLeft?: (args: {
    handlePrev: () => void;
    activeIndex: number;
  }) => React.ReactNode;
  renderArrowRight?: (args: {
    handleNext: () => void;
    activeIndex: number;
  }) => React.ReactNode;
  renderDots?: (args: Omit<DotProps, "length">) => React.ReactNode;
  autoPlay?: boolean;
  interval?: number;
  loop?: boolean;
  dotColors?: "default" | "dark" | { active: string; inactive: string };
  dotWrapperClasses?: DotWrapperProps;
  dotItemClasses?: DotItemProps;
  baseArrowClasses?: BaseArrowProps;
  sliderPageClasses?: any;
  sliderBaseClasses?: {
    display?: string,
    height?: string,
    width?: string,
    margin?: string,
    containerClasses?: string,
  },
  hideArrows?: boolean;
  hideDots?: boolean;
}

const SliderBase = (props: SliderBaseProps) => {
  const theme = useThemeContext();
  const finalClassName = resolvedStyleProps("sliderBaseClasses", ["display","height","width","margin"], props,theme);
  const containerClassName = resolvedStyleProps("sliderBaseClasses", ["containerClasses"], props,theme);

  return (
    <Carousel
      containerClassName = {containerClassName}
      {...props}
    >
      {props.children.map((item, i) => (
        <div
          key={i}
          className={finalClassName}
        >
          {item}
        </div>
      ))}
    </Carousel>
  );
};

export default SliderBase;
