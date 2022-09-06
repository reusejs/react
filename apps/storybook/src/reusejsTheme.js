import { ThemeProvider, theme } from '@reusejs/react';

const newTheme = {
  ...theme,
  variants: {},
};

const variants = {
  primary: {
    labelBaseClasses: {
      color: 'text-cyan-200',
    },
    badgeBaseClasses: {
      backgroundColor: 'bg-yellow-100',
      textColor: 'text-yellow-800',
    },
  },
  suffixPrefix: {
    textInputBaseClasses: {
      padding: 'pl-7 pr-12',
    },
  },
  secondary: {
    gridBaseClasses: {
      grid: 'grid',
      alignment: '',
      size: 'w-full h-full',
      columns: 'grid-cols-3 grid-rows-3 grid-flow-col',
      gap: 'gap-2',
      padding: '',
      margin: '',
      backgroundColor: 'bg-cyan-50',
      border: '',
    },
    labelBaseClasses: {
      color: 'text-black-500',
      font: 'text-2xl font-bold',
    },
  },
  slow: {
    dropdownBaseClasses: {
      wrapper: 'relative inline-block text-left',
      transition: {
        enter: 'transition ease-out duration-500',
        enterFrom: 'transform opacity-0 scale-95',
        enterTo: 'transform opacity-100 scale-100',
        leave: 'transition ease-in duration-75',
        leaveFrom: 'transform opacity-100 scale-500',
        leaveTo: 'transform opacity-0 scale-95',
      },
    },
  },
  dark: {
    dataTableBaseClasses: {
      headerWrapperClasses: 'bg-[#242645]',
      filterRow: 'bg-[#242645]',
      bodyWrapper: 'bg-[#242645] text-white',
      loadingTr: 'bg-[#242645]',
      loadingTd: 'animate-pulse whitespace-nowrap px-6 py-4 text-sm',
      loadingLoader: 'rounded-xs h-6 bg-gray-100',
      headerClasses:
        'sticky top-0 z-10 border-b border-[#2C2D51] bg-[#242645] bg-opacity-75 px-6 py-4 text-left text-xs font-normal tracking-wider text-white',
      navClasses:
        'flex items-center justify-between border-t border-[#2C2D51] bg-[#242645] px-4 py-3 sm:px-6',
      navTextClasses: 'text-sm text-white',
    },
    buttonBaseClasses: {
      alignment: 'inline-flex justify-center items-center',
      focus: 'focus:outline-none',
      font: 'font-normal text-sm',
      backgroundColor: 'bg-red-500',
      textColor: 'text-white',
      borderRadius: 'rounded-md',
      padding: 'px-4 py-2',
      border: 'border border-transparent',
      disabledClasses: 'disabled:opacity-50',
    },
    pickerSelectSimpleClasses: {
      selectedDataClasses: {
        background: 'bg-red-500',
      },
      optionClasses: {
        wrapper:
          'relative flex cursor-pointer flex-row items-center p-2 hover:bg-yellow-200 dark:hover:bg-yellow-700',
        label: 'text-sm text-yellow-900 dark:text-yellow-200',
        checkIcon: 'h-5 w-5 text-blue-400 dark:text-white',
      },
      noData: {
        wrapper: 'flex h-32 items-center justify-center bg-red-200',
      },
    },
    textInputBaseClasses: {
      backgroundColor: 'bg-red-500',
      borderRadius: 'rounded',
      textColor: 'text-white',
      border: 'border-none',
    },

    tagInputBaseClasses: {
      wrapper: {
        background: 'bg-red-200',
        border: 'rounded	border-2 border-black',
        display: 'flex flex-wrap',
      },
      list: {
        display: 'inline-flex w-full flex-wrap',
      },
      listItem: {
        margin: 'm-1',
        display: 'flex list-none items-center',
        height: 'h-8',
        background: 'bg-cyan-400',
        padding: 'p-1',
        color: 'text-white',
        font: 'font-light ',
        border: 'rounded',
      },
      closeIcon: {
        margin: 'm-1',
        height: 'h-4',
        width: 'w-4',
        color: 'text-grey-400',
        font: 'cursor-pointer',
      },
    },
    labelBaseClasses: {
      color: 'text-blue-400',
    },

    accordionBaseClasses: {
      width: 'w-full',
      borderRadius: 'rounded-md',
      padding: 'py-3',
      font: 'font-normal sm:text-sm',
      textColor: 'text-blue-900 cursor-pointer',
      display: 'flex justify-between',
      wrapper: 'border rounded-md px-3 border-blue-300 bg-gray-100 mb-3',
      content: 'text-blue-400 py-3',
    },
    textAreaBaseClasses: {
      margin: 'mt-2',
      background: 'bg-gray-700 outline-none',
      border: 'rounded-md border-2 border-gray-300',
      display: 'block ',
      width: 'w-full',
      color: 'text-white',
      font: 'font-light',
      padding: 'p-1',
      shadow: 'shadow-sm',
    },
  },
};

newTheme['variants'] = variants;

export default newTheme;
