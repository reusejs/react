import React from "react";
import classNames from "../../../utils/classNames";
import resolvedStyleProps from "../../../utils/resolvedStyleProps";
import { useThemeContext } from "../../../theme/ThemeProvider";

/* 
- add actions
- pass styles in itemTitleDescriptionCardBaseClasses
- check if any one of the section is not available
- work on center aligned variant
*/


export interface IconTitleDescriptionCardInterface {
  icon?: any;
  title?: any;
  description?: any;
  actions?: any;
  iconPosition?: string; // top-left, left
  itemTitleDescriptionCardBaseClasses?: {
    wrapper?: string;
    iconWrapper?: string;
    titleWrapper?: string;
    titleStyles?: string;
    descriptionWrapper?: string;
    descriptionStyles?: string;
    actionWrapper?: string;
  }
}

const IconTitleDescriptionActionCard = (props: IconTitleDescriptionCardInterface) => {
  const theme: any = useThemeContext();

  const outerWrapperStyles = resolvedStyleProps(
    "itemTitleDescriptionCardBaseClasses",
    ["wrapper"],
    props,
    theme
  );

  const iconWrapperStyles = resolvedStyleProps(
    "itemTitleDescriptionCardBaseClasses",
    ["iconWrapper"],
    props,
    theme
  );

  const titleWrapperStyles = resolvedStyleProps(
    "itemTitleDescriptionCardBaseClasses",
    ["titleWrapper"],
    props,
    theme
  );

  const titleStyles = resolvedStyleProps(
    "itemTitleDescriptionCardBaseClasses",
    ["titleStyles"],
    props,
    theme
  );

  const descriptionWrapperStyles = resolvedStyleProps(
    "itemTitleDescriptionCardBaseClasses",
    ["descriptionWrapper"],
    props,
    theme
  );

  const descriptionStyles = resolvedStyleProps(
    "itemTitleDescriptionCardBaseClasses",
    ["descriptionStyles"],
    props,
    theme
  );

  const actionWrapperStyles = resolvedStyleProps(
    "itemTitleDescriptionCardBaseClasses",
    ["actionWrapper"],
    props,
    theme
  );

    return (
      <div className={outerWrapperStyles}>
        <dt>
          {props.icon && (
            <div className={classNames(props.iconPosition === "left" ? "absolute" : "", iconWrapperStyles)}>
              {props.icon}
            </div>
          )}

          {props.title && (
            <div className={classNames(props.icon && props.iconPosition === "left" ? "ml-16" : "", titleWrapperStyles)}>
              <div className={titleStyles}>
                {props.title}
              </div>
            </div>
          )}
        </dt>

        {props.description && (
          <div className={classNames(props.icon && props.iconPosition === "left" ? "ml-16" : "", descriptionWrapperStyles)}>
            <div className={descriptionStyles}>
              {props.description}
            </div>
          </div>
        )}

        
        {props.actions && (
          <div className={classNames(props.icon && props.iconPosition === "left" ? "ml-16" : "", actionWrapperStyles) }>
            {props.actions}
          </div>
        )}
      </div>
    );
};

IconTitleDescriptionActionCard.defaultProps = {
  iconPosition: "left", // top-left, left
};

export default IconTitleDescriptionActionCard;
