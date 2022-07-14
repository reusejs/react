import React, { ReactNode } from "react";
import "../../../../tailwind.css";
import { useThemeContext } from "../../../theme/ThemeProvider";
import resolvedStyleProps from "../../../utils/resolvedStyleProps";
import extractStyleProps from "../../../utils/extractStyleProps";
import LabelBase from "../../../atoms/labels/base";
import useOutsideClicker from "../../../hooks/useOutsideClicker";
import useSelect from "../../../hooks/useSelect";
import classNames from "../../../utils/classNames";

const NoDataComponent = () => {
  return <div className="flex h-32 items-center justify-center">No Data</div>;
};

export interface PickerSelectBaseProps {
  label: string;
  value?: string;
  disabled: false;
  multiple: false;
  ariaDescribedby?: string;
  htmlFor: string;
  textInputStyles?: any;
  variant?: string;
  placeholder?: string;
  textInputSuffix?: any;
  textInputPrefix?: any;
  textInputBottom?: any;
  error?: any;
  pickerSelectClasses?: {
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
  onChange: (value?: string) => void;
  dataSource: (query?: string) => void;
  defaultSelected?: any;
  valueKey: "value";
  defaultOpen?: boolean;
  defaultQuery?: string;
  refresh?: string;
  selectedDataRenderer: any;
  searchRenderer: any;
  optionsRenderer: any;
}

const PickerSelectBase = React.forwardRef(
  (props: PickerSelectBaseProps, ref) => {
    const theme: any = useThemeContext();
    let allProps = Object.assign({}, props);

    if (props.error) {
      const errorStyleProps = extractStyleProps(
        "textInputErrorClasses",
        ["border", "focus", "textColor", "backgroundColor", "placeholderColor"],
        allProps,
        theme
      );

      let newPickerSelectClasses = {
        ...allProps["pickerSelectClasses"],
        ...errorStyleProps,
      };

      allProps["pickerSelectClasses"] = newPickerSelectClasses;
    }

    //   console.log("errorStyleProps", allProps);

    const finalClassNames = resolvedStyleProps(
      "pickerSelectClasses",
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

    const {
      open,
      setOpen,
      query,
      setQuery,
      options,
      addOrRemove,
      selected,
      setSelected,
    } = useSelect(
      props.onChange,
      props.dataSource,
      props.defaultSelected,
      props.valueKey,
      props.defaultOpen,
      props.defaultQuery,
      props.refresh
    );

    // console.log(finalClassNames);

    const textInputRef = React.useRef(null);

    const visRef = useOutsideClicker(() => {
      setOpen(false);
    });

    return (
      <div>
        <div className="flex justify-between">
          <LabelBase {...props} />
          <div>Close/Clear</div>
        </div>
        <div className={wrappersClassNames}>
          {open === false && (
            <div
              className={classNames(
                "relative block w-full cursor-pointer rounded-md border border-gray-400 bg-white py-2 px-3 text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white sm:text-sm"
              )}
              onClick={() => setOpen(true)}
            >
              {props.selectedDataRenderer && (
                <props.selectedDataRenderer selected={selected} />
              )}

              {props.textInputSuffix && props.textInputSuffix}
            </div>
          )}

          {open === true && (
            <div className="relative" ref={visRef}>
              {props.searchRenderer && (
                <props.searchRenderer
                  query={query}
                  onSearch={(v: any) => {
                    setQuery(v);
                  }}
                  cancelSearch={() => setOpen(false)}
                />
              )}

              <div
                className={classNames(
                  "absolute z-50 block max-h-32 w-full overflow-auto rounded-md border-0 border-gray-300 bg-white shadow dark:border-gray-700 dark:bg-black"
                )}
              >
                {options.length > 0 && (
                  <>
                    {options.map((option: any) => (
                      <div
                        className={""}
                        onClick={() => {
                          addOrRemove(props.multiple, option);
                        }}
                        key={`option${option.value}`}
                      >
                        {props.optionsRenderer && (
                          <props.optionsRenderer
                            value={option}
                            selected={selected}
                          />
                        )}
                      </div>
                    ))}
                  </>
                )}

                {options.length === 0 && (
                  <>
                    <NoDataComponent />
                  </>
                )}
              </div>
            </div>
          )}
        </div>
        {props.error && props.error}
        {!props.error && props.textInputBottom && props.textInputBottom}
      </div>
    );
  }
);

export default PickerSelectBase;
