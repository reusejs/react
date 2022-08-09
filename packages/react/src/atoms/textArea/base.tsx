import React from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import extractStyleProps from "../../utils/extractStyleProps";
import LabelBase from "../labels/base";
import pickAndMergeVariants from "../../utils/pickAndMergeVariants";
import { LabelBaseProps } from "../labels/base";
import classNames from "../../utils/classNames";

export interface TextAreaBaseProps {
  labelBaseProps?: LabelBaseProps;
  value?: string;
  variant?: string;
  placeholder?: string;
  rows?: number;
  cols?: number;
  name?: string;
  id?: string;
  error?: any;
  textInputBottom?: any;
  disabled?: boolean;
  disabledTextAreaStylesClasses?: {
    display: string;
    border: string;
    background: string;
    width: string;
    color: string;
    font: string;
    padding: string;
    margin: string;
    shadow: string;
    opacity?: string;
  };
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
  textInputBaseErrorClasses?: {
    border?: string;
    focus?: string;
    textColor?: string;
    backgroundColor?: string;
    placeholderColor?: string;
  };
}

const TextAreaBase = (props: TextAreaBaseProps) => {
  const theme: any = useThemeContext();
  let allProps = Object.assign({}, props);

  if (props.error) {
    const errorStyleProps = extractStyleProps(
      "textInputBaseErrorClasses",
      ["border", "focus", "textColor", "backgroundColor", "placeholderColor"],
      allProps,
      theme
    );

    let newtextInputBaseClasses = {
      ...allProps["textAreaBaseClasses"],
      ...errorStyleProps,
    };

    allProps["textAreaBaseClasses"] = newtextInputBaseClasses;
  }

  const finalClassNames = resolvedStyleProps(
    "textAreaBaseClasses",
    [
      "formInput",
      "alignment",
      "width",
      "borderRadius",
      "border",
      "focus",
      "padding",
      "font",
      "textColor",
      "backgroundColor",
      "placeholderColor",
    ],
    allProps,
    theme
  );

  const disableStyleAddons = resolvedStyleProps(
    "disabledTextAreaStylesClasses",
    [
      "formInput",
      "alignment",
      "width",
      "borderRadius",
      "border",
      "focus",
      "padding",
      "font",
      "textColor",
      "backgroundColor",
      "placeholderColor",
      "opacity",
    ],
    allProps,
    theme
  );

  const wrappersClassNames = resolvedStyleProps(
    "textAreaBaseClasses",
    ["wrapper"],
    props,
    theme
  );

  const wrappersMarginClassNames = resolvedStyleProps(
    "textAreaBaseClasses",
    ["margin"],
    props,
    theme
  );

  return (
    <>
      {props?.labelBaseProps !== undefined && (
        <LabelBase {...props.labelBaseProps} />
      )}

      <div
        className={classNames(
          wrappersClassNames,
          props?.labelBaseProps?.label !== "" ? wrappersMarginClassNames : ""
        )}
      >
        <textarea
          placeholder={props.placeholder}
          className={props.disabled ? disableStyleAddons : finalClassNames}
          rows={props.rows || 4}
          cols={props.cols || 50}
          name={props.name || "Textarea input"}
          id={props.id || "Textarea input"}
          onChange={(e) => props.onChange?.(e.target.value)}
          disabled={props.disabled}
          value={props.value}
        />
      </div>

      {props.error && props.error}
      {!props.error && props.textInputBottom && props.textInputBottom}
    </>
  );
};

export default TextAreaBase;
