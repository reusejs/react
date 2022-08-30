import React, { useState, useEffect, useImperativeHandle } from "react";
import classNames from "../../../utils/classNames";
import usePaginator from "../../../hooks/usePaginator";
import ButtonBase from "../../../atoms/buttons/base";

const PrevNextFullPaginator = React.forwardRef(function PrevNextFullPaginator(
  {
    pageLimit,
    onPageChanged,
    totalRecords,
    pageNeighbours,
  }: {
    pageLimit: any;
    onPageChanged: any;
    totalRecords: any;
    pageNeighbours: any;
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

  return (
    <>
      {totalRecords > pageLimit && (
        <div className="sticky bottom-0 left-0 right-0 h-16 w-full">
          <nav
            className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 dark:border-gray-800 dark:bg-[#192130] sm:px-6"
            aria-label="Pagination"
          >
            <div className="hidden sm:block">
              <p className="text-sm text-gray-700 dark:text-gray-200">
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
              />
              <ButtonBase
                onClick={() => {
                  gotoPage(currentPage + 1);
                }}
                label="Next"
              />
            </div>
          </nav>
        </div>
      )}
    </>
  );
});

export default PrevNextFullPaginator;
