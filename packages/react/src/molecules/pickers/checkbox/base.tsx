import React from "react";
import useSelect from "../../../hooks/useSelect";
import classNames from "../../../utils/classNames";
import { useThemeContext } from "../../../theme/ThemeProvider";
import resolvedStyleProps from "../../../utils/resolvedStyleProps";
import extractStyleProps from "../../../utils/extractStyleProps";
import LabelBase from "../../../atoms/labels/base";
import ScrollableBase from "../../../atoms/scrollables/base";
import { ScrollableBaseProps } from "../../../atoms/scrollables/base";
import { LabelBaseProps } from "../../../atoms/labels/base";

export interface PickerCheckboxBaseProps {
  labelBaseProps?: LabelBaseProps;
  scrollableBaseProps?: ScrollableBaseProps;
  name: string;
  multiple?: boolean;
  variant?: string;
  error?: any;
  pickerCheckboxSimpleClasses?: {
    optionClasses?: any;
  };
  pickerCheckboxBaseClasses?: {
    wrapper?: string;
  };
  textInputBaseErrorClasses?: {
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
  optionsRenderer?: any;
}

const PickerCheckboxBase = React.forwardRef(
  (props: PickerCheckboxBaseProps, ref) => {
    const theme: any = useThemeContext();
    let allProps = Object.assign({}, props);

    if (props.error) {
      const errorStyleProps = extractStyleProps(
        "textInputBaseErrorClasses",
        ["border", "focus", "textColor", "backgroundColor", "placeholderColor"],
        allProps,
        theme
      );

      let newpickerSelectBaseClasses = {
        ...allProps["pickerCheckboxBaseClasses"],
        ...errorStyleProps,
      };

      allProps["pickerCheckboxBaseClasses"] = newpickerSelectBaseClasses;
    }

    const wrappersClassNames = resolvedStyleProps(
      "pickerCheckboxBaseClasses",
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
        {props.labelBaseProps !== undefined && (
          <LabelBase {...props.labelBaseProps} />
        )}
        <div className={wrappersClassNames}>
          {options.length > 0 && (
            <ScrollableBase {...props.scrollableBaseProps}>
              <>
                {options.map((option: any) => (
                  <div
                    onClick={() => {
                      addOrRemove(props.multiple || false, option);
                    }}
                    key={`option${option.value}`}
                  >
                    {props.optionsRenderer && (
                      <props.optionsRenderer
                        value={option}
                        selected={selected}
                        name={props.name}
                        optionsClasses={
                          props.pickerCheckboxSimpleClasses?.optionClasses || {}
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
  }
);

export default PickerCheckboxBase;
