import React, { useState, useEffect, useImperativeHandle } from "react";
import "../../../../tailwind.css";
import { useThemeContext } from "../../../theme/ThemeProvider";
import useDataTable from "../../../hooks/useDataTable";
import THead from "./tHead";
import TRow from "./tRow";
import Filter from "./Filter";
import PrevNextFullPaginator from "./prevNextFullPaginator";
import classNames from "../../../utils/classNames";
import resolvedStyleProps from "../../../utils/resolvedStyleProps";
import extractStyleProps from "../../../utils/extractStyleProps";

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

const TableBase = React.forwardRef(
  (
    {
      config,
      sortOrder,
      sortColumn,
      dataSource,
      perPage,
      params = {},
      ...props
    }: DataTableBaseProps,
    ref
  ) => {
    const theme: any = useThemeContext();
    let allProps = Object.assign({}, props);

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

    const wrapper1ClassNames = resolvedStyleProps(
      "dataTableBaseClasses",
      ["wrapper1"],
      props,
      theme
    );

    const wrapper2ClassNames = resolvedStyleProps(
      "dataTableBaseClasses",
      ["wrapper2"],
      props,
      theme
    );

    const wrapper3ClassNames = resolvedStyleProps(
      "dataTableBaseClasses",
      ["wrapper3"],
      props,
      theme
    );

    const tableWrapperClassNames = resolvedStyleProps(
      "dataTableBaseClasses",
      ["tableWrapper"],
      props,
      theme
    );

    const bodyWrapperClassNames = resolvedStyleProps(
      "dataTableBaseClasses",
      ["bodyWrapper"],
      props,
      theme
    );

    const filterRowClassNames = resolvedStyleProps(
      "dataTableBaseClasses",
      ["filterRow"],
      props,
      theme
    );

    const loadingTrClassNames = resolvedStyleProps(
      "dataTableBaseClasses",
      ["loadingTr"],
      props,
      theme
    );

    const loadingTdClassNames = resolvedStyleProps(
      "dataTableBaseClasses",
      ["loadingTd"],
      props,
      theme
    );

    const loadingLoaderClassNames = resolvedStyleProps(
      "dataTableBaseClasses",
      ["loadingLoader"],
      props,
      theme
    );

    return (
      <>
        <div className={wrapper1ClassNames}>
          <div className={wrapper2ClassNames}>
            <div className={wrapper3ClassNames}>
              <table className={tableWrapperClassNames}>
                {!config.disableHeader && (
                  <THead config={config} applyFilter={applyFilter} />
                )}

                <tbody className={bodyWrapperClassNames}>
                  {loading &&
                    [1, 2, 3].map((row, j) => (
                      <tr className={loadingTrClassNames} key={`loading-${j}`}>
                        {config.columns.map((row: any, i: any) => (
                          <td
                            key={`loading-${j}-td-${i}`}
                            className={loadingTdClassNames}
                          >
                            <div className={loadingLoaderClassNames}></div>
                          </td>
                        ))}
                      </tr>
                    ))}

                  {!loading && data.length === 0 && (
                    <tr className="text-center">
                      <td colSpan={config.columns.length}>
                        {props.emptyStateComponent && (
                          <props.emptyStateComponent variant={props.variant} />
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
                }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
);

export default TableBase;

// export { Table, Paginator };
