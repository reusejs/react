import React from "react";
import SelectBase, { PickerSelectBaseProps } from "./base";
import { CheckIcon, XIcon, ArrowSmDownIcon } from "@heroicons/react/solid";
import TextInputBase from "../../../atoms/textInputs/base";
import { useThemeContext } from "../../../theme/ThemeProvider";
import resolvedStyleProps from "../../../utils/resolvedStyleProps";

export interface PickerSelectSimpleProps extends PickerSelectBaseProps {
  enableClear: true;
  enableClose: true;
}

const PickerSelectSimple = (props: PickerSelectSimpleProps) => {
  return (
    <SelectBase
      dataSource={props.dataSource}
      selectedDataRenderer={SelectedDataRenderer}
      searchRenderer={SearchRenderer}
      optionsRenderer={OptionsRenderer}
      clearComponent={props.enableClear ? ClearComponent : null}
      closeComponent={props.enableClose ? CloseComponent : null}
      noDataComponent={NoDataComponent}
      onChange={props.onChange}
      scrollableClasses={
        props.scrollableClasses || {
          position: "z-50 block overflow-auto absolute",
          maxHeight: "max-h-32",
        }
      }
      label={props.label}
      multiple={props.multiple}
      disabled={props.disabled}
      htmlFor={props.htmlFor}
      valueKey={props.valueKey}
      defaultSelected={props.defaultSelected}
      defaultQuery={props.defaultQuery}
      defaultOpen={props.defaultOpen}
      simpleSelectPickerClasses={props.simpleSelectPickerClasses}
    />
  );
};

const SelectedDataRenderer = (props: any) => {
  const theme: any = useThemeContext();

  const [text, setText] = React.useState<string>("None Selected");

  const wrappersClassNames = resolvedStyleProps(
    "selectedDataClasses",
    [
      "alignment",
      "borderRadius",
      "border",
      "focus",
      "background",
      "padding",
      "text",
      "font",
      "width",
    ],
    props,
    theme.simpleSelectPickerClasses
  );

  const arrowWrapperClasses = resolvedStyleProps(
    "selectedDataClasses",
    ["arrowWrapperClasses"],
    props,
    theme.simpleSelectPickerClasses
  );

  const arrowIconClasses = resolvedStyleProps(
    "selectedDataClasses",
    ["arrowIconClasses"],
    props,
    theme.simpleSelectPickerClasses
  );

  React.useEffect(() => {
    if (props.selected.length > 0) {
      let tempText = props.selected.map((val: any) => val.label).join("; ");
      setText(tempText);
    } else {
      setText("None Selected");
    }
  }, [props.selected]);

  return (
    <div className={wrappersClassNames}>
      <span>{text}</span>
      <span className={arrowWrapperClasses}>
        <ArrowSmDownIcon className={arrowIconClasses} />
      </span>
    </div>
  );
};

const CloseComponent = () => {
  return <span className="text-sm font-medium">Close</span>;
};

const ClearComponent = () => {
  return <span className="text-sm font-medium">Clear</span>;
};

const NoDataComponent = () => {
  return <div className="flex h-32 items-center justify-center">No Data</div>;
};

const SearchRenderer = ({
  query,
  onSearch,
  cancelSearch,
}: {
  query: any;
  onSearch: any;
  cancelSearch: any;
}) => {
  return (
    <div>
      <TextInputBase
        autoComplete="off"
        label=""
        htmlFor=""
        name="country"
        type="text"
        value={query}
        placeholder="Type someting..."
        onChange={(e) => {
          onSearch(e);
        }}
        textInputClasses={{
          wrapper: "relative mt-0 rounded-md shadow-sm",
        }}
      />

      <span
        className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-2"
        onClick={() => {
          cancelSearch();
        }}
      >
        <XIcon className="h-5 w-5 text-gray-400" />
      </span>
    </div>
  );
};

const OptionsRenderer = ({
  value,
  selected,
  ...props
}: {
  value: any;
  selected: any;
}) => {
  const [found, setFound] = React.useState<boolean>(false);

  React.useEffect(() => {
    let localFound = selected.some(
      (current: any) => current.value === value.value
    );
    setFound(localFound === false ? false : true);
  }, [selected]);

  const theme: any = useThemeContext();

  const wrappersClassNames = resolvedStyleProps(
    "optionClasses",
    ["wrapper"],
    props,
    theme.simpleSelectPickerClasses
  );

  const labelClassNames = resolvedStyleProps(
    "optionClasses",
    ["label"],
    props,
    theme.simpleSelectPickerClasses
  );

  return (
    <div className={wrappersClassNames}>
      <span className={labelClassNames}>{value.label}</span>
      {found === true && (
        <span className="absolute inset-y-0 right-0 flex items-center pr-4">
          <CheckIcon className="h-5 w-5 text-gray-900 dark:text-white" />
        </span>
      )}
    </div>
  );
};

export default PickerSelectSimple;
