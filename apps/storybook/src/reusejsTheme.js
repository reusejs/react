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
};

newTheme['variants'] = variants;

export default newTheme;
