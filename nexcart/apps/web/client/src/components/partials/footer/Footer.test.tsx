import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import '@testing-library/jest-dom';

describe('Footer Component', () => {

    describe('Rendering', () => {
        it('should render the footer element', () => {
            const { container } = render(<Footer />);
            const footer = container.querySelector('footer');
            expect(footer).toBeInTheDocument();
        });
    });

    describe('Brand Section', () => {
        it('should render NexCart brand name', () => {
            render(<Footer />);
            const brand = screen.getByText('NexCart');
            expect(brand).toBeInTheDocument();
            expect(brand.tagName).toBe('H2');
        });

        it('should render Contact Us heading', () => {
            render(<Footer />);
            const contactHeading = screen.getByText('Contact Us');
            expect(contactHeading).toBeInTheDocument();
        });
    });

    describe('Contact Information', () => {
        it('should render WhatsApp contact item', () => {
            render(<Footer />);
            const whatsappLabel = screen.getByText('Whats App');
            expect(whatsappLabel).toBeInTheDocument();
        });

        it('should render Call Us contact item', () => {
            render(<Footer />);
            const callLabel = screen.getByText('Call Us');
            expect(callLabel).toBeInTheDocument();
        });

        it('should render phone number links', () => {
            render(<Footer />);
            const phoneLinks = screen.getAllByText('+1 202-918-2132');
            expect(phoneLinks).toHaveLength(2);
            phoneLinks.forEach(link => {
                expect(link).toHaveAttribute('href', 'tel:+12029182132');
            });
        });

    });

    describe('Download App Section', () => {
        it('should render Download App heading', () => {
            render(<Footer />);
            const downloadHeading = screen.getByText('Download App');
            expect(downloadHeading).toBeInTheDocument();
        });

        it('should render app store images with correct alt text', () => {
            render(<Footer />);
            const appStoreImg = screen.getByAltText('App Store');
            const playStoreImg = screen.getByAltText('Google Play');
            expect(appStoreImg).toBeInTheDocument();
            expect(playStoreImg).toBeInTheDocument();
        });
    });

    describe('Most Popular Categories Section', () => {
        it('should render Most Popular Categories heading', () => {
            render(<Footer />);
            const heading = screen.getByText('Most Popular Categories');
            expect(heading).toBeInTheDocument();
            expect(heading.tagName).toBe('H3');
        });

        it('should render all category links', () => {
            render(<Footer />);
            const categories = [
                'Staples',
                'Beverages',
                'Personal Care',
                'Home Care',
                'Baby Care',
                'Vegetables & Fruits',
                'Snacks & Foods',
                'Dairy & Bakery'
            ];

            categories.forEach(category => {
                expect(screen.getByText(category)).toBeInTheDocument();
            });
        });

        it('should have correct href attributes for category links', () => {
            render(<Footer />);
            const staplesLink = screen.getByText('Staples');
            const beveragesLink = screen.getByText('Beverages');

            expect(staplesLink).toHaveAttribute('href', '#/categories/staples');
            expect(beveragesLink).toHaveAttribute('href', '#/categories/beverages');
        });
    });

    describe('Customer Services Section', () => {
        it('should render Customer Services heading', () => {
            render(<Footer />);
            const heading = screen.getByText('Customer Services');
            expect(heading).toBeInTheDocument();
            expect(heading.tagName).toBe('H3');
        });

        it('should render all customer service links', () => {
            render(<Footer />);
            const services = [
                'About Us',
                'Terms & Conditions',
                'FAQ',
                'Privacy Policy',
                'E-waste Policy',
                'Cancellation & Return Policy'
            ];

            services.forEach(service => {
                expect(screen.getByText(service)).toBeInTheDocument();
            });
        });

        it('should have correct href attributes for service links', () => {
            render(<Footer />);
            const aboutLink = screen.getByText('About Us');
            const termsLink = screen.getByText('Terms & Conditions');

            expect(aboutLink).toHaveAttribute('href', '#/about');
            expect(termsLink).toHaveAttribute('href', '#/terms');
        });
    });

    describe('Footer Bottom', () => {
        it('should render copyright text', () => {
            render(<Footer />);
            const copyright = screen.getByText(/© 2026 All rights reserved/);
            expect(copyright).toBeInTheDocument();
        });

        it('should render Reliance Retail Ltd attribution', () => {
            render(<Footer />);
            const attribution = screen.getByText(/Reliance Retail Ltd/);
            expect(attribution).toBeInTheDocument();
        });
    });


    describe('Accessibility', () => {
        it('should have proper heading hierarchy', () => {
            render(<Footer />);
            const h2 = screen.getByText('NexCart');
            const h3Headings = screen.getAllByRole('heading', { level: 3 });

            expect(h2.tagName).toBe('H2');
            expect(h3Headings.length).toBeGreaterThanOrEqual(2);
        });

        it('should have proper alt text for images', () => {
            render(<Footer />);
            const images = screen.getAllByRole('img');

            images.forEach(img => {
                expect(img).toHaveAttribute('alt');
            });
        });
    });
});