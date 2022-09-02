import React, { ReactNode, useEffect } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import extractStyleProps from "../../utils/extractStyleProps";
import classNames from "../../utils/classNames";
import LabelBase from "../labels/base";
import { LabelBaseProps } from "../labels/base";

export interface CheckboxBaseProps {
  name: string;
  type: string;
  labelBaseProps?: LabelBaseProps;
  value?: boolean;
  id?: string;
  disabled?: boolean;
  checked?: boolean;
  ariaDescribedby?: string;
  htmlFor: string;
  textInputStyles?: any;
  variant?: string;
  placeholder?: string;
  textInputBottom?: any;
  error?: any;
  checkboxBaseClasses?: {
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
  checkboxBaseErrorClasses?: {
    border?: string;
    focus?: string;
    textColor?: string;
    backgroundColor?: string;
    placeholderColor?: string;
  };
  onChange: () => void;
}

const CheckboxBase = React.forwardRef((props: CheckboxBaseProps, ref) => {
  const theme: any = useThemeContext();
  let allProps = Object.assign({}, props);

  if (props.error) {
    const errorStyleProps = extractStyleProps(
      "checkboxBaseErrorClasses",
      ["border", "focus", "textColor", "backgroundColor", "placeholderColor"],
      allProps,
      theme
    );

    let newcheckboxBaseClasses = {
      ...allProps["checkboxBaseClasses"],
      ...errorStyleProps,
    };

    allProps["checkboxBaseClasses"] = newcheckboxBaseClasses;
  }

  const finalClassNames = resolvedStyleProps(
    "checkboxBaseClasses",
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
    "checkboxBaseClasses",
    ["wrapper"],
    props,
    theme
  );

  const wrappersMarginClassNames = resolvedStyleProps(
    "checkboxBaseClasses",
    ["margin"],
    props,
    theme
  );

  const textInputRef = React.useRef<any>(null);

  return (
    <>
      <div className={classNames(wrappersClassNames)}>
        <input
          role="presentation"
          id={props.id}
          ref={textInputRef}
          type={"checkbox"}
          name={props.name}
          className={finalClassNames}
          placeholder={props.placeholder}
          aria-describedby={props.ariaDescribedby}
          disabled={props.disabled}
          checked={props.value}
          onChange={(e) => {
            props.onChange();
          }}
        />
        <div
          className={classNames(
            props?.labelBaseProps?.label !== "" ? wrappersMarginClassNames : ""
          )}
        >
          {props?.labelBaseProps !== undefined && (
            <LabelBase {...props.labelBaseProps} />
          )}
        </div>
      </div>
      {props.error && props.error}
      {!props.error && props.textInputBottom && props.textInputBottom}
    </>
  );
});

export default CheckboxBase;
