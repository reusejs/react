import React from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import LabelBase from "../labels/base";
import pickAndMergeVariants from "../../utils/pickAndMergeVariants";

export interface TextAreaBaseProps {
  label?: any;
  error?: any;
  htmlFor?: string;
  value?: string;
  variant?: string;
  placeholder?: string;
  rows?: number;
  cols?: number;
  onChange?: (value?: string) => void;
}

const TextAreaBase = (props: TextAreaBaseProps) => {
  const theme: any = useThemeContext();

  const textAreaBaseClasses = pickAndMergeVariants(
    "textAreaBaseClasses",
    props,
    theme
  );

  const textAreaClassNames = resolvedStyleProps(
    "wrapper",
    [
      "display",
      "border",
      "background",
      "width",
      "color",
      "font",
      "padding",
      "margin",
    ],
    props,
    textAreaBaseClasses
  );

  return (
    <>
      {props.label !== "" && <LabelBase {...props} />}

      <textarea
        placeholder={props.placeholder}
        className={textAreaClassNames}
        rows={props.rows || 4}
        cols={props.cols || 50}
        onChange={(e) => props.onChange?.(e.target.value)}
      >
        {props.value}
      </textarea>
      {props.error && props.error}
    </>
  );
};

export default TextAreaBase;
