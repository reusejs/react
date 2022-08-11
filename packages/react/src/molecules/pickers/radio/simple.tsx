import React from "react";
import RadioBase, { PickerRadioBaseProps } from "./base";
import { CheckIcon, XIcon } from "@heroicons/react/solid";
import TextInputBase from "../../../atoms/textInputs/base";
import { useThemeContext } from "../../../theme/ThemeProvider";
import resolvedStyleProps from "../../../utils/resolvedStyleProps";
import LabelBase from "../../../atoms/labels/base";
import theme from "../../../theme/theme";

const PickerRadioSimple = (props: PickerRadioBaseProps) => {
  return (
    <RadioBase
      name={props.name}
      dataSource={props.dataSource}
      optionsRenderer={OptionsRenderer}
      onChange={props.onChange}
      scrollableBaseProps={
        props.scrollableBaseProps || {
          scrollableBaseClasses: {
            position: "z-50 block space-y-4",
            maxHeight: "",
            border: "border-0",
            background: "bg-white",
            borderRadius: "",
          },
        }
      }
      labelBaseProps={props.labelBaseProps}
      valueKey={props.valueKey}
      defaultSelected={props.defaultSelected}
      pickerRadioBaseClasses={props.pickerRadioBaseClasses}
      radioBoxStyleClasses={props.radioBoxStyleClasses}
      radioOptionLabelClasses={props.radioOptionLabelClasses}
    />
  );
};

const OptionsRenderer = ({
  value,
  selected,
  name,
  radioBoxStyleClasses,
  radioOptionLabelClasses,
  ...props
}: {
  value: any;
  name: any;
  selected: any;
  radioBoxStyleClasses: any;
  radioOptionLabelClasses: any;
}) => {
  const [found, setFound] = React.useState<boolean>(false);

  React.useEffect(() => {
    let localFound = selected.some(
      (current: any) => current.value === value.value
    );
    setFound(localFound === false ? false : true);
  }, [selected]);

  const getLabelClasses = () => {
    return radioOptionLabelClasses
      ? {
          ...theme.radioOptionLabelClasses,
          ...radioOptionLabelClasses,
        }
      : theme.radioOptionLabelClasses;
  };

  return (
    <div className="flex items-center">
      <TextInputBase
        labelBaseProps={{
          label: "",
        }}
        htmlFor=""
        id={value.value}
        name={name}
        type="radio"
        checked={found === true}
        onChange={() => {}}
        textInputBaseClasses={
          radioBoxStyleClasses
            ? { ...theme.radioBoxStyleClasses, ...radioBoxStyleClasses }
            : theme.radioBoxStyleClasses
        }
      />
      <LabelBase
        htmlFor={value.value}
        label={value.label}
        labelBaseClasses={getLabelClasses()}
      />
    </div>
  );
};

export default PickerRadioSimple;
