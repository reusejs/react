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

const theme = {
  labelClasses,
  badgeClasses,
  buttonClasses,
  textInputClasses,
  textInputErrorClasses,
};

export default theme;
