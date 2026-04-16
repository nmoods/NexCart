import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../components/input/Input.tsx';
import {EyeIcon} from '../../components/Icon/EyeIcon.tsx';
import eyeImage from '../../assets/eye.png?url';

const meta = {
  component: Input,
  parameters: {
    layout: 'centered',
  },
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
    value: '',
    onChange: () => {},
  },
};

export const Email: Story = {
  args: {
    title: 'Email',
    placeholder: 'Enter your email...',
    value: '',
    onChange: () => {},
  },
};

export const OnError: Story = {
  args: {
    title: 'Email',
    placeholder: 'Enter your email...',
    value: '',
    onChange: () => {},
    errorMessage: 'This is an error message'
  },
};

export const WithIcon: Story = {
  args: {
    title: 'Title',
    placeholder: 'Placeholder',
    value: '',
    onChange: () => {},
    iconEnd: EyeIcon,
  },
};

export const WithSvg: Story = {
  args: {
    title: 'Title',
    placeholder: 'Placeholder',
    value: '',
    onChange: () => {},
    iconStart: <img src={eyeImage} alt={'eye-icon'} style={{ width: '20px', height: '20px' }} />
  },
};

