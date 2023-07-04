import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const LoggedIn1: Story = {
  args: {
    user: {
      name: 'Jane Doe1',
    },
  },
};

export const LoggedIn2: Story = {
  args: {
    user: {
      name: 'Jane Doe2',
    },
  },
};

export const LoggedIn3: Story = {
  args: {
    user: {
      name: 'Jane Doe3',
    },
  },
};

export const LoggedIn4: Story = {
  args: {
    user: {
      name: 'Jane Doe4',
    },
  },
};

export const LoggedIn5: Story = {
  args: {
    user: {
      name: 'Jane Doe5',
    },
  },
};

export const LoggedIn6: Story = {
  args: {
    user: {
      name: 'Jane Doe6',
    },
  },
};

export const LoggedOut: Story = {};
