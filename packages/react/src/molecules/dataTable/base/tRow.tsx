import React, { forwardRef, useState } from "react";
import classNames from "../../../utils/classNames";

const TRow = ({
  uniqueKey,
  dataItem,
  config,
}: {
  uniqueKey: any;
  dataItem: any;
  config: any;
}) => {
  return (
    <tr
      key={uniqueKey}
      className={classNames(
        config.enableRowClick
          ? "group cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
          : ""
      )}
      onClick={
        config.enableRowClick
          ? () => {
              config.onRowClick(dataItem);
            }
          : undefined
      }
    >
      {config.columns.map((row: any, i: any) => (
        <td
          key={`${uniqueKey}-td-${i}`}
          className={classNames(
            "whitespace-nowrap px-6 py-4 text-sm",
            typeof row.rowStyles === "function" ? row.rowStyles(dataItem) : ""
          )}
        >
          {row.resolver(dataItem)}
        </td>
      ))}
      {/* 
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              {person.name}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-300">
              {person.email}
            </div>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          Active
        </span>
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <div className="inline-flex items-center">
          <a
            href="#"
            className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-500"
          >
            View
          </a>
          <button
            type="submit"
            className="ml-3 text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-500"
            onClick={() => {
              console.log("Edit button clicked", i);
            }}
          >
            Edit
          </button>
        </div>
      </td> */}
    </tr>
  );
};

export default TRow;
