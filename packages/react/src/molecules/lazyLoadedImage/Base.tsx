import React, { useEffect, useState, CSSProperties } from "react";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import { useThemeContext } from "../../theme/ThemeProvider";
import "../../../tailwind.css";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export interface LazyLoadedImageProps {
  afterLoad?: () => any;
  beforeLoad?: () => any;
  delayMethod?: "debounce" | "throttle" | undefined;
  delayTime?: number;
  effect?: "blur" | "black-and-white" | "opacity";
  placeholderSrc?: string;
  threshold?: number;
  visibleByDefault?: boolean;
  wrapperClassName?: string;
  src?: string;
  width?: number;
  height?: number;
  wrapperProps?: any;
  scrollPosition?: { x: 0; y: 0 } | undefined;
  style?: any;
  useIntersectionObserver?: boolean;
}

const LazyLoadedImage = (props: LazyLoadedImageProps) => {
  const theme: any = useThemeContext();
  const [loaded, setLoaded] = useState<Boolean>(false);

  function onImageLoad() {
    if (loaded) {
      return null;
    }

    if (props.afterLoad) {
      props.afterLoad();
    }
    setLoaded(true);
  }

  function getImg() {
    const {
      afterLoad,
      beforeLoad,
      delayMethod,
      delayTime,
      effect,
      placeholderSrc,
      scrollPosition,
      threshold,
      useIntersectionObserver,
      visibleByDefault,
      wrapperClassName,
      wrapperProps,
      ...imgProps
    } = props;
    return <img onLoad={onImageLoad} {...imgProps} />;
  }

  function getLazyLoadImage() {
    return (
      <LazyLoadComponent
        beforeLoad={props.beforeLoad}
        // className={props.className}
        delayMethod={props.delayMethod}
        delayTime={props.delayTime}
        // height={props.height}
        // placeholder={props.placeholderSrc}
        scrollPosition={props.scrollPosition}
        style={props.style}
        threshold={props.threshold}
        useIntersectionObserver={props.useIntersectionObserver}
        visibleByDefault={props.visibleByDefault}
        // width={props.width}
      >
        {getImg()}
      </LazyLoadComponent>
    );
  }

  function getWrappedLazyLoadImage(lazyLoadImage: any) {
    const loadedClassName = loaded ? " lazy-load-image-loaded" : "";
    const wrapperBackground =
      loaded || !props.placeholderSrc
        ? {}
        : {
            backgroundImage: `url(${props.placeholderSrc})`,
            backgroundSize: "100% 100%",
          };

    return (
      <span
        className={
          props.wrapperClassName +
          " lazy-load-image-background " +
          props.effect +
          loadedClassName
        }
        style={{
          ...wrapperBackground,
          color: "transparent",
          display: "inline-block",
          height: props.height,
          width: props.width,
        }}
        {...props.wrapperProps}
      >
        {lazyLoadImage}
      </span>
    );
  }

  const lazyLoadImage = getLazyLoadImage();
  const needsWrapper =
    (props.effect || props.placeholderSrc) && !props.visibleByDefault;
  if (!needsWrapper && !props.wrapperClassName && !props.wrapperProps) {
    return lazyLoadImage;
  }

  return getWrappedLazyLoadImage(lazyLoadImage);
};

export default LazyLoadedImage;
