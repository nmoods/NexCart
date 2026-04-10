import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/input/Input';

const meta = {
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
    },
    value: {
      control: 'text',
      description: 'Current value of the input',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Title',
    placeholder: 'Placeholder text',
  },
};

export const Email: Story = {
  args: {
    placeholder: 'Enter your email...',
  },
};

export const OnError: Story = {
  args: {
    title: 'Email',
    placeholder: 'Enter your email...',
    errorMessage: 'This is an error message'
  },
};

