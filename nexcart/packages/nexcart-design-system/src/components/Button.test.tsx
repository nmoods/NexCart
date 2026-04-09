import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
    it('should render the Button component', () => {
        render(<Button variant="primary">Click Me</Button>);
        const buttonElement = screen.getByText('Click Me');
        expect(buttonElement).toBeInTheDocument();
        });

    it('should have the correct variant class', () => {
        render(<Button variant="secondary">Click Me</Button>);
        const buttonElement = screen.getByText('Click Me');
        expect(buttonElement).toHaveClass('btn');
        });
    });
