export interface BaseArrowProps {
  position?: string; //absolute flex justify-center items-center top-1/2 -translate-y-1/2
  size?: string; //w-12 h-12
  backgroundColor?: string; //bg-black
  borderRadius?: string; //rounded-full
  cursor?: string; //cursor-pointer
  textStyle?: string; //text-white text-xl
  left?: string,
  right?: string,
}

export interface SliderBaseProps {
  display: string; //flex items-center justify-center
  height: string; //h-[500px] //Best to give a height it will resize all components accordingly
  width: string; //w-full
  margin: string; //mx-auto
}
