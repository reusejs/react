import React, { ReactNode, useState, useEffect } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import classNames from "../../utils/classNames";
import useMounted from "../../hooks/useMounted";
import useDidMountEffect from "../../hooks/useDidMountEffect";
import { Switch } from "@headlessui/react";
import { LabelBaseProps } from "../labels/base";
import LabelBase from "../labels/base";

export interface ToggleBaseProps {
  defaultValue?: false | true;
  passive?: false | true;
  reverse?: boolean;
  description?: any;
  variant?: string;
  toggleBaseClasses?: {
    enabled?: any;
    disabled?: any;
    alignment?: any;
    focus?: any;
    size?: any;
    border?: any;
    circleSizeClasses?: any;
    circleColorClasses?: any;
    circleAlignmentClasses?: any;
    circleEnabledClasses?: any;
    circleDisabledClasses?: any;
    label?: any;
    description?: any;
  };
  labelBaseProps?: LabelBaseProps;
  onChange: (value?: boolean) => void;
}

const ToggleBase = (props: ToggleBaseProps) => {
  const theme: any = useThemeContext();

  const [enabled, setEnabled] = useState<boolean>(props.defaultValue || false);

  useDidMountEffect(() => {
    props.onChange(enabled);
  }, [enabled]);

  useEffect(() => {
    setEnabled(props.defaultValue || false);
  }, [props.defaultValue]);

  const alignmentClasses = resolvedStyleProps(
    "toggleBaseClasses",
    ["alignment", "focus", "size", "border"],
    props,
    theme
  );

  const enabledClasses = resolvedStyleProps(
    "toggleBaseClasses",
    ["enabled"],
    props,
    theme
  );

  const disabledClasses = resolvedStyleProps(
    "toggleBaseClasses",
    ["disabled"],
    props,
    theme
  );

  const circleEnabledClasses = resolvedStyleProps(
    "toggleBaseClasses",
    ["circleEnabledClasses"],
    props,
    theme
  );

  const circleDisabledClasses = resolvedStyleProps(
    "toggleBaseClasses",
    ["circleDisabledClasses"],
    props,
    theme
  );

  const circleAlignmentClasses = resolvedStyleProps(
    "toggleBaseClasses",
    ["circleSizeClasses", "circleColorClasses", "circleAlignmentClasses"],
    props,
    theme
  );

  const labelClasses = resolvedStyleProps(
    "toggleBaseClasses",
    ["label"],
    props,
    theme
  );

  const descriptionClasses = resolvedStyleProps(
    "toggleBaseClasses",
    ["description"],
    props,
    theme
  );

  return (
    <Switch.Group
      as="div"
      className={classNames(
        "flex items-center",
        props.reverse ? " flex-row-reverse" : ""
      )}
    >
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled ? enabledClasses : disabledClasses,
          alignmentClasses
        )}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={classNames(
            enabled ? circleEnabledClasses : circleDisabledClasses,
            circleAlignmentClasses
          )}
        />
      </Switch>
      <span className="flex flex-grow flex-col">
        {props?.labelBaseProps !== undefined && (
          <Switch.Label
            as="span"
            className={labelClasses}
            passive={props.passive}
          >
            {props?.labelBaseProps !== undefined && (
              <LabelBase {...props.labelBaseProps} />
            )}
          </Switch.Label>
        )}
        {props.description && (
          <Switch.Description as="span" className={descriptionClasses}>
            {props.description}
          </Switch.Description>
        )}
      </span>
    </Switch.Group>
  );
};

export default ToggleBase;
