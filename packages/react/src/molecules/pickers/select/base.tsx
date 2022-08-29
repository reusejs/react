import React, { ReactNode, useEffect } from "react";
import "../../../../tailwind.css";
import { useThemeContext } from "../../../theme/ThemeProvider";
import resolvedStyleProps from "../../../utils/resolvedStyleProps";
import extractStyleProps from "../../../utils/extractStyleProps";
import LabelBase from "../../../atoms/labels/base";
import ScrollableBase from "../../../atoms/scrollables/base";
import useOutsideClicker from "../../../hooks/useOutsideClicker";
import useSelect from "../../../hooks/useSelect";
import { ScrollableBaseProps } from "../../../atoms/scrollables/base";
import { LabelBaseProps } from "../../../atoms/labels/base";

export interface PickerSelectBaseProps {
  labelBaseProps?: LabelBaseProps;
  scrollableBaseProps?: ScrollableBaseProps;
  multiple: false | true;
  disabled?: boolean;
  variant?: string;
  selectInputBottom?: any;
  error?: any;
  pickerSelectSimpleClasses?: {
    selectedDataClasses?: any;
    disabledStyleClasses?: any;
    optionClasses?: any;
  };
  pickerSelectBaseClasses?: {
    wrapper?: string;
  };
  textInputBaseErrorClasses?: {
    border?: string;
    focus?: string;
    textColor?: string;
    backgroundColor?: string;
    placeholderColor?: string;
  };
  onChange: (value?: string) => void;
  dataSource: (query?: string) => void;
  defaultSelected: any;
  defaultString?: string;
  valueKey: "value";
  defaultOpen?: boolean;
  defaultQuery?: string;
  refresh?: string;
  selectedDataRenderer?: any;
  searchRenderer?: any;
  optionsRenderer?: any;
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
        "textInputBaseErrorClasses",
        ["border", "focus", "textColor", "backgroundColor", "placeholderColor"],
        allProps,
        theme
      );

      let newpickerSelectBaseClasses = {
        ...allProps["pickerSelectBaseClasses"],
        ...errorStyleProps,
      };

      allProps["pickerSelectBaseClasses"] = newpickerSelectBaseClasses;
    }

    const wrappersClassNames = resolvedStyleProps(
      "pickerSelectBaseClasses",
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
          {props.labelBaseProps !== undefined && (
            <LabelBase {...props.labelBaseProps} />
          )}

          {props.clearComponent !== undefined &&
            props.closeComponent !== undefined && (
              <span className="invisible">Placeholder to prevent Jerk</span>
            )}

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
            <div onClick={() => setOpen(props.disabled ? false : true)}>
              {props.selectedDataRenderer && (
                <props.selectedDataRenderer
                  variant={props.variant}
                  defaultString={props.defaultString}
                  disabled={props.disabled}
                  selected={selected}
                  selectedDataClasses={
                    props.pickerSelectSimpleClasses?.selectedDataClasses || {}
                  }
                />
              )}
            </div>
          )}

          {open === true && (
            <div className="relative" ref={visRef}>
              {props.searchRenderer && (
                <props.searchRenderer
                  variant={props.variant}
                  query={query}
                  onSearch={(v: any) => {
                    setQuery(v);
                  }}
                  cancelSearch={() => setOpen(false)}
                  selected={selected}
                  selectedDataClasses={
                    props.pickerSelectSimpleClasses?.selectedDataClasses || {}
                  }
                />
              )}

              {options.length > 0 && (
                <ScrollableBase {...props.scrollableBaseProps}>
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
                            variant={props.variant}
                            value={option}
                            selected={selected}
                            optionsClasses={
                              props.pickerSelectSimpleClasses?.optionClasses ||
                              {}
                            }
                          />
                        )}
                      </div>
                    ))}
                  </>
                </ScrollableBase>
              )}

              {options.length === 0 && (
                <ScrollableBase {...props.scrollableBaseProps}>
                  {props.noDataComponent && (
                    <props.noDataComponent variant={props.variant} />
                  )}
                </ScrollableBase>
              )}
            </div>
          )}
        </div>
        {props.error && props.error}
        {!props.error && props.selectInputBottom && props.selectInputBottom}
      </>
    );
  }
);

export default PickerSelectBase;
