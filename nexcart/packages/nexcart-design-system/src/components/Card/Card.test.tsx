import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Card from './Card';

describe('Card Component', () => {
    it('renders title and price description', () => {
        render(
            <Card
                title="Galaxy S22 Ultra"
                priceDescription="Starting from"
                price={32999}
            />
        );

        expect(screen.getByText('Galaxy S22 Ultra')).toBeInTheDocument();
        expect(screen.getByText('Starting from')).toBeInTheDocument();
    });

    it('renders price with dollar symbol', () => {
        render(
            <Card
                title="Galaxy S22 Ultra"
                priceDescription="Starting from"
                price={32999}
            />
        );

        expect(screen.getByText('$32999')).toBeInTheDocument();
    });

    it('renders promo badge when promo is provided', () => {
        render(
            <Card
                title="Galaxy S22 Ultra"
                priceDescription="Starting from"
                price={32999}
                promo="56% Off"
            />
        );

        expect(screen.getByText('56% Off')).toBeInTheDocument();
    });

    it('does not render promo badge when promo is not provided', () => {
        render(
            <Card
                title="Galaxy S22 Ultra"
                priceDescription="Starting from"
                price={32999}
            />
        );

        expect(screen.queryByText('56% Off')).not.toBeInTheDocument();
    });

    it('renders image when provided', () => {
        render(
            <Card
                title="Galaxy S22 Ultra"
                priceDescription="Starting from"
                price={32999}
                image={<img src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s22-ultra-5g-2.jpg" alt="Galaxy S22 Ultra" />}
            />
        );

        expect(screen.getByAltText('Galaxy S22 Ultra')).toBeInTheDocument();
    });

    it('renders without image when not provided', () => {
        render(
            <Card
                title="Galaxy S22 Ultra"
                priceDescription="Starting from"
                price={32999}
            />
        );

        expect(screen.queryByRole('img')).not.toBeInTheDocument();
    });

    it('renders all props together', () => {
        render(
            <Card
                title="Galaxy S22 Ultra"
                priceDescription="Special offer"
                price={32999}
                promo="30% Off"
                image={<img src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s22-ultra-5g-2.jpg" alt="Galaxy S22 Ultra" />}
            />
        );

        expect(screen.getByText('Galaxy S22 Ultra')).toBeInTheDocument();
        expect(screen.getByText('Special offer')).toBeInTheDocument();
        expect(screen.getByText('$32999')).toBeInTheDocument();
        expect(screen.getByText('30% Off')).toBeInTheDocument();
        expect(screen.getByAltText('Galaxy S22 Ultra')).toBeInTheDocument();
    });
});
