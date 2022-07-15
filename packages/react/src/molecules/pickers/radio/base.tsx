import React from "react";
import useSelect from "../../../hooks/useSelect";
import classNames from "../../../utils/classNames";
import { useThemeContext } from "../../../theme/ThemeProvider";
import resolvedStyleProps from "../../../utils/resolvedStyleProps";
import extractStyleProps from "../../../utils/extractStyleProps";
import LabelBase from "../../../atoms/labels/base";
import ScrollableBase from "../../../atoms/scrollables/base";

export interface PickerRadioBaseProps {
  label: string;
  name: string;
  value?: string;
  disabled: false;
  multiple: false;
  ariaDescribedby?: string;
  htmlFor: string;
  textInputStyles?: any;
  variant?: string;
  placeholder?: string;
  textInputPrefix?: any;
  textInputBottom?: any;
  error?: any;
  simpleRadioPickerClasses?: {
    optionClasses?: any;
  };
  pickerRadioClasses?: {
    wrapper?: string;
  };
  scrollableClasses?: any;
  textInputErrorClasses?: {
    border?: string;
    focus?: string;
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
  optionsRenderer: any;
  noDataComponent?: any;
}

const PickerRadioBase = React.forwardRef((props: PickerRadioBaseProps, ref) => {
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
      ...allProps["pickerRadioClasses"],
      ...errorStyleProps,
    };

    allProps["pickerRadioClasses"] = newPickerSelectClasses;
  }

  const wrappersClassNames = resolvedStyleProps(
    "pickerRadioClasses",
    ["wrapper"],
    props,
    theme
  );

  const { options, addOrRemove, selected } = useSelect(
    props.onChange,
    props.dataSource,
    props.defaultSelected
  );

  return (
    <div>
      {props.label !== "" && <LabelBase {...props} />}
      <div className={wrappersClassNames}>
        {options.length > 0 && (
          <ScrollableBase {...props}>
            <>
              {options.map((option: any) => (
                <div
                  onClick={() => {
                    addOrRemove(false, option);
                  }}
                  key={`option${option.value}`}
                >
                  {props.optionsRenderer && (
                    <props.optionsRenderer
                      value={option}
                      selected={selected}
                      name={props.name}
                      optionsClasses={
                        props.simpleRadioPickerClasses?.optionClasses || {}
                      }
                    />
                  )}
                </div>
              ))}
            </>
          </ScrollableBase>
        )}
      </div>
    </div>
  );
});

export default PickerRadioBase;
