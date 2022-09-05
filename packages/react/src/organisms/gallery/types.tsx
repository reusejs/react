import { MotionValue, PanInfo } from "framer-motion";
import {
  BaseArrowProps,
  SliderBaseProps,
} from "./intefaces";

export type CarouselProps = {
  index: number,
  setIndex: any,
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
  autoPlay?: boolean;
  interval?: number;
  loop?: boolean;
  baseArrowStyleClasses?: BaseArrowProps;
  sliderPageStyleClasses?: any;
  sliderBaseclasses?: SliderBaseProps;
  hideArrows?: boolean;
  galleryArrowBaseClasses?: any;
};

export type ArrowProps = {
  variant?: string;
  onClick: () => void;
  left?: boolean;
  children?: React.ReactNode;
  baseArrowStyleProps?: BaseArrowProps;
};

export type SliderProps = {
  x: MotionValue<number>;
  i: number;
  children: React.ReactNode;
  onDragEnd: (e: Event, dragProps: PanInfo) => void;
};