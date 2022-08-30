import React from "react";
import CheckboxBase, { PickerCheckboxBaseProps } from "./base";
import { CheckIcon, XIcon } from "@heroicons/react/solid";
import TextInputBase from "../../../atoms/textInputs/base";
import { useThemeContext } from "../../../theme/ThemeProvider";
import resolvedStyleProps from "../../../utils/resolvedStyleProps";
import LabelBase from "../../../atoms/labels/base";
import theme from "../../../theme/theme";

const PickerCheckboxSimple = (props: PickerCheckboxBaseProps) => {
  return (
    <CheckboxBase
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
      multiple={props.multiple}
      defaultSelected={props.defaultSelected}
      pickerCheckboxBaseClasses={props.pickerCheckboxBaseClasses}
    />
  );
};

const OptionsRenderer = ({
  value,
  selected,
  name,
  ...props
}: {
  value: any;
  name: any;
  selected: any;
}) => {
  const [found, setFound] = React.useState<boolean>(false);

  React.useEffect(() => {
    let localFound = selected.some(
      (current: any) => current.value === value.value
    );
    setFound(localFound === false ? false : true);
  }, [selected]);

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
        textInputBaseClasses={{
          wrapper: "mt-0",
          alignment: "",
          width: "h-4 w-4",
          borderRadius: "",
          border: "border-gray-300 dark:border-gray-600",
          focus:
            "focus:border-gray-500 focus:ring-gray-500 checked:bg-gray-500",
          padding: "",
          font: "",
          textColor: "text-gray-900 dark:text-white",
          backgroundColor: "bg-white dark:bg-gray-900",
          placeholderColor: "",
          formInput: "none",
        }}
      />

      {/* <input
        id={value.value}
        name={name}
        type="radio"
        className="h-4 w-4 border-gray-300 bg-white text-gray-600  checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:border-gray-600 dark:bg-gray-800"
        checked={found === true}
        onChange={() => {}}
      /> */}
      <LabelBase
        htmlFor={value.value}
        label={value.label}
        labelBaseClasses={
          theme.pickerCheckboxSimpleClasses.optionClasses.labelBaseClasses
        }
      />
    </div>
  );
};

export default PickerCheckboxSimple;
