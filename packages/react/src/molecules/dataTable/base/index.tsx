import React, {
  useState,
  useEffect,
  useImperativeHandle,
  ReactText,
} from "react";
import useDataTable from "../../../hooks/useDataTable";
import THead from "./THead";
import TRow from "./TRow";
import Filter from "./Filter";
import ButtonBase from "../../../atoms/buttons/base";
import PrevNextFullPaginator from "./PrevNextFullPaginator";

import classNames from "../../../utils/classNames";

const Paginator = () => {
  return (
    <div className="sticky bottom-0 left-0 right-0 h-16 w-full">
      <nav
        className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-900 sm:px-6"
        aria-label="Pagination"
      >
        <div className="hidden sm:block">
          <p className="text-sm text-gray-700 dark:text-gray-200">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">10</span> of{" "}
            <span className="font-medium">20</span> results
          </p>
        </div>
        <div className="flex flex-1 justify-between sm:justify-end">
          <ButtonBase label="Previous" />
          <ButtonBase label="Next" />
        </div>
      </nav>
    </div>
  );
};

const Table = React.forwardRef(function Table(
  {
    config,
    sortColumn,
    dataSource,
    perPage,
    params,
    sortOrder = "asc",
    EmptyState = () => {
      return <div className="py-32 text-2xl font-medium">No Data</div>;
    },
    LoadingState = () => {
      return <div className="py-32 text-2xl font-medium">Loading...</div>;
    },
    ...props
  }: {
    config: any;
    sortColumn: any;
    dataSource: any;
    perPage: any;
    params: any;
    sortOrder: any;
    EmptyState: any;
    LoadingState: any;
  },
  ref
) {
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
    config,
    sortOrder,
    sortColumn,
    dataSource,
    perPage,
    params,
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
                config.componentWrapperClasses
              )}
            >
              <table className="min-w-full">
                {!config.disableHeader && <THead config={config} />}

                <tbody className="divide-y divide-gray-100 bg-white dark:divide-gray-800 dark:bg-gray-900">
                  {config.filterable && (
                    <tr
                      className={classNames(
                        config.filterRowClasses || "bg-gray-50 dark:bg-gray-800"
                      )}
                    >
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

                  {loading &&
                    [1, 2, 3].map((row, j) => (
                      <tr
                        className="bg-white dark:bg-gray-900"
                        key={`loading-${j}`}
                      >
                        {config.columns.map((row: any, i: any) => (
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
                      <td colSpan={config.columns.length}>
                        <EmptyState />
                      </td>
                    </tr>
                  )}

                  {!loading && data.length ? (
                    data.map((row, i) => (
                      <TRow
                        key={`tr-${i}`}
                        uniqueKey={`tr-${i}`}
                        dataItem={row}
                        config={config}
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

export { Table, Paginator };
