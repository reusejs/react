import React from "react";
import { useState } from "react";
import classNames from "../../utils/classNames";
import SingleDatePicker from "./single";
import { CalendarIcon } from "@heroicons/react/solid";
import { Transition } from "@headlessui/react";
import { useDateHelpers } from "../../utils/useDateHelpers";
import useOutsideClicker from "../../utils/useOutsideClicker";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import { useThemeContext } from "../../theme/ThemeProvider";
import type { CalendarBaseClassesProps } from "./single";

export interface FormLabelStyleProps {
  wrapper?: string;
  style?: string;
  textErrorColor?: string;
  textNoErrorColor?: string;
}
export interface FormLabelProps {
  children?: any;
  labelCorner?: any;
  htmlFor?: any;
  dateFormLabelClasses?: FormLabelStyleProps;
  errorText?: any;
  theme: any;
}

const FormLabel = (props: FormLabelProps) => {
  const wrapperClasses = resolvedStyleProps(
    "dateFormLabelClasses",
    ["wrapper"],
    props,
    props.theme
  );
  const styleClasses = resolvedStyleProps(
    "dateFormLabelClasses",
    ["style"],
    props,
    props.theme
  );
  const errorColorClasses = resolvedStyleProps(
    "dateFormLabelClasses",
    ["textErrorColor"],
    props,
    props.theme
  );
  const noErrorColorClasses = resolvedStyleProps(
    "dateFormLabelClasses",
    ["textNoErrorColor"],
    props,
    props.theme
  );

  return (
    <div className={wrapperClasses}>
      <label
        htmlFor={props.htmlFor}
        className={classNames(
          styleClasses,
          props.errorText === undefined
            ? noErrorColorClasses
            : errorColorClasses
        )}
      >
        {props.children}
      </label>
      {props.labelCorner}
    </div>
  );
};

export interface BaseInputPropsInterface {
  label?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  onChangeCallback: (value?: string) => void;
  defaultValue?: Date;
  disabled?: boolean;
  labelCorner?: () => void;
  errorText?: string;
  errorTextRenderer?: (text: string) => React.ReactNode;
  helperText?: string;
  userTimezone?: string;
  formLabelClasses?: FormLabelStyleProps;
  withErrorClasses?: string;
  inputWidthClass?: string;
  maxDate?: Date;
  minDate?: Date;
  screenRelative?: boolean;
  customCalendarIcon?: React.ReactNode;
  customHelperSection?: React.ReactNode;
  dateInputStyleClasses?: {
    wrapper?: string;
    position?: string;
    inputStyles?: string;
    noErrorClasses?: string;
    withErrorClasses?: string;
    dateFormatClasses?: string;
    helperTextClassess?: string;
    errorTextClassess?: string;
  };
  calendarBaseClasses?: CalendarBaseClassesProps;
}

export default function BaseInput(props: BaseInputPropsInterface) {
  const [enable, setEnable] = useState(false);
  const theme = useThemeContext();

  const { getFormattedDate } = useDateHelpers();

  const visRef = useOutsideClicker(() => {
    setEnable(false);
  });

  const returnErrorText = () => {
    if (props.errorTextRenderer && props.errorText) {
      return props.errorTextRenderer(props.errorText);
    } else {
      return props.errorText;
    }
  };

  const dateWrapper = resolvedStyleProps(
    "dateInputStyleClasses",
    ["wrapper"],
    props,
    theme
  );

  const inputPosition = resolvedStyleProps(
    "dateInputStyleClasses",
    ["position"],
    props,
    theme
  );

  const inputClasses = resolvedStyleProps(
    "dateInputStyleClasses",
    ["inputStyles"],
    props,
    theme
  );

  const noErrorClasses = resolvedStyleProps(
    "dateInputStyleClasses",
    ["noErrorClasses"],
    props,
    theme
  );

  const withErrorClasses = resolvedStyleProps(
    "dateInputStyleClasses",
    ["withErrorClasses"],
    props,
    theme
  );

  const dateFormatClasses = resolvedStyleProps(
    "dateInputStyleClasses",
    ["dateFormatClasses"],
    props,
    theme
  );

  const helperTextClassess = resolvedStyleProps(
    "dateInputStyleClasses",
    ["helperTextClassess"],
    props,
    theme
  );

  const errorTextClassess = resolvedStyleProps(
    "dateInputStyleClasses",
    ["errorTextClassess"],
    props,
    theme
  );

  const calenderWrapperClasses = resolvedStyleProps(
    "calendarBaseClasses",
    ["calenderWrapper"],
    props,
    theme
  );

  return (
    <div className={!props.screenRelative ? dateWrapper : ""} ref={visRef}>
      {props.label !== null && (
        <FormLabel
          htmlFor={props.id}
          labelCorner={props.labelCorner}
          errorText={props.errorText}
          dateFormLabelClasses={props.formLabelClasses}
          theme={theme}
        >
          {props.label ? props.label : "Select Date"}
        </FormLabel>
      )}
      <div
        className={classNames(
          "relative w-64",
          props.label !== null ? "mt-1" : ""
        )}
      >
        <button
          className={classNames(
            inputClasses,
            props.errorText === undefined ? noErrorClasses : "",
            props.errorText !== undefined ? withErrorClasses : ""
          )}
          onClick={() => {
            setEnable(true);
          }}
          onBlur={() => {
            // setEnable(false);
          }}
        >
          <div className={dateFormatClasses}>
            {getFormattedDate(
              props.defaultValue ? props.defaultValue : new Date(),
              false,
              "MMM dd, yyyy"
            )}
          </div>
          {props.customCalendarIcon ? (
            props.customCalendarIcon
          ) : (
            <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          )}
        </button>
      </div>
      {props.helperText !== "" &&
        props.errorText === undefined &&
        (props.customHelperSection ? (
          props.customHelperSection
        ) : (
          <p className={helperTextClassess}>{props.helperText}</p>
        ))}

      {props.errorText ? (
        <p className={errorTextClassess}>{returnErrorText()}</p>
      ) : null}

      {enable && (
        <div
          className={`absolute ${props.inputWidthClass} ${
            props.screenRelative ? inputPosition : ""
          }`}
        >
          <Transition
            className={calenderWrapperClasses}
            show={enable}
            enter="transition duration-1000 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-2000 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <SingleDatePicker
              selected={props.defaultValue}
              userTimezone={props.userTimezone}
              onChange={(d: any) => {
                props.onChangeCallback(d);
                setEnable(false);
              }}
              maxDate={props.maxDate}
              minDate={props.minDate}
              calendarBaseClasses={props.calendarBaseClasses}
            />
          </Transition>
        </div>
      )}
    </div>
  );
}

BaseInput.defaultProps = {
  maxDate: undefined,
  minDate: undefined,
  inputWidthClass: "w-full",
  screenRelative: false,
};
