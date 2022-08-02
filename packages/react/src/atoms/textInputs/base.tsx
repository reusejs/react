import React, { ReactNode, useEffect } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import extractStyleProps from "../../utils/extractStyleProps";
import classNames from "../../utils/classNames";
import LabelBase from "../labels/base";
import { LabelBaseProps } from "../labels/base";

export interface TextInputBaseProps {
  name: string;
  type: string;
  labelBaseProps?: LabelBaseProps;
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
    formInput?: string;
  };
  textInputBaseErrorClasses?: {
    border?: string;
    focus?: string;
    textColor?: string;
    backgroundColor?: string;
    placeholderColor?: string;
  };
  onChange: (value?: string) => void;
  onBlur?: (value?: string) => void;
  onFocus?: (value?: string) => void;
  onKeyDown?: (e: any) => void;
  forceFocus?: string;
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

  const wrappersMarginClassNames = resolvedStyleProps(
    "textInputBaseClasses",
    ["margin"],
    props,
    theme
  );

  const textInputRef = React.useRef<any>(null);

  useEffect(() => {
    if (
      props.forceFocus &&
      textInputRef.current &&
      textInputRef.current.focus
    ) {
      textInputRef.current.focus();
    }
  }, [props.forceFocus]);

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
          onBlur={(e) => {
            if (props.onBlur) {
              props.onBlur(e.target.value);
            }
          }}
          onFocus={(e) => {
            if (props.onFocus) {
              props.onFocus(e.target.value);
            }
          }}
          onKeyDown={(e) => {
            props.onKeyDown?.(e);
          }}
        />
        {props.textInputSuffix && props.textInputSuffix}
      </div>
      {props.error && props.error}
      {!props.error && props.textInputBottom && props.textInputBottom}
    </>
  );
});

export default TextInputBase;
