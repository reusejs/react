import { MotionValue, PanInfo } from "framer-motion";
import {
  BaseArrowProps,
  DotItemProps,
  DotWrapperProps,
  SliderBaseProps,
} from "./intefaces";

export type CarouselProps = {
  variant?: string;
  children: React.ReactNode;
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
  dotWrapStyleClasses?: DotWrapperProps;
  dotItemStyleClasses?: DotItemProps;
  baseArrowStyleClasses?: BaseArrowProps;
  sliderPageStyleClasses?: any;
  sliderBaseclasses?: SliderBaseProps;
  hideArrows?: boolean;
  hideDots?: boolean;
};

export type ArrowProps = {
  variant?: string;
  onClick: () => void;
  left?: boolean;
  children: React.ReactNode;
  baseArrowStyleProps?: BaseArrowProps;
};

export type SliderProps = {
  x: MotionValue<number>;
  i: number;
  children: React.ReactNode;
  onDragEnd: (e: Event, dragProps: PanInfo) => void;
};

export type DotProps = {
  variant?: string;
  dotColors?: "default" | "dark" | { active: string; inactive: string };
  length: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  dotItemStyleProps?: DotItemProps;
  dotWrapStyleProps?: DotWrapperProps;
};
