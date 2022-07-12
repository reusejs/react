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
  },
};

newTheme['variants'] = variants;

export default newTheme;
