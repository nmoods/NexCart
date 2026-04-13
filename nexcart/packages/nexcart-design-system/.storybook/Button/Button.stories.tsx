import type {Meta, StoryObj} from "@storybook/react";
import Button from "../../src/components/Button/Button";


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

/**
 * Interactive playground for the Button component - adjust the controls to see how the button responds to different props.
 */
export const Playground: Story = {
    args: {
        children: "Button",
        variant: "primary",
        disabled: false,
        loading: false,
    },
};

/**
 * The default Button component with primary variant.
 */
export const Primary: Story = {
    args: {
        children: "Button",
        variant: "primary",
    },
};

/**
 * Secondary variant of the Button component.
 */
export const Secondary: Story = {
    args: {
        children: "Button",
        variant: "secondary",
    },
};

/**
 * Disabled state of the Button component.
 */
export const Disabled: Story = {
    args: {
        children: "Button",
        disabled: true,
    },
};

/**
 * Loading state of the Button component.
 */
export const Loading: Story = {
    args: {
        children: "Loading...",
        loading: true,
    },
};

/**
 * Button with long text content.
 */
export const LongText: Story = {
    args: {
        children: "Click me to perform an action",
        variant: "primary",
    },
};

/**
 * Small Button component.
 */
export const Small: Story = {
    args: {
        children: "Small",
        variant: "primary",
    },
    decorators: [
        (Story) => (
            <div style={{fontSize: "12px"}}>
                <Story/>
            </div>
        ),
    ],
};

/**
 * Large Button component.
 */
export const Large: Story = {
    args: {
        children: "Large",
        variant: "primary",
    },
    decorators: [
        (Story) => (
            <div style={{fontSize: "20px"}}>
                <Story/>
            </div>
        ),
    ],
};

/**
 * All Button variants displayed together.
 */
export const All: Story = {
    render: () => (
        <div style={{display: "flex", gap: "16px", flexWrap: "wrap", padding: "20px"}}>
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
            <div>
                <h3>Primary Loading</h3>
                <Button variant="primary" loading>
                    Loading...
                </Button>
            </div>
            <div>
                <h3>Secondary Loading</h3>
                <Button variant="secondary" loading>
                    Loading...
                </Button>
            </div>
        </div>
    ),
};

