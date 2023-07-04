import type { Preview } from '@storybook/react';

// @ts-ignore
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      story: {
        inline: false,
      },
    },
  },
};

export default preview;



