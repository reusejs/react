import React, { ReactNode } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import classNames from "../../utils/classNames";
import { ScrollableBaseProps } from "../../atoms/scrollables/base";
import ScrollableBase from "../../atoms/scrollables/base";

export interface FileBrowserProps {
  files?: any;
  size?: any;
  onView?: (item: any) => void;
  onDelete?: (item: any) => void;
  onEdit?: (item: any) => void;
  scrollableBaseProps?: ScrollableBaseProps;
}

const ViewIcon = ({ size = "h-4 w-4" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={classNames(size, "text-gray-500 hover:text-gray-900")}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
};

const EditIcon = ({ size = "h-4 w-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={classNames(size, "text-gray-500 hover:text-gray-900")}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
    />
  </svg>
);

const DeleteIcon = ({ size = "h-4 w-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={classNames(size, "text-gray-500 hover:text-gray-900")}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
    />
  </svg>
);

const FileBrowser = (props: FileBrowserProps) => {
  const theme: any = useThemeContext();

  //   const finalClassNames = resolvedStyleProps(
  //     "fileBrowserClasses",
  //     ["alignment", "color", "font"],
  //     props,
  //     theme
  //   );

  return (
    <ScrollableBase {...props.scrollableBaseProps}>
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {props.files.map((file: any, index: number) => (
          <li key={`${file.uuid}-${index}`} className="relative">
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex h-32 items-center justify-center bg-gray-50 text-xs text-gray-400">
                  {file.mimeType}
                </div>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="w-40">
                <p className="pointer-events-none block truncate text-xs font-medium text-gray-700">
                  {file.title}
                </p>
              </div>

              <div className="flex items-center space-x-1">
                {props.onView !== undefined && (
                  <button
                    type="button"
                    onClick={() => {
                      props.onView && props.onView(file);
                    }}
                  >
                    <ViewIcon size={props.size} />
                  </button>
                )}

                {props.onEdit !== undefined && (
                  <button
                    type="button"
                    onClick={() => {
                      props.onEdit && props.onEdit(file);
                    }}
                  >
                    <EditIcon size={props.size} />
                  </button>
                )}

                {props.onDelete !== undefined && (
                  <button
                    type="button"
                    onClick={() => {
                      props.onDelete && props.onDelete(file);
                    }}
                  >
                    <DeleteIcon size={props.size} />
                  </button>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </ScrollableBase>
  );
};

export default FileBrowser;
