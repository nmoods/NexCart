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
