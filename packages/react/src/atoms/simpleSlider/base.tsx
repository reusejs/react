import React, { useEffect } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";

export interface SimpleSliderBaseProps {
  children: React.ReactNode[];
  id: string,
  scrollWidth: number,
}

const SimpleSliderBase = (props: SimpleSliderBaseProps) => {

  const useSliderHook = () => {
    const slideLeft = () => {
      var slider = document.getElementById(props.id) as HTMLElement;
      slider.scrollLeft = slider.scrollLeft - props.scrollWidth;
    };
    
    const slideRight = () => {
      var slider = document.getElementById("slider") as HTMLElement;
      slider.scrollLeft = slider.scrollLeft + props.scrollWidth;
    };

    return [slideLeft, slideRight];
  }

  // const slideLeft = () => {
  //   var slider = document.getElementById(props.id) as HTMLElement;
  //   slider.scrollLeft = slider.scrollLeft - props.scrollWidth;
  // };
  
  // const slideRight = () => {
  //   var slider = document.getElementById("slider") as HTMLElement;
  //   slider.scrollLeft = slider.scrollLeft + props.scrollWidth;
  // };

  const [slideLeft, slideRight] = useSliderHook();

  // useEffect(()=>{
  //   return useSliderHook(); 
  // },[])

  return (
    <div id={props.id} className="scroll grid h-full w-full auto-cols-max grid-flow-col overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide">
      {props.children}
    </div>
  );
};

export default SimpleSliderBase;
