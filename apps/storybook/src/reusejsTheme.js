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
  dark: {
    pickerSelectSimpleClasses: {
      selectedDataClasses: {
        background: 'bg-red-500',
      },
      optionClasses: {
        wrapper:
          'relative flex cursor-pointer flex-row items-center p-2 hover:bg-yellow-200 dark:hover:bg-yellow-700',
        label: 'text-sm text-yellow-900 dark:text-yellow-200',
      },
    },
  },
};

newTheme['variants'] = variants;

export default newTheme;
