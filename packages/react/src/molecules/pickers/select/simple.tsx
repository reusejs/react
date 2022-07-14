import React from "react";
import SelectBase, { PickerSelectBaseProps } from "./base";
import { CheckIcon, XIcon } from "@heroicons/react/solid";
import TextInputBase from "../../../atoms/textInputs/base";

const PickerSelectSimple = (props: PickerSelectBaseProps) => {
  return (
    <SelectBase
      dataSource={props.dataSource}
      selectedDataRenderer={SelectedDataRenderer}
      searchRenderer={SearchRenderer}
      optionsRenderer={OptionsRenderer}
      clearComponent={ClearComponent}
      closeComponent={CloseComponent}
      noDataComponent={NoDataComponent}
      onChange={props.onChange}
      scrollableClasses={{
        position: "z-50 block overflow-auto absolute",
        maxHeight: "max-h-32",
      }}
      label={props.label}
      multiple={props.multiple}
      disabled={props.disabled}
      htmlFor={props.htmlFor}
      valueKey={props.valueKey}
      defaultSelected={props.defaultSelected}
      defaultQuery={props.defaultQuery}
      defaultOpen={props.defaultOpen}
    />
  );
};

const SelectedDataRenderer = (props: any) => {
  const [text, setText] = React.useState<string>("None Selected");

  // console.log("selectedDataRender", props.selected);

  React.useEffect(() => {
    if (props.selected.length > 0) {
      let tempText = props.selected.map((val: any) => val.label).join("; ");
      setText(tempText);
    } else {
      setText("None Selected");
    }
  }, [props.selected]);

  return (
    <div className="relative block w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 px-3 text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600  dark:text-white sm:text-sm">
      {text}
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

  return (
    <div className="relative flex cursor-pointer flex-row items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
      <span className="flex flex-row items-center">
        {value.avatar && (
          <img className="mr-2 h-4" src={value.avatar} alt={value.label} />
        )}
        <span className="text-sm text-gray-900 dark:text-gray-200">
          {value.label}
        </span>
      </span>
      {found === true && (
        <span className="absolute inset-y-0 right-0 flex items-center pr-4">
          <CheckIcon className="h-5 w-5 text-gray-900 dark:text-white" />
        </span>
      )}
    </div>
  );
};

export default PickerSelectSimple;
