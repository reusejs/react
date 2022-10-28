import React from "react";
import { useRef, useState, Fragment } from "react";
import classNames from "../../utils/classNames";
import SingleDatePicker from "./single";
import { CalendarIcon } from "@heroicons/react/solid";
import { Dialog, Transition } from "@headlessui/react";
import { useDateHelpers } from "../../utils/useDateHelpers";
import useOutsideClicker from "../../utils/useOutsideClicker";

export interface FormLabelProps {
  children?: any;
  labelCorner?: any;
  htmlFor?: any;
  formLabelClasses?: any;
  errorText?: any;
  // selected?: any;
}

const FormLabel = (props: FormLabelProps) => {
  {
    return (
      <div className="relative flex justify-between">
        <label
          htmlFor={props.htmlFor}
          className={classNames(
            props.formLabelClasses || "block text-sm font-normal",
            props.errorText === undefined
              ? "text-gray-900 dark:text-white"
              : "",
            props.errorText !== undefined
              ? "text-red-600 dark:text-red-200"
              : ""
          )}
        >
          {props.children}
        </label>
        {props.labelCorner}
      </div>
    );
  }
};

export interface BaseInputPropsInterface {
  label?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  onChangeCallback: (value?: string) => void;
  defaultValue?: any;
  disabled?: boolean;
  labelCorner?: () => void;
  errorText?: string;
  errorTextRenderer?: any;
  helperText?: string;
  userTimezone?: string;
  FormLabelComponent?: any;
  formLabelClasses?: string;
  noErrorClasses?: string;
  withErrorClasses?: string;
  errorTextClassess?: string;
  helperTextClassess?: string;
  inputWidthClass?: string;
}

export default function BaseInput(props: BaseInputPropsInterface) {
  const [enable, setEnable] = useState(false);

  const { getFormattedDate } = useDateHelpers();

  const visRef = useOutsideClicker(() => {
    setEnable(false);
  });

  return (
    <div
      className={`relative ${
        props.inputWidthClass ? props.inputWidthClass : ""
      }`}
      ref={visRef}
    >
      {props.label !== null && (
        <FormLabel
          htmlFor={props.id}
          labelCorner={props.labelCorner}
          errorText={props.errorText}
          formLabelClasses={props.formLabelClasses}
        >
          {props.label ? props.label : "Date2"}
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
            "flex w-full items-center rounded bg-white px-3 py-2 text-sm outline-none focus:border-blue-400 focus:ring-blue-400 dark:bg-gray-900",
            props.errorText === undefined
              ? props.noErrorClasses ||
                  "border border-gray-400 text-gray-900 dark:border-gray-700 dark:text-white"
              : "",
            props.errorText !== undefined
              ? props.withErrorClasses ||
                  "border border-red-600 text-red-900 placeholder-red-300 dark:border-red-200 dark:text-red-200"
              : ""
          )}
          onClick={() => {
            setEnable(true);
          }}
          onBlur={() => {
            // setEnable(false);
          }}
        >
          <div className="h-5 flex-1 text-left">
            {getFormattedDate(
              props.defaultValue ? props.defaultValue : new Date(),
              false,
              "MMM dd, yyyy"
            )}
          </div>
          <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </button>
      </div>
      {props.helperText !== "" && props.errorText === undefined && (
        <p
          className={
            props.helperTextClassess ||
            "mt-2 text-sm text-gray-900 dark:text-white"
          }
        >
          {props.helperText}
        </p>
      )}
      {props.errorText !== undefined && (
        <p
          className={
            props.errorTextClassess ||
            "mt-2 text-sm text-red-600 dark:text-red-200"
          }
        >
          {props.errorTextRenderer(props.errorText)}
        </p>
      )}

      {enable && (
        <Transition
          show={enable}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <div className="absolute z-50 block w-full overflow-auto rounded-lg bg-white shadow-xl  shadow-gray-200 hover:shadow-xl dark:bg-gray-900 dark:shadow-gray-800">
            <SingleDatePicker
              selected={props.defaultValue}
              userTimezone={props.userTimezone}
              onChange={(d: any) => {
                props.onChangeCallback(d);
                setEnable(false);
              }}
            />
          </div>
        </Transition>
      )}
    </div>
  );
}
