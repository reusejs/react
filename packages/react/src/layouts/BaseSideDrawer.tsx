import React, {
  FunctionComponent,
  useImperativeHandle,
  useState,
  useEffect,
} from "react";
import classNames from "../utils/classNames";
import resolvedStyleProps from "../utils/resolvedStyleProps";
import { useThemeContext } from "../theme/ThemeProvider";

export interface BaseSideDrawerProps {
  ref?: any;
  effectOn?: "click" | "hover";
  overlap?: boolean;
  callback?: () => void;
  sideDrawerContent?: React.ReactNode;
  mainContent?: React.ReactNode;
  baseSideDrawerStyleClasses?: {
    wrapper?: string;
    drawerLayout?: string;
    drawerActiveWidth?: string;
    drawerInActiveWidth?: string;
    contentLeftMargin?: string;
    contentWrapper?: string;
  };
}

export interface BaseSideDrawerReference {
  handleClick: () => void;
}

const BaseSideDrawer: FunctionComponent<BaseSideDrawerProps> = React.forwardRef(
  (props, ref) => {
    const handleClick = () => {
      if (props.callback) {
        props.callback();
      }
      setIsActive(!isActive);
    };

    useImperativeHandle(ref, () => ({
      handleClick,
    }));

    const [isActive, setIsActive] = useState<boolean>(true);
    const theme = useThemeContext();

    const wrapperClasses = resolvedStyleProps(
      "baseSideDrawerStyleClasses",
      ["wrapper"],
      props,
      theme
    );

    let drawerClasses = "";

    if (props.effectOn === "click") {
      drawerClasses = resolvedStyleProps(
        "baseSideDrawerStyleClasses",
        ["drawerLayout"],
        props,
        theme
      );
    } else {
      drawerClasses = resolvedStyleProps(
        "baseSideDrawerStyleClasses",
        ["drawerLayout", "drawerInActiveWidth", "drawerActiveWidth"],
        props,
        theme
      );
    }

    const drawerActiveWidthClasses = resolvedStyleProps(
      "baseSideDrawerStyleClasses",
      ["drawerActiveWidth"],
      props,
      theme
    );

    const drawerInActiveWidthClasses = resolvedStyleProps(
      "baseSideDrawerStyleClasses",
      ["drawerInActiveWidth"],
      props,
      theme
    );

    const contentMarginClass = resolvedStyleProps(
      "baseSideDrawerStyleClasses",
      ["contentLeftMargin"],
      props,
      theme
    );

    const contentWrapper = resolvedStyleProps(
      "baseSideDrawerStyleClasses",
      ["contentWrapper"],
      props,
      theme
    );

    const hoverComponents = (
      <div
        className={drawerClasses + (props.overlap ? " absolute" : "")}
        onMouseEnter={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => {
          setIsActive(false);
        }}
      >
        {props.sideDrawerContent}
      </div>
    );

    const clickyComponents = (
      <div
        className={classNames(
          props.overlap ? "absolute" : "",
          drawerClasses,
          isActive ? drawerInActiveWidthClasses : drawerActiveWidthClasses
        )}
      >
        {props.sideDrawerContent}
      </div>
    );

    return (
      <div
        className={classNames(props.overlap ? "relative" : "", wrapperClasses)}
      >
        {props.effectOn === "click" ? clickyComponents : hoverComponents}
        <div
          className={classNames(
            contentWrapper,
            props.overlap ? contentMarginClass : ""
          )}
        >
          {props.mainContent}
        </div>
      </div>
    );
  }
);

BaseSideDrawer.defaultProps = {
  overlap: true,
};

export default BaseSideDrawer;
