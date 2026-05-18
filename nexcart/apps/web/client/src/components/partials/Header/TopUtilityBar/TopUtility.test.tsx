import { render, screen } from "@testing-library/react";
import { TopUtilityBar } from "./TopUtilityBar";

describe("TopUtilityBar", () => {
    it("should render the welcome text on the left side", () => {
        render(<TopUtilityBar />);
        const welcomeText = screen.getByText(/Welcome to woldwide megamart!/i);
        expect(welcomeText).toBeInTheDocument();
    });

    it("should render the location delivery info", () => {
        render(<TopUtilityBar />);
        const deliverToText = screen.getByText(/Deliver to 423651/i);
        expect(deliverToText).toBeInTheDocument();
    });

    it("should render the track order info", () => {
        render(<TopUtilityBar />);
        const trackOrderText = screen.getByText(/Track your order/i);
        expect(trackOrderText).toBeInTheDocument();
    });

    it("should render the all offers info", () => {
        render(<TopUtilityBar />);
        const offersText = screen.getByText(/All Offers/i);
        expect(offersText).toBeInTheDocument();
    });

    it("should render all three icons", () => {
        const { container } = render(<TopUtilityBar />);
        const svgs = container.querySelectorAll("svg");
        expect(svgs.length).toBe(3);
    });
});
