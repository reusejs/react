import React, { useEffect, useImperativeHandle, useRef } from "react";
import "../../../tailwind.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useThemeContext } from "../../theme/ThemeProvider";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface CentralizedSliderBaseProps {
  children: React.ReactNode[];
  slidesPerView: number;
  gap?: number;
  centeredSlides?: boolean;
  renderArrowLeft?: any;
  renderArrowRight?: any;
  hideArrow?: boolean;
  variant?: string;
  pagination?: boolean;
  autoPlay?: number;
  loop?: boolean;
  centralizedSliderBaseClasses?: {
    layout?: string;
  };
}

const CentralizedSliderBase = (props: CentralizedSliderBaseProps) => {
  const theme = useThemeContext();
  const slideElementClassName = resolvedStyleProps(
    "centralizedSliderBaseClasses",
    ["layout"],
    props,
    theme
  );

  const swiperRef: any = useRef();

  const LeftArrow = () => {
    return (
      <div
        className="absolute top-1/2 left-2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white bg-slate-800 text-white opacity-70"
        onClick={() => {
          swiperRef.current.slidePrev();
        }}
      >
        {"<"}
      </div>
    );
  };

  const RightArrow = () => {
    return (
      <div
        className="absolute top-1/2 right-2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white bg-slate-800 text-white opacity-70"
        onClick={() => {
          swiperRef.current.slideNext();
        }}
      >
        {">"}
      </div>
    );
  };

  const pagination = props.pagination
    ? {
        pagination: { clickable: true },
      }
    : null;

  const autoplay = props.autoPlay
    ? {
        autoplay: {
          delay: props.autoPlay,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
      }
    : null;
  const loop = props.loop ? { loop: true } : null;

  return (
    <div className="relative">
      {props.renderArrowLeft ? (
        props.renderArrowLeft({ swiperRef })
      ) : (
        <LeftArrow />
      )}
      {props.renderArrowRight ? (
        props.renderArrowRight({ swiperRef })
      ) : (
        <RightArrow />
      )}
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={props.gap}
        centeredSlides={props.centeredSlides ? true : false}
        slidesPerView={props.slidesPerView}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        // autoplay={del}
        {...pagination}
        {...autoplay}
        {...loop}
      >
        {props.children.map((element, index) => {
          return (
            <SwiperSlide key={"el" + index} className={slideElementClassName}>
              {element}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CentralizedSliderBase;
