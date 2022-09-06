import * as React from "react";
import {
  animate,
  AnimationOptions,
  PanInfo,
  useMotionValue,
} from "framer-motion";

import { CarouselProps } from "./types";
import Arrow from "./arrow";
import Slider from "./slider";
import Dots from "./dots";

//Transition type
const transition: AnimationOptions<any> = {
  type: "spring",
  bounce: 0,
};

//Container div to render carousel
const Contaier = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode }
>((props, ref) => (
  <div ref={ref} className="relative flex h-full w-full overflow-x-hidden">
    {props.children}
  </div>
));

export const Carousel = ({
  children,
  renderArrowLeft,
  renderArrowRight,
  renderDots,
  autoPlay = true,
  interval = 2000,
  loop = true,
  ...props
}: CarouselProps) => {
  const x = useMotionValue(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [index, setIndex] = React.useState(0);
  console.log("####Props here are>>>", props);

  const calculateNewX = () => -index * (containerRef.current?.clientWidth || 0);

  const handleEndDrag = (e: Event, dragProps: PanInfo) => {
    const clientWidth = containerRef.current?.clientWidth || 0;

    const { offset } = dragProps;

    if (offset.x > clientWidth / 4) {
      handlePrev();
    } else if (offset.x < -clientWidth / 4) {
      handleNext();
    } else {
      animate(x, calculateNewX(), transition);
    }
  };

  const childrens = React.Children.toArray(children);

  const handleNext = () => {
    const idx = loop ? 0 : index;
    setIndex(index + 1 === childrens.length ? idx : index + 1);
  };

  const handlePrev = () => {
    const idx = loop ? childrens.length - 1 : 0;
    setIndex(index - 1 < 0 ? idx : index - 1);
  };

  React.useEffect(() => {
    const controls = animate(x, calculateNewX(), transition);
    return controls.stop;
  }, [index]);

  React.useEffect(() => {
    if (!autoPlay) {
      return;
    }
    const timer = setInterval(() => handleNext(), interval);
    return () => clearInterval(timer);
  }, [handleNext, interval]);

  return (
    <Contaier ref={containerRef}>
      {childrens.map((child, i) => (
        <Slider onDragEnd={handleEndDrag} x={x} i={i} key={i}>
          {child}
        </Slider>
      ))}
      {/* left arrow */}
      {props.hideArrows ? null : renderArrowLeft ? (
        renderArrowLeft({ handlePrev, activeIndex: index })
      ) : (
        <Arrow
          left
          onClick={handlePrev}
          baseArrowStyleProps={props.baseArrowStyleClasses}
        >
          &larr;
        </Arrow>
      )}

      {/* right arrow */}
      {props.hideArrows ? null : renderArrowRight ? (
        renderArrowRight({ handleNext, activeIndex: index })
      ) : (
        <Arrow
          onClick={handleNext}
          baseArrowStyleProps={props.baseArrowStyleClasses}
        >
          &rarr;
        </Arrow>
      )}

      {/* dots */}
      {props.hideDots ? null : renderDots ? (
        renderDots({ setActiveIndex: setIndex, activeIndex: index })
      ) : (
        <Dots
          length={childrens.length}
          setActiveIndex={setIndex}
          activeIndex={index}
          dotColors={props.dotColors}
        />
      )}
    </Contaier>
  );
};
