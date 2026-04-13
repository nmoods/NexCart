import type {Meta, StoryObj} from "@storybook/react";
import {Button} from "../../components/Button/Button";

const meta = {
    title: "Components/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            options: ["primary", "secondary"],
            control: {type: "select"},
        },
        disabled: {
            control: {type: "boolean"},
        },
        loading: {
            control: {type: "boolean"},
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    args: {
        children: "Ki derouler",
        variant: "primary",
        disabled: false,
        loading: false,
    },
};

export const Primary: Story = {
    args: {
        children: "Button",
        variant: "primary",
    },
};

export const Secondary: Story = {
    args: {
        children: "Button",
        variant: "secondary",
    },
};

export const Disabled: Story = {
    args: {
        children: "Button",
        disabled: true,
    },
};

export const All: Story = {
    render: () => (
        <div>
            <div>
                <h3>Primary</h3>
                <Button variant="primary">Primary Button</Button>
            </div>
            <div>
                <h3>Secondary</h3>
                <Button variant="secondary">Secondary Button</Button>
            </div>
            <div>
                <h3>Primary Disabled</h3>
                <Button variant="primary" disabled>
                    Disabled
                </Button>
            </div>
            <div>
                <h3>Secondary Disabled</h3>
                <Button variant="secondary" disabled>
                    Disabled
                </Button>
            </div>
        </div>
    ),
};

