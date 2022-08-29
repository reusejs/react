import React, { forwardRef, useState } from "react";
import { useThemeContext } from "../../../theme/ThemeProvider";
import Filter from "./Filter";
import resolvedStyleProps from "../../../utils/resolvedStyleProps";

const THead = ({
  config,
  applyFilter,
  ...props
}: {
  config: any;
  applyFilter: any;
}) => {
  const theme: any = useThemeContext();

  const filterRowClassNames = resolvedStyleProps(
    "dataTableBaseClasses",
    ["filterRow"],
    props,
    theme
  );

  return (
    <thead className="bg-gray-50 dark:bg-[#192130]">
      <tr>
        {config.columns.map((row: any, i: any) => (
          <th
            key={`th-${i}`}
            scope="col"
            className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-6 py-3 text-left text-xs font-normal uppercase tracking-wider text-gray-500 backdrop-blur backdrop-filter dark:border-gray-700 dark:bg-[#192130] dark:text-gray-300"
          >
            {row.label}
          </th>
        ))}
      </tr>
      {config.filterable && (
        <tr className={filterRowClassNames}>
          {config.columns.map((row: any, i: any) => (
            <Filter
              item={row}
              key={`filter${i}`}
              applyFilter={(v: any) => {
                applyFilter(row, v);
              }}
            />
          ))}
        </tr>
      )}
    </thead>
  );
};

export default THead;
