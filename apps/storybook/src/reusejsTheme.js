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
