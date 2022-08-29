import React, { useState, useEffect, useImperativeHandle } from "react";
import "../../../../tailwind.css";
import { useThemeContext } from "../../../theme/ThemeProvider";
import useDataTable from "../../../hooks/useDataTable";
import THead from "./THead";
import TRow from "./TRow";
import Filter from "./Filter";
import PrevNextFullPaginator from "./PrevNextFullPaginator";
import classNames from "../../../utils/classNames";

export interface DataTableBaseProps {
  variant?: string;
  config: any;
  sortColumn: any;
  dataSource: any;
  perPage: any;
  params: any;
  sortOrder: any;
  emptyStateComponent?: any;
  LoadingState: any;
}

const TableBase = React.forwardRef((
  props: DataTableBaseProps, ref
) => {
  const {
    orderBy,
    setOrderBy,
    loading,
    setLoading,
    data,
    setRefresh,
    setCurrentPage,
    totalRecords,
    filters,
    applyFilter,
  } = useDataTable({
    props.props.config,
    props.sortOrder,
    props.sortColumn,
    props.dataSource,
    props.perPage,
    props.params,
  });

  useImperativeHandle(ref, () => {
    return {
      refresh: () => {
        setRefresh(true);
      },
      manualSetLoading: (v: React.SetStateAction<boolean>) => {
        setLoading(v);
      },
      setCurrentPage: (page: React.SetStateAction<number>) => {
        setCurrentPage(page);
      },
    };
  });

  // console.log("loading", loading);

  return (
    <>
      <div className="flex flex-col">
        <div>
          <div className="inline-block min-w-full align-middle">
            <div
              className={classNames(
                "initial:md:rounded-md",
                "initial:border initial:dark:border overflow-hidden border-gray-200 ring-1 ring-black ring-opacity-5 dark:border-gray-700",
                props.config.componentWrapperClasses
              )}
            >
              <table className="min-w-full">
                {!props.config.disableHeader && <THead props.config={props.config} />}

                <tbody className="divide-y divide-gray-100 bg-white dark:divide-gray-800 dark:bg-gray-900">
                  {props.config.filterable && (
                    <tr
                      className={classNames(
                        props.config.filterRowClasses || "bg-gray-50 dark:bg-gray-800"
                      )}
                    >
                      {props.config.columns.map((row: any, i: any) => (
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

                  {loading &&
                    [1, 2, 3].map((row, j) => (
                      <tr
                        className="bg-white dark:bg-gray-900"
                        key={`loading-${j}`}
                      >
                        {props.config.columns.map((row: any, i: any) => (
                          <td
                            key={`loading-${j}-td-${i}`}
                            className="animate-pulse whitespace-nowrap px-6 py-4 text-sm"
                          >
                            <div className="rounded-xs h-6 bg-gray-100 dark:bg-gray-800"></div>
                          </td>
                        ))}
                      </tr>
                    ))}

                  {!loading && data.length === 0 && (
                    <tr className="text-center ">
                      <td colSpan={props.config.columns.length}>
                        {emptyStateComponent && (
                          <emptyStateComponent variant={props.variant} />
                        )}
                      </td>
                    </tr>
                  )}

                  {!loading && data.length ? (
                    data.map((row, i) => (
                      <TRow
                        key={`tr-${i}`}
                        uniqueKey={`tr-${i}`}
                        dataItem={row}
                        props.config={props.config}
                      />
                    ))
                  ) : (
                    <></>
                  )}
                </tbody>
              </table>

              <PrevNextFullPaginator
                totalRecords={totalRecords}
                pageLimit={perPage}
                pageNeighbours={1}
                onPageChanged={(data: any) => {
                  setCurrentPage(data.currentPage);
                  // setCurrentPage(data.currentPage);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
});


export default TableBase;

// export { Table, Paginator };
