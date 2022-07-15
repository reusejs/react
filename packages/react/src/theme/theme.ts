const badgeClasses = {
  alignment: "inline-flex items-center",
  padding: "px-2.5 py-0.5",
  borderRadius: "rounded-full",
  font: "text-xs font-medium",
  backgroundColor: "bg-blue-100",
  textColor: "text-blue-800",
};

const labelClasses = {
  alignment: "block",
  font: "text-sm font-medium",
  color: "text-gray-800 dark:text-gray-100",
};

const scrollableClasses = {
  position: "z-50 block overflow-auto",
  maxHeight: "max-h-32",
  width: "w-full",
  padding: "",
  borderRadius: "rounded-md",
  border: "border border-gray-300 dark:border-gray-700",
  background: "bg-white shadow dark:bg-black",
};

const buttonClasses = {
  alignment: "inline-flex justify-center items-center",
  focus: "focus:outline-none",
  font: "font-normal text-sm",
  backgroundColor: "bg-blue-500 hover:bg-blue-700",
  textColor: "text-white",
  borderRadius: "rounded-md",
  padding: "px-4 py-2",
  border: "border border-transparent",
  width: "",
  disabledClasses: "disabled:opacity-50 dark:disabled:opacity-80",
};

const textInputClasses = {
  wrapper: "relative mt-1 rounded-md shadow-sm",
  alignment: "block",
  width: "w-full",
  borderRadius: "rounded-md",
  border: "border-gray-300 dark:border-gray-600",
  focus: "focus:border-gray-500 focus:ring-gray-500",
  padding: "",
  font: "font-normal sm:text-sm",
  textColor: "text-gray-900 dark:text-white",
  backgroundColor: "bg-white dark:bg-gray-900",
  placeholderColor: "",
};

const textInputErrorClasses = {
  border: "border-red-300 dark:border-red-600",
  focus: "focus:ring-red-500 focus:border-red-500",
  textColor: "text-red-900 dark:text-red-300",
  backgroundColor: "bg-white dark:bg-gray-900",
  placeholderColor: "placeholder-red-300",
};

const pickerSelectClasses = {
  wrapper: "relative mt-1 rounded-md shadow-sm",
};

const pickerRadioClasses = {
  wrapper: "mt-4",
};

const simpleRadioPickerClasses = {
  optionClasses: {
    wrapper:
      "relative flex cursor-pointer flex-row items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700",
    labelClasses: {
      alignment: "ml-3 block",
    },
  },
};

const simpleSelectPickerClasses = {
  selectedDataClasses: {
    alignment: "relative block cursor-pointer",
    borderRadius: "rounded-md",
    border: "border border-gray-300 dark:border-gray-600",
    focus: "focus:border-blue-500 focus:ring-blue-500",
    background: "bg-white dark:bg-gray-900",
    padding: "py-2 px-3",
    text: "text-black dark:text-white",
    font: "sm:text-sm",
    width: "w-full",
  },
  optionClasses: {
    wrapper:
      "relative flex cursor-pointer flex-row items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700",
    label: "text-sm text-gray-900 dark:text-gray-200",
  },
};

const theme = {
  labelClasses,
  badgeClasses,
  buttonClasses,
  textInputClasses,
  textInputErrorClasses,
  pickerSelectClasses,
  scrollableClasses,
  simpleSelectPickerClasses,
  pickerRadioClasses,
  simpleRadioPickerClasses,
};

export default theme;
