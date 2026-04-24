import { render, screen } from "@testing-library/react";
import { ProductImageCard } from "./ProductImageCard";

describe("ProductImageCard", () => {
    const ProductImageCardProps = {
        label: "Test Product",
        image: "test-image.png",
    };

    it("renders the label correctly", () => {
        render(<ProductImageCard {...ProductImageCardProps} />);
        expect(screen.getByText("Test Product")).toBeInTheDocument();
    });

    it("renders the image with correct src and alt", () => {
        render(<ProductImageCard {...ProductImageCardProps} />);
        const img = screen.getByRole("img");
        expect(img).toHaveAttribute("src", "test-image.png");
    });
});