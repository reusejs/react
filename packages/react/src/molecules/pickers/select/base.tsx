import React, { ReactNode } from "react";
import "../../../../tailwind.css";
import { useThemeContext } from "../../../theme/ThemeProvider";
import resolvedStyleProps from "../../../utils/resolvedStyleProps";
import extractStyleProps from "../../../utils/extractStyleProps";
import LabelBase from "../../../atoms/labels/base";
import ScrollableBase from "../../../atoms/scrollables/base";
import useOutsideClicker from "../../../hooks/useOutsideClicker";
import useSelect from "../../../hooks/useSelect";
import { ScrollableBaseProps } from "../../../atoms/scrollables/base";

export interface PickerSelectBaseProps {
  label: string;
  value?: string;
  disabled: false;
  multiple: false;
  ariaDescribedby?: string;
  htmlFor: string;
  textInputStyles?: any;
  variant?: string;
  placeholder?: string;
  textInputPrefix?: any;
  textInputBottom?: any;
  error?: any;
  pickerSelectClasses?: {
    wrapper?: string;
  };
  scrollableClasses?: any;
  textInputErrorClasses?: {
    border?: string;
    focus?: string;
    textColor?: string;
    backgroundColor?: string;
    placeholderColor?: string;
  };
  onChange: (value?: string) => void;
  dataSource: (query?: string) => void;
  defaultSelected?: any;
  valueKey: "value";
  defaultOpen?: boolean;
  defaultQuery?: string;
  refresh?: string;
  selectedDataRenderer: any;
  searchRenderer: any;
  optionsRenderer: any;
  closeComponent?: any;
  clearComponent?: any;
  noDataComponent?: any;
}

const PickerSelectBase = React.forwardRef(
  (props: PickerSelectBaseProps, ref) => {
    const theme: any = useThemeContext();
    let allProps = Object.assign({}, props);

    if (props.error) {
      const errorStyleProps = extractStyleProps(
        "textInputErrorClasses",
        ["border", "focus", "textColor", "backgroundColor", "placeholderColor"],
        allProps,
        theme
      );

      let newPickerSelectClasses = {
        ...allProps["pickerSelectClasses"],
        ...errorStyleProps,
      };

      allProps["pickerSelectClasses"] = newPickerSelectClasses;
    }

    const wrappersClassNames = resolvedStyleProps(
      "pickerSelectClasses",
      ["wrapper"],
      props,
      theme
    );

    const {
      open,
      setOpen,
      query,
      setQuery,
      options,
      addOrRemove,
      selected,
      setSelected,
    } = useSelect(
      props.onChange,
      props.dataSource,
      props.defaultSelected,
      props.valueKey,
      props.defaultOpen,
      props.defaultQuery,
      props.refresh
    );

    const visRef = useOutsideClicker(() => {
      setOpen(false);
    });

    return (
      <>
        <div className="flex items-center justify-between">
          {props.label !== "" && <LabelBase {...props} />}

          <span className="invisible">Placeholder to prevent Jerk</span>

          {selected.length > 0 && !open && props.clearComponent && (
            <span className="cursor-pointer" onClick={() => setSelected([])}>
              <props.clearComponent />
            </span>
          )}

          {open && props.closeComponent && (
            <span className="cursor-pointer" onClick={() => setOpen(false)}>
              <props.closeComponent />
            </span>
          )}
        </div>
        <div className={wrappersClassNames}>
          {open === false && (
            <div onClick={() => setOpen(true)}>
              {props.selectedDataRenderer && (
                <props.selectedDataRenderer selected={selected} />
              )}
            </div>
          )}

          {open === true && (
            <div className="relative" ref={visRef}>
              {props.searchRenderer && (
                <props.searchRenderer
                  query={query}
                  onSearch={(v: any) => {
                    setQuery(v);
                  }}
                  cancelSearch={() => setOpen(false)}
                />
              )}

              {options.length > 0 && (
                <ScrollableBase {...props}>
                  <>
                    {options.map((option: any) => (
                      <div
                        onClick={() => {
                          addOrRemove(props.multiple, option);
                        }}
                        key={`option${option.value}`}
                      >
                        {props.optionsRenderer && (
                          <props.optionsRenderer
                            value={option}
                            selected={selected}
                          />
                        )}
                      </div>
                    ))}
                  </>
                </ScrollableBase>
              )}

              {options.length === 0 && (
                <ScrollableBase {...props}>
                  {props.noDataComponent && <props.noDataComponent />}
                </ScrollableBase>
              )}
            </div>
          )}
        </div>
        {props.error && props.error}
        {!props.error && props.textInputBottom && props.textInputBottom}
      </>
    );
  }
);

export default PickerSelectBase;
