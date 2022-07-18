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
}

const PickerRadioBase = React.forwardRef((props: PickerRadioBaseProps, ref) => {
  const theme: any = useThemeContext();
  let allProps = Object.assign({}, props);
  const styleArray = [
    "absolute w-32 h-8 rounded-full bg-amber-400 transition-all",
    "absolute w-32 h-8 rounded-full bg-lime-400 translate-x-32 transition-all",
    "absolute w-32 h-8 rounded-full bg-indigo-400 translate-x-64 transition-all",
  ];

  const [selectedDivStyle, setSelectedDivStyle] = React.useState<string>(styleArray[0]);

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
    props.defaultSelected
  );

  return (
<<<<<<< HEAD
    <div className="relative">
      {props.label !== "" && <LabelBase {...props} />}
=======
    <div>
      {props.labelBaseProps !== undefined && (
        <LabelBase {...props.labelBaseProps} />
      )}
>>>>>>> f083541747777dd4fd2542a0a2324cc3ea9d4f2a
      <div className={wrappersClassNames}>
        {options.length > 0 && (
          <ScrollableBase {...props.scrollableBaseProps}>
            <>
<<<<<<< HEAD
              <div className="relative flex">
                <div className={selectedDivStyle}>{''}</div>
                  {options.map((option: any, index: number) => (
                  <div
                    onClick={() => {
                      addOrRemove(false, option);
                      setSelectedDivStyle(styleArray[index]);
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
              </div>
=======
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
                    />
                  )}
                </div>
              ))}
>>>>>>> f083541747777dd4fd2542a0a2324cc3ea9d4f2a
            </>
          </ScrollableBase>
        )}
      </div>
    </div>
  );
});

export default PickerRadioBase;
