import React, { ReactNode } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import extractStyleProps from "../../utils/extractStyleProps";
import LabelBase from "../labels/base";

export interface TextInputBaseProps {
  label: string;
  name: string;
  type: string;
  autoComplete?: string;
  value?: string;
  disabled?: boolean;
  ariaDescribedby?: string;
  htmlFor: string;
  textInputStyles?: any;
  variant?: string;
  placeholder?: string;
  textInputSuffix?: any;
  textInputPrefix?: any;
  textInputBottom?: any;
  error?: any;
  textInputClasses?: {
    wrapper?: string;
    alignment?: string;
    width?: string;
    borderRadius?: string;
    border?: string;
    focus?: string;
    padding?: string;
    font?: string;
    textColor?: string;
    backgroundColor?: string;
    placeholderColor?: string;
  };
  textInputErrorClasses?: {
    border?: string;
    focus?: string;
    textColor?: string;
    backgroundColor?: string;
    placeholderColor?: string;
  };
  onChange: (value?: string) => void;
}

const TextInputBase = React.forwardRef((props: TextInputBaseProps, ref) => {
  const theme: any = useThemeContext();
  let allProps = Object.assign({}, props);

  if (props.error) {
    const errorStyleProps = extractStyleProps(
      "textInputErrorClasses",
      ["border", "focus", "textColor", "backgroundColor", "placeholderColor"],
      allProps,
      theme
    );

    let newTextInputClasses = {
      ...allProps["textInputClasses"],
      ...errorStyleProps,
    };

    allProps["textInputClasses"] = newTextInputClasses;
  }

  //   console.log("errorStyleProps", allProps);

  const finalClassNames = resolvedStyleProps(
    "textInputClasses",
    [
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

  const wrappersClassNames = resolvedStyleProps(
    "textInputClasses",
    ["wrapper"],
    props,
    theme
  );

  // console.log(finalClassNames);

  const textInputRef = React.useRef(null);

  return (
    <>
      {props.label !== "" && <LabelBase {...props} />}
      <div className={wrappersClassNames}>
        {props.textInputPrefix && props.textInputPrefix}
        <input
          autoComplete={props.autoComplete}
          role="presentation"
          value={props.value}
          ref={textInputRef}
          type={props.type}
          name={props.name}
          className={finalClassNames}
          placeholder={props.placeholder}
          aria-describedby={props.ariaDescribedby}
          disabled={props.disabled}
          onChange={(e) => props.onChange(e.target.value)}
        />
        {props.textInputSuffix && props.textInputSuffix}
      </div>
      {props.error && props.error}
      {!props.error && props.textInputBottom && props.textInputBottom}
    </>
  );
});

export default TextInputBase;
