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
  id?: string;
  disabled?: boolean;
  checked?: boolean;
  ariaDescribedby?: string;
  htmlFor: string;
  textInputStyles?: any;
  variant?: string;
  placeholder?: string;
  textInputSuffix?: any;
  textInputPrefix?: any;
  textInputBottom?: any;
  error?: any;
  textInputBaseClasses?: {
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
  textInputBaseErrorClasses?: {
    border?: string;
    focus?: string;
    textColor?: string;
    backgroundColor?: string;
    placeholderColor?: string;
  };
  onChange: (value?: string) => void;
  onBlur: (value?: string)=> void;
}

const TextInputBase = React.forwardRef((props: TextInputBaseProps, ref) => {
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
      ...allProps["textInputBaseClasses"],
      ...errorStyleProps,
    };

    allProps["textInputBaseClasses"] = newtextInputBaseClasses;
  }

  //   console.log("errorStyleProps", allProps);

  const finalClassNames = resolvedStyleProps(
    "textInputBaseClasses",
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

  const wrappersClassNames = resolvedStyleProps(
    "textInputBaseClasses",
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
          id={props.id}
          value={props.value}
          ref={textInputRef}
          type={props.type}
          name={props.name}
          className={finalClassNames}
          placeholder={props.placeholder}
          aria-describedby={props.ariaDescribedby}
          disabled={props.disabled}
          checked={props.checked}
          onChange={(e) => props.onChange(e.target.value)}
          onBlur={(e)=> props.onBlur(e.target.value)}
        />
        {props.textInputSuffix && props.textInputSuffix}
      </div>
      {props.error && props.error}
      {!props.error && props.textInputBottom && props.textInputBottom}
    </>
  );
});

export default TextInputBase;
