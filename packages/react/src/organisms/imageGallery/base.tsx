import React, { useEffect } from "react";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import { useThemeContext } from "../../theme/ThemeProvider";
import GalleryBase from "../gallery/base";

export interface ImageGalleryProps {
  images: { image: string; thumbnail: string }[];
  // width: number;
  // height: number;
  interval: number; //Interval in seconds
  loop?: boolean;
}

const ImageGallery = (props: ImageGalleryProps) => {
  console.log("Props Here are>>>>>",props);

  const renderContent = ():any => {
    const imageArray: string[] = [];
    const thumbnailArray:string[] = []
    props.images.map((element: {image:string, thumbnail:string})=>{
      imageArray.push(element.image);
      thumbnailArray.push(element.thumbnail);
    })
    return {images:imageArray, thumbnails:thumbnailArray};
  }

  return (
    <>
    <GalleryBase thumbnailArray={renderContent().thumbnails} {...props} interval={props.interval*1000} >
      {renderContent().images.map((element:any,index:number)=>{
        return <img key={index} src={element} alt="" className="w-full h-full"/>
      })}
      </GalleryBase>
    </>
  );
};

export default ImageGallery;
