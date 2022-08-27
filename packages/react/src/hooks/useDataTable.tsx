import React, { useEffect, useState } from "react";
import isEqual from "lodash/isEqual";
import eventBus from "../utils/eventBus";
import useDidMountEffect from "./useDidMountEffect";
import useMounted from "./useMounted";
import map from "lodash/map";

export default function ({
  config,
  sortOrder,
  sortColumn,
  dataSource,
  perPage,
  params = {},
}: {
  config: any;
  sortOrder: any;
  sortColumn: any;
  dataSource: any;
  perPage: number;
  params: any;
}) {
  const [orderBy, setOrderBy] = useState({
    sortOrder: sortOrder,
    sortColumn: sortColumn,
  });
  const [query, setQuery] = useState("");

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const [refresh, setRefresh] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(1);
  const [filters, setFilters] = useState({});
  const [pagination, setPagination] = useState({});

  const { mounted, isMountedRef } = useMounted();

  useEffect(() => {
    if (refresh === true) {
      if (currentPage !== 1) {
        setCurrentPage(1);
      } else {
        fetchData();
      }
    }
  }, [refresh]);

  useDidMountEffect(() => {
    if (currentPage !== 1) {
      setCurrentPage(1);
    } else {
      // Problem: when this comp loads first time, currentPage is 1, so it will call fetchData
      // But currentPage already calls fetchData
      // So introduces two api calls
      fetchData();
    }
  }, [orderBy, filters, query]);

  useEffect(() => {
    let firstFilters = {};

    for (let index = 0; index < config?.columns?.length; index++) {
      const column = config.columns[index];
      if (column.filterable?.selected?.length > 0) {
        firstFilters = prepareFiltersObject(
          column,
          column.filterable.selected,
          firstFilters
        );
      }
    }

    if (
      !isEqual(firstFilters, filters) &&
      Object.keys(firstFilters).length > 0
    ) {
      setFilters(firstFilters);
    } else {
      fetchData();
    }
  }, [currentPage]);

  const fetchData = async () => {
    try {
      setLoading(true);

      let r = await dataSource({
        per_page: perPage,
        page: currentPage,
        sort_column: orderBy.sortColumn,
        sort_order: orderBy.sortOrder,
        filters: filters,
        ...params,
        query: query,
      });

      // console.log("r.pagination", r.pagination);

      setRefresh(false);
      setTotalRecords(r.pagination.total);
      setPagination(r.pagination);
      setData(r.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setRefresh(false);
      setLoading(false);
    }
  };

  const prepareFiltersObject = (
    column: any,
    value: any,
    currentFilters: any
  ) => {
    let prepareFilters = Object.assign({}, currentFilters);
    if (column.filterable) {
      switch (column.filterable.type) {
        case "text":
          if (value) {
            prepareFilters[column.identifier] = value;
          } else {
            delete prepareFilters[column.identifier];
          }
          break;

        case "radio":
          if (value.length) {
            prepareFilters[column.identifier] = value[0]["value"];
          } else {
            delete prepareFilters[column.identifier];
          }
          break;

        case "checkbox":
          if (value.length) {
            prepareFilters[column.identifier] = map(value, "value");
          } else {
            delete prepareFilters[column.identifier];
          }
          break;

        case "clear":
          eventBus.dispatch("clear", {});
          prepareFilters = {};
          setRefresh(true);
          break;

        default:
          break;
      }
    }

    return prepareFilters;
  };

  const applyFilter = (column: any, value: any) => {
    let prepareFilters = prepareFiltersObject(column, value, filters);

    if (!isEqual(prepareFilters, filters)) {
      setFilters(prepareFilters);
    }
  };

  return {
    orderBy,
    setOrderBy,
    loading,
    setLoading,
    data,
    setData,
    refresh,
    setRefresh,
    currentPage,
    setCurrentPage,
    totalRecords,
    setTotalRecords,
    filters,
    setFilters,
    applyFilter,
    query,
    setQuery,
    pagination,
  };
}
