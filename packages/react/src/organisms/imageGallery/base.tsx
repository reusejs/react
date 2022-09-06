import React, { useEffect } from "react";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import { useThemeContext } from "../../theme/ThemeProvider";
import GalleryBase from "../gallery/base";
import LazyLoadedImage from "../../molecules/lazyLoadedImage/Base";
import { GalleryBaseProps } from "../gallery/base";

export interface ImageGalleryProps {
  images: { image: string; thumbnail: string }[];
  width: number;
  height: number;
  interval: number; //Interval in seconds
  loop?: boolean;
}

const ImageGallery = (props: ImageGalleryProps) => {

  const renderContent = (): any => {
    const imageArray: string[] = [];
    const thumbnailArray: string[] = [];
    props.images.map((element: { image: string; thumbnail: string }) => {
      imageArray.push(element.image);
      thumbnailArray.push(element.thumbnail);
    });
    return { images: imageArray, thumbnails: thumbnailArray };
  };

  return (
    <>
      <GalleryBase
        thumbnailArray={renderContent().thumbnails}
        {...props}
        interval={props.interval * 1000}
        autoPlay={!(props.interval === 0)}
      >
        {renderContent().images.map((element: any, index: number) => {
          return <LazyLoadedImage key={index} src={element} {...props} />;
        })}
      </GalleryBase>
    </>
  );
};

export default ImageGallery;
