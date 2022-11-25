import React, { useEffect, useState } from "react";
import useDidMountEffect from "./useDidMountEffect";

export default function (
  onChange: (option: any) => void,
  dataSource: (query?: string) => void,
  defaultSelected = [],
  valueKey = "value",
  defaultOpen = false,
  defaultQuery = "",
  refresh = ""
) {
  const [open, setOpen] = useState<boolean>(defaultOpen);
  const [query, setQuery] = useState<string>(defaultQuery);
  const [options, setOptions] = useState<any>([]);
  const [selected, setSelected] = useState<any>(defaultSelected);

  const onTyping = async (query?: string) => {
    let dropdownOptions = await dataSource(query);
    dropdownOptions = Object.assign([], dropdownOptions);
    setOptions(dropdownOptions);
  };

  useDidMountEffect(() => {
    setSelected([]);
    onTyping();
  }, [refresh]);

  useEffect(() => {
    setSelected(defaultSelected);
  }, [defaultSelected]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onTyping(query);
    }, 200);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  const addOrRemove = (multiple: boolean, option: any) => {
    if (!multiple) {
      setSelected([option]);
      onChange(option);
      setOpen(false);
    } else {
      if (
        !selected?.some((current: any) => current[valueKey] === option[valueKey])
      ) {
        if (multiple) {
          onChange([...selected, option]);
          setSelected([...selected, option]);
        }
      } else {
        let selectionAfterRemoval = selected;
        selectionAfterRemoval = selectionAfterRemoval.filter(
          (current: any) => current[valueKey] !== option[valueKey]
        );
        onChange([...selectionAfterRemoval]);
        setSelected([...selectionAfterRemoval]);
      }
    }
  };

  return {
    open,
    setOpen,
    query,
    setQuery,
    options,
    setOptions,
    selected,
    setSelected,
    addOrRemove,
  };
}
