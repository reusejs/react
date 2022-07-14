import React from "react";
import SelectBase, { PickerSelectBaseProps } from "./base";
import { CheckIcon, XIcon } from "@heroicons/react/solid";
import TextInputBase from "../../../atoms/textInputs/base";

const PickerSelectBase = (props: PickerSelectBaseProps) => {
  return (
    <SelectBase
      //   selectedDataRenderer={SelectedDataRenderer}
      //   OptionsRenderer={OptionsRenderer}
      //   SearchRenderer={SearchRenderer}
      {...props}
    />
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
        label=""
        htmlFor=""
        name="price"
        type="text"
        value={query}
        placeholder="Type someting..."
        onChange={(e) => {
          onSearch(e);
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

const SelectedDataRenderer = (props: any) => {
  const [text, setText] = React.useState<string>("None Selected");

  React.useEffect(() => {
    if (props.selected.length > 0) {
      let tempText = props.selected.map((val: any) => val.label).join("; ");
      setText(tempText);
    } else {
      setText("None Selected");
    }
  }, [props.selected]);

  return <>{text}</>;
};

export default PickerSelectBase;
