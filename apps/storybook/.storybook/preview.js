import '../src/styles/globals.css';
import * as NextImage from 'next/image';
import { ThemeProvider, theme } from '@reusejs/react';
import newTheme from '../src/reusejsTheme';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#fff',
      },
      {
        name: 'dark',
        value: '#000',
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider value={newTheme}>
      <Story />
    </ThemeProvider>
  ),
];
