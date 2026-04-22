import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Card from './Card';

describe('Card Component', () => {
    it('renders the root container with children', () => {
        render(
            <Card>
                <span>Hello</span>
            </Card>
        );

        expect(screen.getByText('Hello')).toBeInTheDocument();
    });

    it('renders title and price description via sub-components', () => {
        render(
            <Card>
                <Card.Info>
                    <Card.TextBlock>
                        <Card.Title>Galaxy S22 Ultra</Card.Title>
                        <Card.PriceDescription>Starting from</Card.PriceDescription>
                    </Card.TextBlock>
                </Card.Info>
            </Card>
        );

        expect(screen.getByText('Galaxy S22 Ultra')).toBeInTheDocument();
        expect(screen.getByText('Starting from')).toBeInTheDocument();
    });

    it('renders price using Card.Price', () => {
        render(
            <Card>
                <Card.PriceContainer>
                    <Card.Price>$32999</Card.Price>
                </Card.PriceContainer>
            </Card>
        );

        expect(screen.getByText('$32999')).toBeInTheDocument();
    });

    it('renders promo badge when Card.Promo is used', () => {
        render(
            <Card>
                <Card.ImageContainer>
                    <Card.Promo>56% Off</Card.Promo>
                </Card.ImageContainer>
            </Card>
        );

        expect(screen.getByText('56% Off')).toBeInTheDocument();
    });

    it('does not render promo badge when Card.Promo is not used', () => {
        render(
            <Card>
                <Card.ImageContainer>
                    <Card.Image>
                        <img src="/phone.jpg" alt="phone" />
                    </Card.Image>
                </Card.ImageContainer>
            </Card>
        );

        expect(screen.queryByText(/% Off/)).not.toBeInTheDocument();
    });

    it('renders image content via Card.Image', () => {
        render(
            <Card>
                <Card.ImageContainer>
                    <Card.Image>
                        <img src="/phone.jpg" alt="phone" />
                    </Card.Image>
                </Card.ImageContainer>
            </Card>
        );

        expect(screen.getByAltText('phone')).toBeInTheDocument();
    });

    it('renders Card.Divider', () => {
        const { container } = render(
            <Card>
                <Card.Divider data-testid="divider" />
            </Card>
        );

        expect(screen.getByTestId('divider')).toBeInTheDocument();
        expect(container.firstChild).toBeInTheDocument();
    });

    it('allows consumers to pass a custom className to Card', () => {
        const { container } = render(
            <Card className="my-custom-class">
                <span>Content</span>
            </Card>
        );

        expect(container.firstChild).toHaveClass('my-custom-class');
    });

    it('forwards HTML attributes like onClick to Card', () => {
        const handleClick = vi.fn();
        render(
            <Card onClick={handleClick} data-testid="card">
                <span>Clickable</span>
            </Card>
        );

        screen.getByTestId('card').click();
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('renders a full composed card with all sub-components', () => {
        render(
            <Card>
                <Card.ImageContainer>
                    <Card.Image>
                        <img src="/phone.jpg" alt="phone" />
                    </Card.Image>
                    <Card.Promo>30% Off</Card.Promo>
                </Card.ImageContainer>
                <Card.Info>
                    <Card.TextBlock>
                        <Card.Title>Galaxy S22 Ultra</Card.Title>
                        <Card.PriceDescription>Limited deal</Card.PriceDescription>
                    </Card.TextBlock>
                    <Card.Divider />
                    <Card.PriceContainer>
                        <Card.Price>$32999</Card.Price>
                    </Card.PriceContainer>
                </Card.Info>
            </Card>
        );

        expect(screen.getByAltText('phone')).toBeInTheDocument();
        expect(screen.getByText('30% Off')).toBeInTheDocument();
        expect(screen.getByText('Galaxy S22 Ultra')).toBeInTheDocument();
        expect(screen.getByText('Limited deal')).toBeInTheDocument();
        expect(screen.getByText('$32999')).toBeInTheDocument();
    });
});
