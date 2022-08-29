import React, { forwardRef } from "react";
import TextFilter from "./TextFilter";
import CheckboxFilter from "./checkboxFilter";
import RadioFilter from "./RadioFilter";

const Filter = forwardRef(function Filter(
  { item, applyFilter }: { item: any; applyFilter: any },
  ref
) {
  const filterable = item.filterable;
  return (
    <td className="px-6 py-3">
      {filterable && filterable.type === "text" && (
        <TextFilter
          item={item}
          onChange={(e: any) => {
            applyFilter(e);
          }}
        />
      )}

      {/* {filterable && filterable.type === "checkbox" && (
        <CheckboxFilter
          selected={filterable.selected}
          options={filterable.options}
          onChange={(e: any) => {
            applyFilter(e);
          }}
        />
      )}

      {filterable && filterable.type === "radio" && (
        <RadioFilter
          selected={filterable.selected}
          options={filterable.options}
          onChange={(e) => {
            console.log("Radio filter changed", e);
            applyFilter(e);
          }}
        />
      )} */}

      {filterable && filterable.type === "clear" && (
        <div className="pr-6 text-right">
          <span
            className="cursor-pointer text-right text-xs capitalize text-gray-500 hover:text-gray-700"
            onClick={() => {
              applyFilter("clear");
            }}
          >
            Clear
          </span>
        </div>
      )}
    </td>
  );
});

Filter.defaultProps = {};

export default Filter;
