import React, { useEffect, useState } from "react";

export default function ({
  totalRecords,
  pageLimit,
  pageNeighbours = 1,
  onPageChanged,
}: {
  pageNeighbours: any;
  pageLimit: any;
  onPageChanged: any;
  totalRecords: any;
}) {
  const [totalPages, setTotalPages] = useState(
    Math.ceil(totalRecords / pageLimit)
  );
  const [currentPage, setCurrentPage] = useState<any>(1);
  const [pages, setPages] = useState<any>([]);

  const LEFT_PAGE = "LEFT";
  const RIGHT_PAGE = "RIGHT";

  const range = (from: number, to: number, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
      range.push(i);
      i += step;
    }

    return range;
  };

  const gotoPage = (page: number) => {
    const currentPage = Math.max(1, Math.min(page, totalPages));

    const paginationData = {
      currentPage,
      totalPages: totalPages,
      pageLimit: pageLimit,
      totalRecords: totalRecords,
    };

    setCurrentPage(currentPage);
    onPageChanged(paginationData);
  };

  const handleClick = (page: number, evt: any) => {
    evt.preventDefault();
    gotoPage(page);
  };

  const handleMoveLeft = (evt: any) => {
    evt.preventDefault();
    gotoPage(currentPage - pageNeighbours * 2 - 1);
  };

  const handleMoveRight = (evt: any) => {
    evt.preventDefault();
    gotoPage(currentPage + pageNeighbours * 2 + 1);
  };

  const fetchPageNumbers = () => {
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      let pages = [];

      const leftBound = currentPage - pageNeighbours;
      const rightBound = currentPage + pageNeighbours;
      const beforeLastPage = totalPages - 1;

      const startPage = leftBound > 2 ? leftBound : 2;
      const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

      pages = range(startPage, endPage);

      const pagesCount = pages.length;
      const singleSpillOffset = totalNumbers - pagesCount - 1;

      const leftSpill = startPage > 2;
      const rightSpill = endPage < beforeLastPage;

      const leftSpillPage = LEFT_PAGE;
      const rightSpillPage = RIGHT_PAGE;

      if (leftSpill && !rightSpill) {
        const extraPages = range(startPage - singleSpillOffset, startPage - 1);
        pages = [leftSpillPage, ...extraPages, ...pages];
      } else if (!leftSpill && rightSpill) {
        const extraPages = range(endPage + 1, endPage + singleSpillOffset);
        pages = [...pages, ...extraPages, rightSpillPage];
      } else if (leftSpill && rightSpill) {
        pages = [leftSpillPage, ...pages, rightSpillPage];
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  useEffect(() => {
    setPages(fetchPageNumbers());
  }, [currentPage]);

  useEffect(() => {
    setTotalPages(Math.ceil(totalRecords / pageLimit));
  }, [totalRecords]);

  useEffect(() => {
    gotoPage(1);
    setPages(fetchPageNumbers());
  }, [totalPages]);

  useEffect(() => {
    // console.log(pages);
  }, [pages]);

  return {
    currentPage,
    gotoPage,
    handleClick,
    handleMoveRight,
    handleMoveLeft,
  };
}
