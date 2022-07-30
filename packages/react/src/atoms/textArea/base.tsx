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
  defaultValue?: string;
  variant?: string;
  placeholder?: string;
  rows?: number;
  cols?: number;
  name?: string;
  id?: string;
  onChange?: (value?: string) => void;
  textAreaBaseClasses?: {
    display: string;
    border: string;
    background: string;
    width: string;
    color: string;
    font: string;
    padding: string;
    margin: string;
    shadow: string;
  };
}

const TextAreaBase = (props: TextAreaBaseProps) => {
  const theme: any = useThemeContext();
  let allProps = Object.assign({}, props);

  const finalClassNames = resolvedStyleProps(
    "textAreaBaseClasses",
    [
      "display",
      "border",
      "background",
      "width",
      "color",
      "font",
      "padding",
      "shadow",
    ],
    allProps,
    theme
  );

  const marginClassNames = resolvedStyleProps(
    "textAreaBaseClasses",
    ["margin"],
    props,
    theme
  );

  return (
    <>
      {props.label && props.label !== "" && <LabelBase {...props} />}

      <div
        className={props.label && props.label !== "" ? marginClassNames : ""}
      >
        <textarea
          placeholder={props.placeholder}
          className={finalClassNames}
          rows={props.rows || 4}
          cols={props.cols || 50}
          name={props.name || "Textarea input"}
          id={props.id || "Textarea input"}
          onChange={(e) => props.onChange?.(e.target.value)}
          defaultValue={props.defaultValue || ""}
        />
      </div>

      {props.error && props.error}
    </>
  );
};

export default TextAreaBase;
