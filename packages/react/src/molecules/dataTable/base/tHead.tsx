import React, { forwardRef, useState } from "react";
import { useThemeContext } from "../../../theme/ThemeProvider";
import Filter from "./filter";
import resolvedStyleProps from "../../../utils/resolvedStyleProps";

const THead = ({
  config,
  applyFilter,
  ...props
}: {
  config: any;
  applyFilter: any;
  variant?: string;
}) => {
  const theme: any = useThemeContext();

  const filterRowClassNames = resolvedStyleProps(
    "dataTableBaseClasses",
    ["filterRow"],
    props,
    theme
  );

  const headerClassNames = resolvedStyleProps(
    "dataTableBaseClasses",
    ["headerClasses"],
    props,
    theme
  );

  const headerWrapperClassNames = resolvedStyleProps(
    "dataTableBaseClasses",
    ["headerWrapperClasses"],
    props,
    theme
  );

  return (
    <thead className={headerWrapperClassNames}>
      <tr>
        {config.columns.map((row: any, i: any) => (
          <th key={`th-${i}`} scope="col" className={headerClassNames}>
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
