import React, { forwardRef, useState } from "react";

const THead = ({ config }: { config: any }) => {
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
    </thead>
  );
};

export default THead;
