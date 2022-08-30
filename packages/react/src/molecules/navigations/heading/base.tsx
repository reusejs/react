import React, { ReactNode } from "react";
import "../../../../tailwind.css";
import { useThemeContext } from "../../../theme/ThemeProvider";
import resolvedStyleProps from "../../../utils/resolvedStyleProps";
import Link from "next/link";

export interface NavigationPageHeadingProps {
  actions?: any;
  helperText?: any;
  breadcrumbs?: any;
  titleText?: any;
  linkRenderer?: any;
  homeIcon?: any;
  seperator?: any;
  variant?: string;
}

const NextJSLink = (props: any) => {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
};

const JustLink = (props: any) => {
  let { href, children, ...rest } = props;
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
};

const NavigationPageHeading = (props: NavigationPageHeadingProps) => {
  const theme: any = useThemeContext();

  const LinkRenderer = props.linkRenderer || NextJSLink;

  const wrapper1ClassNames = resolvedStyleProps(
    "navigationPageHeadingClasses",
    ["wrapper1"],
    props,
    theme
  );

  const wrapper2ClassNames = resolvedStyleProps(
    "navigationPageHeadingClasses",
    ["wrapper2"],
    props,
    theme
  );

  const wrapper3ClassNames = resolvedStyleProps(
    "navigationPageHeadingClasses",
    ["wrapper3"],
    props,
    theme
  );

  const actionsWrapperClassNames = resolvedStyleProps(
    "navigationPageHeadingClasses",
    ["actionsWrapper"],
    props,
    theme
  );

  return (
    <div className={wrapper1ClassNames}>
      <div className={wrapper2ClassNames}>
        <div className={wrapper3ClassNames}>
          <div className="min-w-0 flex-1">
            {props.breadcrumbs.length > 0 && (
              <div>
                <nav className="sm:hidden" aria-label="Back">
                  <a
                    href="#"
                    className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    Back
                  </a>
                </nav>

                <nav className="hidden sm:flex" aria-label="Breadcrumb">
                  <ol role="list" className="flex items-center space-x-4">
                    {props.breadcrumbs.map((breadcrumb: any, i: number) => (
                      <li key={`breadcrumb-${i}`}>
                        <div className="flex items-center">
                          {breadcrumb.home && (
                            <LinkRenderer
                              href={`${breadcrumb.href}`}
                              className="text-sm font-medium lowercase text-gray-400 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300"
                            >
                              <props.homeIcon
                                className="h-4 w-4 flex-shrink-0 text-gray-400 dark:text-gray-500"
                                aria-hidden="true"
                              />
                            </LinkRenderer>
                          )}

                          {breadcrumb.home === undefined && (
                            <props.seperator
                              className="h-5 w-5 flex-shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                          )}

                          {breadcrumb.home === undefined &&
                            breadcrumb.current && (
                              <span className="ml-4 text-sm font-medium lowercase text-gray-400 dark:text-gray-500">
                                {breadcrumb.title}
                              </span>
                            )}

                          {breadcrumb.home === undefined &&
                            !breadcrumb.current && (
                              <LinkRenderer
                                href={`${breadcrumb.href}`}
                                className="ml-4 text-sm font-medium lowercase text-gray-400 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300"
                              >
                                {breadcrumb.title}
                              </LinkRenderer>
                            )}
                        </div>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            )}
            {props.titleText && <props.titleText variant={props.variant} />}
            {props.helperText && <props.helperText variant={props.variant} />}
          </div>
          <div className={actionsWrapperClassNames}>
            {props.actions && (
              <div>
                <props.actions variant={props.variant} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationPageHeading;
