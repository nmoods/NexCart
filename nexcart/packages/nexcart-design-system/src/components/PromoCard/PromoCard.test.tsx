import {render, screen} from "@testing-library/react";
import {PromoCard} from "./PromoCard.tsx";

const mockItems = [
    {
        label: "IPHONE",
        brand: "Apple",
        discount: "UP to 80% OFF",
        image: "iphone.png",
        logo: "apple.png",
        background: "bg-dark.png",
    },
    {
        label: "REALME",
        brand: "Realme",
        discount: "UP to 80% OFF",
        image: "realme.png",
        logo: "realme.png",
        background: "bg-light.png",
    },
];

describe("PromoCards", () => {
    it("renders all cards", () => {
        render(<PromoCard items={mockItems}/>);

        expect(screen.getByText("IPHONE")).toBeInTheDocument();
        expect(screen.getByText("REALME")).toBeInTheDocument();
    });

    it("renders discount text", () => {
        render(<PromoCard items={mockItems}/>);
        expect(screen.getAllByText(/up to 80% off/i).length).toBeGreaterThan(0);
    });

    it("renders images", () => {
        render(<PromoCard items={mockItems}/>);
        expect(screen.getAllByRole("img").length).toBeGreaterThan(0);
    });
});