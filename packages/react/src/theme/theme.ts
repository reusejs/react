// Badge

const badgeBaseClasses = {
  alignment: "inline-flex items-center",
  padding: "px-2.5 py-0.5",
  borderRadius: "rounded-full",
  font: "text-xs font-medium",
  backgroundColor: "bg-blue-100",
  textColor: "text-blue-800",
};

//Grid
const gridBaseClasses = {
  grid: "grid",
  alignment: "",
  size: "w-full h-full",
  columns: "grid-cols-3",
  gap: "gap-4",
  padding: "p-2",
  margin: "",
  backgroundColor: "",
  border: "",
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

// Checkbox

const checkboxBaseClasses = {
  wrapper: "flex items-center",
  margin: "ml-2",
  backgroundColor: "bg-white dark:bg-gray-900",
  alignment: "block",
  width: "h-4 w-4",
  borderRadius: "rounded",
  border: "border-gray-300 dark:border-gray-600",
  focus: "focus:border-gray-500",
  padding: "",
  font: "font-normal sm:text-sm",
  textColor: "text-gray-900 dark:text-white",
  placeholderColor: "",
};

const checkboxBaseErrorClasses = {
  border: "border-red-300 dark:border-red-600",
  focus: "focus:ring-red-500 focus:border-red-500",
  textColor: "text-red-900 dark:text-red-300",
  backgroundColor: "bg-white dark:bg-gray-900",
  placeholderColor: "placeholder-red-300",
};

// Text Area

const textAreaBaseClasses = {
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

const disabledTextAreaStylesClasses = {
  wrapper: "relative rounded-md shadow-sm",
  margin: "mt-1",
  backgroundColor: "bg-slate-300 dark:bg-gray-900",
  formInput: "form-input",
  alignment: "block",
  width: "w-full",
  borderRadius: "rounded-md",
  border: "border-gray-300 dark:border-gray-600",
  focus: "focus:border-gray-500 focus:ring-gray-500",
  padding: "",
  font: "font-normal sm:text-sm",
  textColor: "text-slate-700 dark:text-white",
  placeholderColor: "",
  opacity: "opacity-70",
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
      "block overflow-hidden text-ellipsis whitespace-nowrap w-11/12",
  },
  disabledStyleClasses: {
    alignment: "relative block",
    borderRadius: "rounded-md",
    border: "border border-gray-300 dark:border-gray-600",
    focus: "focus:border-blue-500 focus:ring-blue-500",
    background: "bg-slate-300 dark:bg-gray-900",
    padding: "py-2 px-3",
    text: "text-slate-700 dark:text-white",
    font: "sm:text-sm",
    width: "w-full",
    arrowWrapperClasses:
      "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
    arrowIconClasses: "h-5 w-5 text-gray-400",
    spanBaseClasses:
      "block overflow-hidden text-ellipsis whitespace-nowrap w-11/12",
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

const radioBoxStyleClasses = {
  wrapper: "mt-0",
  alignment: "appearance-none",
  width: "h-4 w-4",
  borderRadius:
    "rounded-full border-slate-500 border bg-white focus:ring-blue-500 checked:bg-white checked:border-4 checked:border-blue-500",
  border: " ",
  focus: " ",
  padding: "",
  formInput: " ",
  font: "",
  textColor: "text-gray-900 dark:text-white",
  backgroundColor: "bg-white dark:bg-gray-900",
  placeholderColor: "",
};

const radioOptionLabelClasses = {
  alignment: "ml-3 block",
  font: "text-sm font-medium",
  color: "text-slate-800 dark:text-gray-100",
};

// Modals - Confirm

const modalBaseClasses = {
  background: "bg-white",
  font: "",
  border: "rounded-lg",
  padding: "px-4 pt-5 pb-4",
  alignment: "text-left",
  shadow: "shadow-xl",
  small: "sm:my-8 sm:w-full sm:max-w-lg sm:p-6",
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

const dropdownMultiClasses = {
  wrapper: "relative cursor-pointer",
  transition: {
    enter: "transition ease-out duration-200",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95",
  },
  containerClasses:
    "absolute left-0 mt-2 w-40 origin-top-left border dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  rounded-md",
  childContainerClasses:
    "absolute top-0 left-1 w-40 origin-top-left translate-x-full border dark:border-gray-800 bg-white dark:bg-gray-900 py-1 rounded-md",
  itemClasses:
    "relative block w-full cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-700",
  activeItemClasses: "text-blue-500 font-semibold",
};

const dropdownBrowserClasses = {
  wrapper: "relative cursor-pointer",
  transition: {
    enter: "transition ease-out duration-200",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95",
  },
  containerClasses:
    "border dark:border-gray-800 bg-white dark:bg-gray-900 focus:outline-none  rounded-md",
  childContainerClasses: "py-2",
  itemClasses:
    "relative block w-full cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-700 hover:font-semibold",
  childItemClasses:
    "relative block w-full cursor-pointer py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-700 hover:font-semibold",
  activeItemClasses: "text-blue-500 font-semibold",
};

// Tags

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

// Accordion

const accordionBaseClasses = {
  width: "w-full",
  borderRadius: "rounded-md",
  padding: "py-3",
  font: "font-normal sm:text-sm",
  textColor: "text-gray-900 dark:text-white cursor-pointer",
  display: "flex justify-between",
  wrapper:
    "border rounded-md px-3 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 mb-3",
  content: "text-gray-900 dark:text-white  py-3",
};

// Data Table

const dataTableBaseClasses = {
  wrapper1: "flex flex-col",
  wrapper2: "inline-block min-w-full align-middle",
  wrapper3:
    "initial:md:rounded-md initial:border initial:dark:border overflow-auto border-gray-200 ring-1 ring-black ring-opacity-5 dark:border-gray-700",
  tableWrapper: "min-w-full",
  bodyWrapper:
    "divide-y divide-gray-100 bg-white dark:divide-gray-800 dark:bg-gray-900",
  filterRow: "bg-gray-50 dark:bg-gray-800",
  loadingTr: "bg-white dark:bg-gray-900",
  loadingTd: "animate-pulse whitespace-nowrap px-6 py-4 text-sm",
  loadingLoader: "rounded-xs h-6 bg-gray-100 dark:bg-gray-800",
};

// Navigation Page Heading

const navigationPageHeadingClasses = {
  wrapper1: "border border-gray-100 dark:border-gray-700 rounded-md",
  wrapper2: "px-6 py-4",
  wrapper3: "md:flex md:items-center md:justify-between",
  actionsWrapper: "flex-shrink-0 flex mt-4 md:mt-0 md:ml-4",
  tableWrapper: "min-w-full",
  bodyWrapper:
    "divide-y divide-gray-100 bg-white dark:divide-gray-800 dark:bg-gray-900",
  filterRow: "bg-gray-50 dark:bg-gray-800",
  loadingTr: "bg-white dark:bg-gray-900",
  loadingTd: "animate-pulse whitespace-nowrap px-6 py-4 text-sm",
  loadingLoader: "rounded-xs h-6 bg-gray-100 dark:bg-gray-800",
};

const theme = {
  gridBaseClasses,
  labelBaseClasses,
  badgeBaseClasses,
  buttonBaseClasses,
  dividerBaseClasses,
  textInputBaseClasses,
  textInputBaseErrorClasses,
  checkboxBaseClasses,
  checkboxBaseErrorClasses,
  pickerSelectBaseClasses,
  scrollableBaseClasses,
  pickerSelectSimpleClasses,
  pickerRadioBaseClasses,
  radioBoxStyleClasses,
  radioOptionLabelClasses,
  // pickerRadioAnimatedClasses,
  pickerRadioSimpleClasses,
  pickerCheckboxBaseClasses,
  pickerCheckboxSimpleClasses,
  modalBaseClasses,
  modalConfirmClasses,
  dropdownBaseClasses,
  dropdownMultiClasses,
  dropdownBrowserClasses,
  tagInputBaseClasses,
  textAreaBaseClasses,
  disabledTextAreaStylesClasses,
  accordionBaseClasses,
  dataTableBaseClasses,
  navigationPageHeadingClasses,
};

export default theme;
