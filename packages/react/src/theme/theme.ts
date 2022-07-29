// Badge

const badgeBaseClasses = {
  alignment: "inline-flex items-center",
  padding: "px-2.5 py-0.5",
  borderRadius: "rounded-full",
  font: "text-xs font-medium",
  backgroundColor: "bg-blue-100",
  textColor: "text-blue-800",
};

//Divider
const dividerBaseClasses = {
  color: "bg-gray-500 w-full",
  height: "h-[1px]",
};

// Label

const labelBaseClasses = {
  alignment: "block",
  font: "text-sm font-medium",
  color: "text-gray-800 dark:text-gray-100",
};

// Scrollable

const scrollableBaseClasses = {
  position: "z-50 block overflow-auto",
  maxHeight: "max-h-32",
  width: "w-full",
  padding: "",
  borderRadius: "rounded-md",
  border: "border border-gray-300 dark:border-gray-700",
  background: "bg-white shadow dark:bg-black",
};

// Button

const buttonBaseClasses = {
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

// Text Input

const textInputBaseClasses = {
  wrapper: "relative rounded-md shadow-sm",
  margin: "mt-1",
  backgroundColor: "bg-white dark:bg-gray-900",
  formInput: "form-input",
  alignment: "block",
  width: "w-full",
  borderRadius: "rounded-md",
  border: "border-gray-300 dark:border-gray-600",
  focus: "focus:border-gray-500 focus:ring-gray-500",
  padding: "",
  font: "font-normal sm:text-sm",
  textColor: "text-gray-900 dark:text-white",
  placeholderColor: "",
};

const textInputBaseErrorClasses = {
  border: "border-red-300 dark:border-red-600",
  focus: "focus:ring-red-500 focus:border-red-500",
  textColor: "text-red-900 dark:text-red-300",
  backgroundColor: "bg-white dark:bg-gray-900",
  placeholderColor: "placeholder-red-300",
};

// Picket Select

const pickerSelectBaseClasses = {
  wrapper: "relative mt-1 rounded-md shadow-sm",
};

const pickerSelectSimpleClasses = {
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
    arrowWrapperClasses:
      "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
    arrowIconClasses: "h-5 w-5 text-gray-400",
    spanBaseClasses:
      "inline-block overflow-hidden text-ellipsis whitespace-nowrap w-11/12",
  },
  optionClasses: {
    wrapper:
      "relative flex cursor-pointer flex-row items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700",
    label: "text-sm text-gray-900 dark:text-gray-200",
    checkIcon: "h-5 w-5 text-gray-900 dark:text-white",
  },
  noData: {
    wrapper: "flex h-32 items-center justify-center bg-white dark:bg-gray-900",
  },
};

// Picker Radio

const pickerRadioBaseClasses = {
  wrapper: "mt-4",
};

// const pickerRadioAnimatedClasses = {
//   wrapper: "mt-4",
// };

const pickerRadioSimpleClasses = {
  optionClasses: {
    wrapper:
      "relative flex cursor-pointer flex-row items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700",
    labelBaseClasses: {
      alignment: "ml-3 block",
    },
  },
};

const pickerCheckboxBaseClasses = {
  wrapper: "mt-4",
};

const pickerCheckboxSimpleClasses = {
  optionClasses: {
    wrapper:
      "relative flex cursor-pointer flex-row items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700",
    labelBaseClasses: {
      alignment: "ml-3 block",
    },
  },
};

// Modals - Confirm

const modalBaseClasses = {
  background: "bg-white",
  font: "",
  border: "rounded-lg",
  padding: "px-4 pt-5 pb-4",
  alignment: "text-left",
  shadow: "shadow-xl",
  small:"sm:my-8 sm:w-full sm:max-w-lg sm:p-6",
  animation: "relative transform overflow-hidden transition-all",
};

const modalConfirmClasses = {
  yesButtonClasses: {
    alignment:
      "inline-flex justify-center items-center  sm:col-start-2 sm:text-sm",
    focus:
      "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
    font: "font-medium text-base",
    backgroundColor: "bg-blue-600 shadow-sm hover:bg-blue-700",
    textColor: "text-white",
    borderRadius: "rounded-md",
    padding: "px-4 py-2 ",
    border: "border border-transparent",
    width: "w-full",
    disabledClasses: "disabled:opacity-50 dark:disabled:opacity-80",
  },
  noButtonClasses: {
    alignment:
      "mt-3 inline-flex justify-center items-center sm:mt-0 sm:col-start-1",
    focus:
      "focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
    font: "text-base font-medium",
    backgroundColor: "bg-red-600 shadow-sm hover:bg-red-700",
    textColor: "text-white",
    borderRadius: "rounded-md",
    padding: "px-4 py-2 ",
    border: "border border-transparent",
    width: "w-full",
    disabledClasses: "disabled:opacity-50 dark:disabled:opacity-80",
  },
};

// Dropdowns

const dropdownBaseClasses = {
  wrapper: "relative inline-block text-left",
  transition: {
    enter: "transition ease-out duration-200",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95",
  },
  menuButton:
    "inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100",
  itemsWrapper:
    "absolute left-0 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
};

const tagInputBaseClasses = {
  wrapper: {
    padding: "px-2 py-2",
    background: "bg-white",
    border: "rounded border border-gray-500",
    display: "flex flex-wrap",
  },
  list: {
    display: "inline-flex w-full flex-wrap items-center",
  },
  textInputWrapper: {
    alignment: "",
  },
  closeIcon: {
    width: "w-4",
    spacing: "ml-2",
    color: "text-blue-500",
    font: "cursor-pointer",
  },
};

const theme = {
  dividerBaseClasses,
  labelBaseClasses,
  badgeBaseClasses,
  buttonBaseClasses,
  textInputBaseClasses,
  textInputBaseErrorClasses,
  pickerSelectBaseClasses,
  scrollableBaseClasses,
  pickerSelectSimpleClasses,
  pickerRadioBaseClasses,
  // pickerRadioAnimatedClasses,
  pickerRadioSimpleClasses,
  pickerCheckboxBaseClasses,
  pickerCheckboxSimpleClasses,
  modalBaseClasses,
  modalConfirmClasses,
  dropdownBaseClasses,
  tagInputBaseClasses,
};

export default theme;
