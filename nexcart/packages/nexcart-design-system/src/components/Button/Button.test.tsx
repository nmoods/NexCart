describe('Button', () => {
    it('should render the Button component', () => {
        render(<Button/>);
        const buttonElement = screen.getByText('Click me');
        expect(buttonElement).toBeInTheDocument();
     });
 });