import React, { forwardRef, useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import eventBus from "../../../utils/eventBus";
import TextInputBase from "../../../atoms/textInputs/base";

const TextFilter = forwardRef(function TextFilter(
  {
    item,
    onChange,
  }: {
    item: any;
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

  const handleOnChange = (value: any) => {
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
      <TextInputBase
        type="text"
        name={item.identifier}
        htmlFor={item.identifier}
        onChange={(v: any) => {
          handleOnChange(v);
        }}
        value={filterText}
      />

      <div className="ml-3">
        <ClearIcon />
      </div>
    </div>
  );
});

TextFilter.defaultProps = {
  onChange: () => {},
};

export default TextFilter;
