import React, { useState, useEffect, useImperativeHandle } from "react";
import classNames from "../../../utils/classNames";
import usePaginator from "../../../hooks/usePaginator";
import ButtonBase from "../../../atoms/buttons/base";
import { useThemeContext } from "../../../theme/ThemeProvider";
import resolvedStyleProps from "../../../utils/resolvedStyleProps";

const PrevNextFullPaginator = React.forwardRef(function PrevNextFullPaginator(
  {
    pageLimit,
    onPageChanged,
    totalRecords,
    pageNeighbours,
    ...props
  }: {
    pageLimit: any;
    onPageChanged: any;
    totalRecords: any;
    pageNeighbours: any;
    variant?: string;
  },
  ref
) {
  // const [totalRecords, setTotalRecords] = useState(0);

  const { gotoPage, currentPage } = usePaginator({
    totalRecords,
    pageLimit,
    onPageChanged,
    pageNeighbours,
  });

  // useImperativeHandle(ref, () => {
  //   return {
  //     setTotalRecords: (total: React.SetStateAction<number>) => {
  //       setTotalRecords(total);
  //     },
  //   };
  // });

  const theme: any = useThemeContext();

  const navClassNames = resolvedStyleProps(
    "dataTableBaseClasses",
    ["navClasses"],
    props,
    theme
  );
  const navTextClassNames = resolvedStyleProps(
    "dataTableBaseClasses",
    ["navTextClasses"],
    props,
    theme
  );
  return (
    <>
      {totalRecords > pageLimit && (
        <div className="sticky bottom-0 left-0 right-0 h-16 w-full">
          <nav className={navClassNames} aria-label="Pagination">
            <div className="hidden sm:block">
              <p className={navTextClassNames}>
                Showing{" "}
                <span className="font-medium">
                  {(parseInt(currentPage) - 1) * pageLimit + 1}
                </span>{" "}
                to{" "}
                {currentPage * pageLimit <= totalRecords && (
                  <span className="font-medium">{currentPage * pageLimit}</span>
                )}
                {currentPage * pageLimit > totalRecords && (
                  <span className="font-medium">{totalRecords}</span>
                )}{" "}
                of <span className="font-medium">{totalRecords}</span> results
              </p>
              {/* Current: {currentPage} */}
            </div>
            <div className="flex flex-1 justify-between space-x-4 sm:justify-end">
              <ButtonBase
                onClick={() => {
                  gotoPage(currentPage - 1);
                }}
                disabled={currentPage === 1}
                label="Previous"
                variant={props.variant}
              />
              <ButtonBase
                onClick={() => {
                  gotoPage(currentPage + 1);
                }}
                label="Next"
                variant={props.variant}
              />
            </div>
          </nav>
        </div>
      )}
    </>
  );
});

export default PrevNextFullPaginator;
