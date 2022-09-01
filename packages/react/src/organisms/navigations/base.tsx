import React, { ReactNode, useState } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import classNames from "../../utils/classNames";

export interface NavigationBaseProps {
  left?: any;
  middle?: any;
  right?: any;
  sidebar?: any;
  leftArrangement?: string;
  middleArrangement?: string;
  rightArrangement?: string;
  backgroundClasses?: string;
  borderClasses?: string;
  widthClasses?: string;
  heightClasses?: string;
}

const NavigationBase = (props: NavigationBaseProps) => {
  const theme: any = useThemeContext();
  const [sidebar, setSidebar] = useState<boolean>(false);

  const backgroundClasses = props.backgroundClasses || "bg-gray-50";
  const borderClasses = props.borderClasses || "border-b border-gray-200";
  const widthClasses =
    props.widthClasses || "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";
  const heightClasses =
    props.heightClasses || "flex h-16 items-center justify-between";

  const toggleSidebar = () => {
    console.log("toggleSidebar", sidebar);
    setSidebar((prev) => {
      return !prev;
    });
  };

  return (
    <div className={backgroundClasses}>
      <div className={borderClasses}>
        <div className={widthClasses}>
          <div className={heightClasses}>
            {/* Left */}
            {props.left !== undefined && (
              <div
                className={classNames(
                  "flex h-full items-center",
                  props.leftArrangement || ""
                )}
              >
                {<props.left sidebar={sidebar} toggleSidebar={toggleSidebar} />}
              </div>
            )}
            {/* Middle */}
            {props.middle !== undefined && (
              <div
                className={classNames(
                  "flex h-full items-center",
                  props.middleArrangement || ""
                )}
              >
                {
                  <props.middle
                    sidebar={sidebar}
                    toggleSidebar={toggleSidebar}
                  />
                }
              </div>
            )}
            {/* Right */}
            {props.right !== undefined && (
              <div
                className={classNames(
                  "flex h-full items-center",
                  props.rightArrangement || ""
                )}
              >
                {
                  <props.right
                    sidebar={sidebar}
                    toggleSidebar={toggleSidebar}
                  />
                }
              </div>
            )}
          </div>
        </div>

        {props.sidebar !== undefined && (
          <>
            {<props.sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} />}
          </>
        )}
      </div>
    </div>
  );
};

export default NavigationBase;
