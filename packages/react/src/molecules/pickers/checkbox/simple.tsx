import React from "react";
import LabelBase from "../../../atoms/labels/base";
import TextInputBase from "../../../atoms/textInputs/base";
import theme from "../../../theme/theme";
import CheckboxBase, { PickerCheckboxBaseProps } from "./base";

const PickerCheckboxSimple = (props: PickerCheckboxBaseProps) => {
  return (
    <CheckboxBase
      name={props.name}
      dataSource={props.dataSource}
      refresh={props.refresh}
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
      textInputBaseClasses={props.textInputBaseClasses}
    />
  );
};

const OptionsRenderer = ({
  value,
  selected,
  name,
  textInputStyles,
  ...props
}: {
  value: any;
  name: any;
  selected: any;
  textInputStyles: any;
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
        type="checkbox"
        checked={found === true}
        onChange={() => {}}
        textInputBaseClasses={{
          wrapper: textInputStyles?.wrapper || "mt-0",
          alignment: textInputStyles?.alignment || "",
          width: textInputStyles?.width || "h-4 w-4",
          borderRadius: textInputStyles?.borderRadius || "",
          border:
            textInputStyles?.border || "border-gray-300 dark:border-gray-600",
          focus:
            textInputStyles?.focus ||
            "focus:border-gray-500 focus:ring-gray-500 checked:bg-gray-500",
          padding: textInputStyles?.padding || "",
          font: textInputStyles?.font || "",
          textColor:
            textInputStyles?.textColor || "text-gray-900 dark:text-white",
          backgroundColor:
            textInputStyles?.backgroundColor || "bg-white dark:bg-gray-900",
          placeholderColor: textInputStyles?.placeholderColor || "",
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
