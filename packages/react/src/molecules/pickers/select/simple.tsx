import { ArrowSmDownIcon, CheckIcon, XIcon } from "@heroicons/react/solid";
import React from "react";
import TextInputBase from "../../../atoms/textInputs/base";
import { useThemeContext } from "../../../theme/ThemeProvider";
import pickAndMergeVariants from "../../../utils/pickAndMergeVariants";
import resolvedStyleProps from "../../../utils/resolvedStyleProps";
import SelectBase, { PickerSelectBaseProps } from "./base";

export interface PickerSelectSimpleProps extends PickerSelectBaseProps {
  enableClear: boolean;
  enableClose: boolean;
  enableSearch: boolean;
}

const PickerSelectSimple = (props: PickerSelectSimpleProps) => {
  return (
    <SelectBase
      variant={props.variant}
      dataSource={props.dataSource}
      selectedDataRenderer={SelectedDataRenderer}
      searchRenderer={
        props.enableSearch ? SearchRenderer : SelectedDataRenderer
      }
      optionsRenderer={OptionsRenderer}
      clearComponent={props.enableClear ? ClearComponent : undefined}
      closeComponent={props.enableClose ? CloseComponent : undefined}
      noDataComponent={NoDataComponent}
      onChange={props.onChange}
      onOpenClose={props.onOpenClose}
      scrollableBaseProps={
        props.scrollableBaseProps || {
          scrollableBaseClasses: {
            position: "z-50 block overflow-auto absolute",
            maxHeight: "max-h-32",
          },
        }
      }
      labelBaseProps={props.labelBaseProps}
      multiple={props.multiple}
      disabled={props.disabled}
      valueKey={props.valueKey}
      defaultSelected={props.defaultSelected}
      defaultString={props.defaultString}
      defaultQuery={props.defaultQuery}
      defaultOpen={props.defaultOpen}
      pickerSelectSimpleClasses={props.pickerSelectSimpleClasses}
      refresh={props.refresh}
      error={props.error}
      customRightComponent={props.customRightComponent}
    />
  );
};

const SelectedDataRenderer = (props: any) => {
  const theme: any = useThemeContext();

  const [text, setText] = React.useState<string>(
    props.defaultString ? props.defaultString : "None Selected"
  );

  const pickerSelectSimpleClasses = pickAndMergeVariants(
    "pickerSelectSimpleClasses",
    props,
    theme
  );

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
    pickerSelectSimpleClasses
  );

  const disabledStyleClasses = resolvedStyleProps(
    "disabledStyleClasses",
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
    pickerSelectSimpleClasses
  );

  const arrowWrapperClasses = resolvedStyleProps(
    "selectedDataClasses",
    ["arrowWrapperClasses"],
    props,
    pickerSelectSimpleClasses
  );

  const arrowIconClasses = resolvedStyleProps(
    "selectedDataClasses",
    ["arrowIconClasses"],
    props,
    pickerSelectSimpleClasses
  );

  const spanFinalClasses = resolvedStyleProps(
    "selectedDataClasses",
    ["spanBaseClasses"],
    props,
    pickerSelectSimpleClasses
  );

  const placeholderClasses = resolvedStyleProps(
    "selectedDataClasses",
    ["placeholderClasses"],
    props,
    pickerSelectSimpleClasses
  );

  const finalTextClasses = [props.defaultString, "None Selected"].includes(text)
    ? placeholderClasses
    : spanFinalClasses;

  React.useEffect(() => {
    if (props.selected.length > 0) {
      let tempText = props.selected.map((val: any) => val.label).join("; ");
      setText(tempText);
    } else {
      setText(props.defaultString ? props.defaultString : "None Selected");
    }
  }, [props.selected]);

  return (
    <div className={props.disabled ? disabledStyleClasses : wrappersClassNames}>
      <span className={finalTextClasses}>{text}</span>
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

const NoDataComponent = (props: any) => {
  const theme: any = useThemeContext();

  const pickerSelectSimpleClasses = pickAndMergeVariants(
    "pickerSelectSimpleClasses",
    props,
    theme
  );

  const wrappersClassNames = resolvedStyleProps(
    "noData",
    ["wrapper"],
    props,
    pickerSelectSimpleClasses
  );

  return <div className={`${wrappersClassNames}`}>No Data</div>;
};
const NoSearchRenderer = ({
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
        labelBaseProps={{
          label: "",
        }}
        htmlFor=""
        name="country"
        type="text"
        value={query}
        placeholder="Type someting..."
        onChange={(e) => {
          onSearch(e);
        }}
        textInputBaseClasses={{
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

const SearchRenderer = ({
  query,
  onSearch,
  cancelSearch,
  variant,
}: {
  query: any;
  onSearch: any;
  cancelSearch: any;
  variant: any;
}) => {
  return (
    <div>
      <TextInputBase
        autoComplete="off"
        labelBaseProps={{
          label: "",
        }}
        htmlFor=""
        name="country"
        type="text"
        value={query}
        placeholder="Type someting..."
        onChange={(e) => {
          onSearch(e);
        }}
        variant={variant}
        textInputBaseClasses={{
          wrapper: "relative mt-0 rounded-md shadow-sm",
        }}
        forceFocus="true"
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

  const pickerSelectSimpleClasses = pickAndMergeVariants(
    "pickerSelectSimpleClasses",
    props,
    theme
  );

  const wrappersClassNames = resolvedStyleProps(
    "optionClasses",
    ["wrapper"],
    props,
    pickerSelectSimpleClasses
  );

  const labelClassNames = resolvedStyleProps(
    "optionClasses",
    ["label"],
    props,
    pickerSelectSimpleClasses
  );

  const checkIconClassNames = resolvedStyleProps(
    "optionClasses",
    ["checkIcon"],
    props,
    pickerSelectSimpleClasses
  );

  return (
    <div className={wrappersClassNames}>
      <span className={labelClassNames}>{value.label}</span>
      {found === true && (
        <span className="absolute inset-y-0 right-0 flex items-center pr-4">
          <CheckIcon className={checkIconClassNames} />
        </span>
      )}
    </div>
  );
};

export default PickerSelectSimple;
