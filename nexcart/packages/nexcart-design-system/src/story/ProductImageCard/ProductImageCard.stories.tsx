import type {Meta, StoryObj} from "@storybook/react";
import {ProductImageCard} from "../../components/ProductImageCard/ProductImageCard";
import type {ComponentProps} from "react";
import Rehman from '../../Assets/rehman.jpg'

const meta: Meta<typeof ProductImageCard> = {
    component: ProductImageCard,
    title: 'Components/ProductImageCard/ProductImageCard',
};

export default meta;

type StoryProps = ComponentProps<typeof ProductImageCard>;
type Story = StoryObj<StoryProps>;

const render = () => (
    <ProductImageCard
        label="Lyari ka Badshahh"
        image={Rehman}
    />
);

export const ProductImageCardStory: Story = {
    name: 'ProductImageCard',
    render,
};



