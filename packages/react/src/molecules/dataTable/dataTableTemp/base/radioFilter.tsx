import React, { forwardRef, useState, useEffect } from "react";
import includes from "lodash/includes";
import indexOf from "lodash/indexOf";
import filter from "lodash/filter";
import map from "lodash/map";
import join from "lodash/join";
import classNames from "../../../utils/classNames";
import useOutsideClicker from "../../../hooks/useOutsideClicker";
import eventBus from "../../../utils/eventBus";

const SelectFilter = forwardRef(function SelectFilter(
  {
    onChange,
    options,
    selected,
    ...other
  }: {
    onChange: any;
    options: any;
    selected: any;
  },
  ref
) {
  const visRef = useOutsideClicker(() => {
    setIsOn(false);
  });

  const [isOn, setIsOn] = useState(false);
  const [selectedChoices, setSelectedChoices] = useState(selected);
  const [labelText, setLabelText] = useState("");

  const computeLabelText = (choices: any) => {
    let labels = map(choices, "label");
    if (labels.length) {
      setLabelText(join(labels, ", "));
    } else {
      setLabelText("");
    }
  };

  useEffect(() => {
    computeLabelText(selectedChoices);
  }, [selectedChoices]);

  eventBus.on("clear", () => {
    setSelectedChoices([]);
    computeLabelText([]);
  });

  const clearFilter = () => {
    setSelectedChoices([]);
    computeLabelText([]);
    onChange([]);
  };

  const handleOnChange = (value: any) => {
    setSelectedChoices([value]);
    computeLabelText([value]);
    onChange([value]);
  };

  return (
    <>
      <div className="relative inline-block" ref={visRef}>
        <div>
          <span className="rounded-md">
            <div
              onClick={() => setIsOn(!isOn)}
              className="inline-flex w-full cursor-pointer items-center justify-center text-xs  font-medium uppercase leading-5  transition duration-150 ease-in-out "
              aria-haspopup="true"
              aria-expanded="true"
            >
              <input
                value={labelText}
                type="text"
                disabled
                className="rounded border border-gray-200 bg-white px-2 py-2 text-xs text-gray-900 outline-none focus:border-blue-400 focus:ring-blue-400 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />

              <div
                className={
                  "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
                }
              >
                <svg
                  className="ml-2 -mr-1 h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="#6b7280"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
              </div>
            </div>
          </span>
        </div>

        <div
          className={classNames(
            "absolute left-0 z-50 w-40 origin-top-left rounded-md border border-gray-200 font-normal dark:border-gray-700",
            isOn ? "visible" : "invisible"
          )}
        >
          <div className="shadow-xs rounded-md bg-white dark:bg-gray-900">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div className="block space-y-4 divide-y-2 divide-gray-200 px-4 py-2 dark:divide-gray-700">
                <div className="h-32 overflow-y-scroll">
                  {/* <Radio
                    pickerWrapperClasses="mt-0"
                    multiple={true}
                    dataSource={() => options}
                    defaultSelected={selectedChoices}
                    onChange={(v) => {
                      console.log("v", v);
                      handleOnChange(v);
                    }}
                  /> */}
                </div>
                <div className="flex items-center justify-between pt-2 text-xs">
                  <span className="text-gray-500 dark:text-gray-400">
                    {options.length} items
                  </span>
                  <span
                    className="cursor-pointer  text-xs capitalize text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    onClick={clearFilter}
                  >
                    Clear
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

SelectFilter.defaultProps = {
  onChange: () => {},
  options: [],
  selected: [],
};

export default SelectFilter;
