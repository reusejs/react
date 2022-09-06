export interface BaseArrowProps {
  position?: string; //absolute flex justify-center items-center top-1/2 -translate-y-1/2
  size?: string; //w-12 h-12
  backgroundColor?: string; //bg-black
  borderRadius?: string; //rounded-full
  cursor?: string; //cursor-pointer
  textStyle?: string; //text-white text-xl
}

export interface DotItemProps {
  size?: string; //"w-3 h-3"
  radius?: string; //"rounded-full"
  margin?: string; // "mx-1"
  cursor?: string; //pointer
}

export interface DotWrapperProps {
  layout?: string; //"absolute"
  bottom?: string; //"bottom-3"
  position?: string; // "flex justify-center items-center w-full"
}

export interface SliderBaseProps {
  display: string; //flex items-center justify-center
  height: string; //h-[500px] //Best to give a height it will resize all components accordingly
  width: string; //w-full
  margin: string; //mx-auto
}
