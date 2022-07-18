import React, { ReactNode } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import classNames from "../../utils/classNames";

export interface DividerBaseProps {
  label: string;
  htmlFor: string;
  labelBaseClassNames?: any;
  labelBaseStyles?: any;
}

const DividerBase = (props: DividerBaseProps) => {
  const theme: any = useThemeContext();
  return (
    <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300">
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
    </div>
  );
};

export default DividerBase;
