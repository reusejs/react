import React, { useEffect } from "react";
import useSelect from "../../../hooks/useSelect";
import classNames from "../../../utils/classNames";
import { useThemeContext } from "../../../theme/ThemeProvider";
import resolvedStyleProps from "../../../utils/resolvedStyleProps";
import extractStyleProps from "../../../utils/extractStyleProps";
import LabelBase from "../../../atoms/labels/base";
import ScrollableBase from "../../../atoms/scrollables/base";
import { ScrollableBaseProps } from "../../../atoms/scrollables/base";
import { LabelBaseProps } from "../../../atoms/labels/base";

export interface PickerRadioAnimatedProps {
  labelBaseProps?: LabelBaseProps;
  scrollableBaseProps?: ScrollableBaseProps;
  name: string;
  variant?: string;
  error?: any;
  selectorColor: string;
  pickerRadioSimpleClasses?: {
    optionClasses?: any;
  };
  pickerRadioAnimatedClasses?: {
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

const PickerRadioAnimated = React.forwardRef((props: PickerRadioAnimatedProps, ref) => {
  const theme: any = useThemeContext();
  let allProps = Object.assign({}, props);
  const styleArray = [
    "absolute w-32 h-8 rounded-full bg-indigo-400 transition-all " + props.selectorColor,
    "absolute w-32 h-8 rounded-full bg-indigo-400 translate-x-32 transition-all " + props.selectorColor,
    "absolute w-32 h-8 rounded-full bg-indigo-400 translate-x-64 transition-all " + props.selectorColor,
    "absolute w-32 h-8 rounded-full bg-indigo-400 translate-x-96 transition-all " + props.selectorColor,
    "absolute w-32 h-8 rounded-full bg-indigo-400 translate-x-[512px] transition-all " + props.selectorColor,
    "absolute w-32 h-8 rounded-full bg-indigo-400 translate-x-[640px] transition-all " + props.selectorColor,
    "absolute w-32 h-8 rounded-full bg-indigo-400 translate-x-[768px] transition-all " + props.selectorColor,
    "absolute w-32 h-8 rounded-full bg-indigo-400 translate-x-[896px] transition-all " + props.selectorColor,
    "absolute w-32 h-8 rounded-full bg-indigo-400 translate-x-[1024px] transition-all " + props.selectorColor,
  ];

  const [selectedDivStyle, setSelectedDivStyle] = React.useState<string>(styleArray[0]);

  if (props.error) {
    const errorStyleProps = extractStyleProps(
      "textInputBaseErrorClasses",
      ["border", "focus", "textColor", "backgroundColor", "placeholderColor"],
      allProps,
      theme
    );

    let newpickerSelectAnimatedClasses = {
      ...allProps["pickerRadioAnimatedClasses"],
      ...errorStyleProps,
    };

    allProps["pickerRadioAnimatedClasses"] = newpickerSelectAnimatedClasses;
  }

  const wrappersClassNames = resolvedStyleProps(
    "pickerRadioAnimatedClasses",
    ["wrapper"],
    props,
    theme
  );

  const { options, addOrRemove, selected } = useSelect(
    props.onChange,
    props.dataSource,
    props.defaultSelected
  );

  // useEffect(()=>{
  //   console.log(props);
  // }, [])

  return (
    <div>
      {props.labelBaseProps !== undefined && (
        <LabelBase {...props.labelBaseProps} />
      )}
      <div className={wrappersClassNames}>
        {options.length > 0 && (
          <ScrollableBase {...props.scrollableBaseProps}>
            <>
              <div className="relative flex text-center">
                {(selected.length === 0) ? null : <div className={selectedDivStyle}>{''}</div> }
                {options.map((option: any, index: number) => (
                  <div
                    onClick={() => {
                      addOrRemove(false, option);
                      setSelectedDivStyle(styleArray[index]);
                    }}
                    key={`option${option.value}`}
                    className="z-50"
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
              </div>
            </>
          </ScrollableBase>
        )}
      </div>
    </div>
  );
});

export default PickerRadioAnimated;
