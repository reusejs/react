import React, { ReactNode } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import classNames from "../../utils/classNames";

export interface FooterBaseProps {
  left?: any;
  right?: any;
  bottom?: any;
  topArrangement?: string;
  bottomArrangement?: string;
  leftArrangement?: string;
  rightArrangement?: string;
  backgroundClasses?: string;
  widthClasses?: string;
}

const FooterBase = (props: FooterBaseProps) => {
  const backgroundClasses = props.backgroundClasses || "bg-gray-50";
  const widthClasses =
    props.widthClasses ||
    "mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8";

  return (
    <footer className={backgroundClasses} aria-labelledby="footer-heading">
      <div className={widthClasses}>
        {/* top content */}
        <div
          className={classNames(
            "lg:grid lg:grid-cols-3 lg:gap-8",
            props.topArrangement || ""
          )}
        >
          {/* left content */}
          {props.left && (
            <div
              className={classNames(
                "space-y-8 lg:col-span-1",
                props.leftArrangement || ""
              )}
            >
              <props.left />
            </div>
          )}
          {/* right content */}
          {props.right && (
            <div
              className={classNames(
                " grid grid-cols-2 gap-8 lg:col-span-2",
                props.rightArrangement || ""
              )}
            >
              <props.right />
            </div>
          )}
        </div>
        {/* bottom content */}
        {props.bottom && (
          <div className={classNames("py-6", props.bottomArrangement || "")}>
            <props.bottom />
          </div>
        )}
      </div>
    </footer>
  );
};

export default FooterBase;
