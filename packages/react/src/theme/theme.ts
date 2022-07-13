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
  disabledClasses: "disabled:opacity-50",
};

const theme = {
  labelClasses,
  badgeClasses,
  buttonClasses,
};

export default theme;
