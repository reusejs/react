import React from "react";
import classNames from "../../utils/classNames";

export interface IconTitleDescriptionCardInterface {
  logo?: any;
  title?: any;
  description?: any;
  logoPosition?: string; // top-left, left
  logoToTitleGapClass?: string;
  logoWrapperClasses: string;
}

const IconTitleDescriptionCard = (props: IconTitleDescriptionCardInterface) => {
  // React.useEffect(() => {
  //   console.log("LOG_PROPS", props);
  // }, [props]);

  // React.useEffect(() => {
  //   console.log("MOUNTED", props);
  // }, []);

  // const defaultLogoWrapperClasses =
  //   "flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white";

  if (props.logoPosition === "left") {
    return (
      <div className="relative">
        <dt>
          <div className={classNames("absolute", props.logoWrapperClasses)}>
            {props.logo}
          </div>

          <div
            className={
              props.logoToTitleGapClass ? props.logoToTitleGapClass : "ml-16"
            }
          >
            {props.title}
          </div>
        </dt>

        <div
          className={
            props.logoToTitleGapClass ? props.logoToTitleGapClass : "ml-16"
          }
        >
          {props.description}
        </div>
      </div>
    );
  } else if (props.logoPosition === "top-left") {
    return (
      <div className="relative">
        <dt>
          <div className={props.logoWrapperClasses}>{props.logo}</div>

          <div
            className={
              props.logoToTitleGapClass ? props.logoToTitleGapClass : "mt-16"
            }
          >
            {props.title}
          </div>
        </dt>

        <div>{props.description}</div>
      </div>
    );
  } else {
    return null;
  }
};

IconTitleDescriptionCard.defaultProps = {
  logoPosition: "left", // top-left, left
  logoWrapperClasses:
    "flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white",
};

export default IconTitleDescriptionCard;
