import React, { ReactNode } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";

export interface DropdownBaseProps {
  label?: string;
  htmlFor?: string;
  labelStyles?: any;
  variant?: string;
  dropdownBaseClasses?: {
    alignment?: any;
    color?: any;
    font?: any;
  };
}

const DropdownBase = (props: DropdownBaseProps) => {
  const theme: any = useThemeContext();

  const finalClassNames = resolvedStyleProps(
    "dropdownBaseClasses",
    ["alignment", "color", "font"],
    props,
    theme
  );

  return (
    <div className="group inline-block">
      <button
        aria-haspopup="true"
        aria-controls="menu"
        className="flex min-w-32 items-center rounded-sm border bg-white px-3 py-1 outline-none focus:outline-none"
      >
        <span className="flex-1 pr-1 font-semibold">Dropdown</span>
        <span>
          <svg
            className="h-4 w-4 transform fill-current transition
  duration-150 ease-in-out group-hover:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </span>
      </button>
      <ul
        id="menu"
        aria-hidden="true"
        className="absolute min-w-32 origin-top scale-0 transform rounded-sm border 
  bg-white transition duration-150 ease-in-out group-hover:scale-100"
      >
        <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Programming</li>
        <li className="rounded-sm px-3 py-1 hover:bg-gray-100">DevOps</li>
        <li className="relative rounded-sm px-3 py-1 hover:bg-gray-100">
          <button
            aria-haspopup="true"
            aria-controls="menu-lang"
            className="flex w-full items-center text-left outline-none focus:outline-none"
          >
            <span className="flex-1 pr-1">Langauges</span>
            <span className="mr-auto">
              <svg
                className="h-4 w-4 fill-current
      transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          <ul
            id="menu-lang"
            aria-hidden="true"
            className="absolute top-0 right-0 min-w-32 origin-top-left rounded-sm 
  border bg-white transition duration-150
  ease-in-out
  "
          >
            <li className="px-3 py-1 hover:bg-gray-100">Javascript</li>
            <li className="relative rounded-sm px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang-python"
                className="flex w-full items-center text-left outline-none focus:outline-none"
              >
                <span className="flex-1 pr-1">Python</span>
                <span className="mr-auto">
                  <svg
                    className="h-4 w-4 fill-current transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul
                id="menu-lang-python"
                aria-hidden="true"
                className="absolute top-0 right-0 min-w-32 origin-top-left rounded-sm 
border bg-white transition duration-150
ease-in-out
"
              >
                <li className="px-3 py-1 hover:bg-gray-100">2.7</li>
                <li className="px-3 py-1 hover:bg-gray-100">3+</li>
              </ul>
            </li>
            <li className="px-3 py-1 hover:bg-gray-100">Go</li>
            <li className="px-3 py-1 hover:bg-gray-100">Rust</li>
          </ul>
        </li>
        <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Testing</li>
      </ul>
    </div>
  );
};

export default DropdownBase;
