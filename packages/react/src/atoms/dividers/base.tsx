import React, { ReactNode } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import classNames from "../../utils/classNames";

export interface LabelBaseProps {
  label: string;
  htmlFor: string;
  labelBaseClassNames?: any;
  labelBaseStyles?: any;
}

const DividerBase = (props: DividerBaseProps) => {
  const theme: any = useThemeContext();
  return (
    <label
      htmlFor={props.htmlFor}
      className={classNames(
        theme.labelBaseClassNames,
        props.labelBaseClassNames
      )}
      style={props.labelBaseStyles}
    >
      {props.label}
    </label>
  );
};

export default LabelBase;
