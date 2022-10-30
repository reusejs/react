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

export interface PickerRadioBaseProps {
  labelBaseProps?: LabelBaseProps;
  radioOptionLabelClasses?: any;
  scrollableBaseProps?: ScrollableBaseProps;
  name: string;
  variant?: string;
  error?: any;
  pickerRadioSimpleClasses?: {
    optionClasses?: any;
  };
  pickerRadioBaseClasses?: {
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
  optionsRenderer: any;
  radioBoxStyleClasses?: {
    wrapper: string;
    alignment: string;
    width: string;
    borderRadius: string;
    border: string;
    focus: string;
    padding: string;
    font: string;
    textColor: string;
    backgroundColor: string;
    placeholderColor: string;
  };
  refresh?: string;
}

const PickerRadioBase = React.forwardRef((props: PickerRadioBaseProps, ref) => {
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
      ...allProps["pickerRadioBaseClasses"],
      ...errorStyleProps,
    };

    allProps["pickerRadioBaseClasses"] = newpickerSelectBaseClasses;
  }

  const wrappersClassNames = resolvedStyleProps(
    "pickerRadioBaseClasses",
    ["wrapper"],
    props,
    theme
  );

  const { options, addOrRemove, selected } = useSelect(
    props.onChange,
    props.dataSource,
    props.defaultSelected,
    props.valueKey,
    props.defaultOpen,
    props.defaultQuery,
    props.refresh
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
                        props.pickerRadioSimpleClasses?.optionClasses || {}
                      }
                      radioBoxStyleClasses={props.radioBoxStyleClasses}
                      radioOptionLabelClasses={props.radioOptionLabelClasses}
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
