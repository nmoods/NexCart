import type {Meta, StoryObj} from '@storybook/react';
import {Input} from '../../components/Input/Input.tsx';
import {Eye as EyeIcon} from 'lucide-react';

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
        onChange: () => {
        },
    },
};

export const Email: Story = {
    args: {
        title: 'Email',
        placeholder: 'Enter your email...',
        value: '',
        onChange: () => {
        },
    },
};

export const OnError: Story = {
    args: {
        title: 'Email',
        placeholder: 'Enter your email...',
        value: '',
        onChange: () => {
        },
        errorMessage: 'This is an error message'
    },
};

export const WithIcon: Story = {
    args: {
        title: 'Title',
        placeholder: 'Placeholder',
        value: '',
        onChange: () => {
        },
        iconEnd: <EyeIcon/>,
    },
};

export const WithIconAtStart: Story = {
    args: {
        title: 'Title',
        placeholder: 'Placeholder',
        value: '',
        onChange: () => {
        },
        iconStart: <EyeIcon/>,
    },
};
