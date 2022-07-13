import { ThemeProvider, theme } from '@reusejs/react';

const newTheme = {
  ...theme,
  variants: {},
};

const variants = {
  primary: {
    labelClasses: {
      color: 'text-cyan-200',
    },
    badgeClasses: {
      backgroundColor: 'bg-yellow-100',
      textColor: 'text-yellow-800',
    },
  },
  suffixPrefix: {
    textInputClasses: {
      padding: 'pl-7 pr-12',
    },
  },
};

newTheme['variants'] = variants;

export default newTheme;
