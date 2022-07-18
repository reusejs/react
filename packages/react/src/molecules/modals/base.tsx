import React, { ReactNode } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";

export interface ModalBaseProps {
  label?: string;
  htmlFor?: string;
  labelStyles?: any;
  variant?: string;
}

const ModalBase = (props: ModalBaseProps) => {
  const theme: any = useThemeContext();

  return <></>;
};

export default ModalBase;
