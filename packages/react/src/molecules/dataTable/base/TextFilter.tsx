import React, { forwardRef, useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import eventBus from "../../../utils/eventBus";

const TextFilter = forwardRef(function TextFilter(
  {
    onChange,
  }: {
    onChange: any;
  },
  ref
) {
  const [filterText, setFilterText] = useState("");

  eventBus.on("clear", () => {
    setFilterText("");
  });

  const clearText = () => {
    onChange("");
    setFilterText("");
  };

  const handleOnChange = (value) => {
    onChange(value);
    setFilterText(value);
  };

  const ClearIcon = () => {
    if (filterText) {
      return (
        <button
          type="button"
          onClick={() => {
            clearText();
          }}
        >
          <XIcon className="h-4 w-4" />
        </button>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="flex items-center">
      {/* <TextInput
        onChange={(v: any) => {
          handleOnChange(v);
        }}
        defaultValue={filterText}
        basicInputClasses="block w-full rounded text-sm px-2 py-1 dark:bg-gray-900 bg-white focus:ring-blue-400 focus:border-blue-400 outline-none"
        noErrorClasses="border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white"
      />

      <div className="ml-3">
        <ClearIcon />
      </div> */}
    </div>
  );
});

TextFilter.defaultProps = {
  onChange: () => {},
};

export default TextFilter;
