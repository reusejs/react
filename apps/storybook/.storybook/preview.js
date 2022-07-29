import '../../../node_modules/@reusejs/react/dist/styles.css';
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
        class: 'light',
      },
      {
        name: 'dark',
        value: '#000',
        class: 'dark',
      },
    ],
  },
};

export const decorators = [
  (Story, context) => {
    return (
      <div
        className={
          context.globals.backgrounds?.value === '#000' ? 'dark' : 'light'
        }
      >
        <ThemeProvider value={newTheme}>
          <Story />
        </ThemeProvider>
      </div>
    );
  },
];
