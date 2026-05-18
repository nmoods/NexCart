import { render, screen } from "@testing-library/react";
import MainHeader from "./MainHeader";

describe("MainHeader", () => {
    it("renders logo correctly", () => {
        render(<MainHeader />);
        expect(screen.getByText("MegaMart")).toBeInTheDocument();
    });

    it("renders search input with placeholder", () => {
        render(<MainHeader />);
        expect(
            screen.getByPlaceholderText(
                "Search essentials, groceries and more..."
            )
        ).toBeInTheDocument();
    });

    it("renders Sign Up / Sign In button", () => {
        render(<MainHeader />);
        expect(screen.getByText("Sign Up/Sign In")).toBeInTheDocument();
    });

    it("renders Cart button", () => {
        render(<MainHeader />);
        expect(screen.getByText("Cart")).toBeInTheDocument();
    });

    it("renders menu icon button area", () => {
        const { container } = render(<MainHeader />);
        const svgIcons = container.querySelectorAll("svg");
        expect(svgIcons.length).toBeGreaterThan(0);
    });
});