import type { Meta, StoryObj } from '@storybook/react';
import Card from '../../components/Card/Card.tsx';

const meta = {
    component: Card,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleImage = 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s22-ultra-5g-2.jpg';

export const Default: Story = {
    render: () => (
        <Card>
            <Card.ImageContainer>
                <Card.Image>
                    <img src={sampleImage} alt="Galaxy S22 Ultra" />
                </Card.Image>
            </Card.ImageContainer>
            <Card.Info>
                <Card.TextBlock>
                    <Card.Title>Galaxy S22 Ultra</Card.Title>
                    <Card.PriceDescription>Starting from</Card.PriceDescription>
                </Card.TextBlock>
                <Card.Divider />
                <Card.PriceContainer>
                    <Card.Price>$32999</Card.Price>
                </Card.PriceContainer>
            </Card.Info>
        </Card>
    ),
};

export const WithPromo: Story = {
    render: () => (
        <Card>
            <Card.ImageContainer>
                <Card.Image>
                    <img src={sampleImage} alt="Galaxy S22 Ultra" />
                </Card.Image>
                <Card.Promo>56% Off</Card.Promo>
            </Card.ImageContainer>
            <Card.Info>
                <Card.TextBlock>
                    <Card.Title>Galaxy S22 Ultra</Card.Title>
                    <Card.PriceDescription>Special offer</Card.PriceDescription>
                </Card.TextBlock>
                <Card.Divider />
                <Card.PriceContainer>
                    <Card.Price>$32999</Card.Price>
                </Card.PriceContainer>
            </Card.Info>
        </Card>
    ),
};

export const TextOnly: Story = {
    render: () => (
        <Card>
            <Card.Info>
                <Card.TextBlock>
                    <Card.Title>Welcome to NexCart</Card.Title>
                    <Card.PriceDescription>
                        Discover the best deals on your favorite products.
                    </Card.PriceDescription>
                </Card.TextBlock>
            </Card.Info>
        </Card>
    ),
};

export const CustomLayout: Story = {
    render: () => (
        <Card>
            <Card.Info>
                <Card.Title>Custom Card</Card.Title>
                <Card.Divider />
                <Card.PriceDescription>
                    Compose any layout by mixing and matching sub-components.
                </Card.PriceDescription>
            </Card.Info>
        </Card>
    ),
};
