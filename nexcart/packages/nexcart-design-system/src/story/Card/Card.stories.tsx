import type { Meta, StoryObj } from '@storybook/react';
import Card from '../../components/Card/Card.tsx';

const meta = {
    component: Card,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        title: {
            control: 'text',
            description: 'Product title',
        },
        priceDescription: {
            control: 'text',
            description: 'Price description or subtitle',
        },
        price: {
            control: 'number',
            description: 'Product price',
        },
        promo: {
            control: 'text',
            description: 'Promo badge text (e.g. "56% Off")',
        },
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Galaxy S22 Ultra',
        priceDescription: 'Starting from',
        price: 32999,
        image: <img src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s22-ultra-5g-2.jpg" alt="Galaxy S22 Ultra" />,
    },
};

export const WithPromo: Story = {
    args: {
        title: 'Galaxy S22 Ultra',
        priceDescription: 'Special offer',
        price: 32999,
        promo: '56% Off',
        image: <img src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s22-ultra-5g-2.jpg" alt="Galaxy S22 Ultra" />,
    },
};

export const NoImage: Story = {
    args: {
        title: 'Galaxy S22 Ultra',
        priceDescription: 'Starting from',
        price: 32999,
    },
};

export const NoImageWithPromo: Story = {
    args: {
        title: 'Galaxy S22 Ultra',
        priceDescription: 'Limited time deal',
        price: 32999,
        promo: '30% Off',
    },
};
