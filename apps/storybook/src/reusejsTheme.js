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
};

newTheme['variants'] = variants;

export default newTheme;
