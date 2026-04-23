import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import { ProductHeader } from "../../components/ProductHeader/ProductHeader";

const meta: Meta<typeof ProductHeader> = {
    component: ProductHeader,
    title: "Components/ProductHeader/ProductHeader",
};

export default meta;

type StoryProps = ComponentProps<typeof ProductHeader>;
type Story = StoryObj<StoryProps>;
const render = (args: StoryProps) => (
    <ProductHeader {...args}/>
);

export const ProductHeaderStory: Story = {
    name: 'ProductHeader',
    args: {
        title: "Malade",
        highlight: "la ki la",
    },
    render,
};
