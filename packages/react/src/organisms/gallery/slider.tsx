import React from "react";
import { motion } from "framer-motion";
import { SliderProps } from "./types";

const Slider = ({ x, i, onDragEnd, children }: SliderProps) => {
  return (
    <motion.div
      className="inline-block h-full w-full flex-none"
      style={{
        x,
        left: `${i * 100}%`,
        right: `${i * 100}%`,
      }}
      drag="x"
      dragElastic={0.3}
      onDragEnd={onDragEnd}
    >
      {children}
    </motion.div>
  );
};

export default Slider;
