import { render, screen } from "@testing-library/react";
import { ProductHeader } from "./ProductHeader";

describe("ProductHeader", () => {
    const productHeaderProps = {
        title: "Malaade",
        highlight: "ki laa",
    };

    it("renders title and highlight correctly", () => {
        render(<ProductHeader {...productHeaderProps} />);
        expect(screen.getByText(productHeaderProps.title)).toBeInTheDocument();
        expect(screen.getByText(productHeaderProps.highlight)).toBeInTheDocument();
    });

    it('renders "View All" text', () => {
        render(<ProductHeader {...productHeaderProps} />);
        expect(screen.getByText(/view all/i)).toBeInTheDocument();
    });

    it("renders the chevron icon", () => {
        const { container } = render(<ProductHeader {...productHeaderProps} />);
        const svg = container.querySelector("svg");
        expect(svg).toBeInTheDocument();
    });
});