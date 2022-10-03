import React, { useEffect, useState, CSSProperties } from "react";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import { useThemeContext } from "../../theme/ThemeProvider";
import "../../../tailwind.css";
import LazyLoadedImage from "../../molecules/lazyLoadedImage/Base";

export interface ImageOverlayProps {
  placeholderSrc?: string;
  src: string;
  width: number;
  height: number;
  bottomleft?: any;
  topLeft?: any;
  bottomRight?: any;
  topRight?: any;
  center?: any;
  effectClasses?: string;
}

const ImageOverlay = (props: ImageOverlayProps) => {
  const theme: any = useThemeContext();

  const effectClasses = "absolute inset-0 " + props.effectClasses;

  return (
    <div
      className="relative overflow-hidden"
      style={{ width: `${props.width}px`, height: `${props.height}px` }}
    >
      <div className="absolute inset-0 h-full w-full object-cover">
        <LazyLoadedImage {...props} />
        <div className={effectClasses} />
        <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">
          {props.center}
        </div>
        <div className="absolute bottom-2 flex w-full justify-between px-2 sm:px-4">
          <div>{props.bottomleft}</div>
          <div>{props.bottomRight}</div>
        </div>
        <div className="absolute top-2 flex w-full justify-between px-2 sm:px-4">
          <div>{props.topLeft}</div>
          <div>{props.topRight}</div>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlay;
