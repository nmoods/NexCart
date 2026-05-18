import { render, screen } from "@testing-library/react";
import { CategoryNavigationBar } from "./CategoryNavigationBar";
import { groceries_options } from "./CategoryNavigationBar.constants";

describe("CategoryNavigationBar", () => {
    it("should render the component correctly", () => {
        render(<CategoryNavigationBar />);
        expect(screen.getByText("Groceries")).toBeInTheDocument();
        expect(screen.getByText("Premium Fruits")).toBeInTheDocument();
        expect(screen.getByText("Home & kitchen")).toBeInTheDocument();
        expect(screen.getByText("Fashion")).toBeInTheDocument();
        expect(screen.getByText("Electronics")).toBeInTheDocument();
        expect(screen.getByText("Beauty")).toBeInTheDocument();
    });

    it("should render all dropdowns", () => {
        render(<CategoryNavigationBar />);
        const dropdowns = screen.getAllByRole("combobox");
        expect(dropdowns).toHaveLength(8);
    });

    it("should render groceries dropdown with correct options", () => {
        render(<CategoryNavigationBar />);
        const groceriesDropdown = screen.getAllByRole("combobox")[0];
        expect(groceriesDropdown).toBeInTheDocument();

        groceries_options.forEach(option => {
            expect(screen.getByText(option.label)).toBeInTheDocument();
        });
    });


    it("should have correct option values for premium fruits", () => {
        render(<CategoryNavigationBar />);
        const options = screen.getAllByRole("option");
        const premiumFruitsOption = options.find(option => option.textContent === "Premium Fruits");
        expect(premiumFruitsOption).toHaveValue("premium fruits");
    });

    it("should have correct option values for home & kitchen", () => {
        render(<CategoryNavigationBar />);
        const options = screen.getAllByRole("option");
        const homeKitchenOption = options.find(option => option.textContent === "Home & kitchen");
        expect(homeKitchenOption).toHaveValue("home kitchen");
    });

    it("should have correct option values for fashion", () => {
        render(<CategoryNavigationBar />);
        const options = screen.getAllByRole("option");
        const fashionOption = options.find(option => option.textContent === "Fashion");
        expect(fashionOption).toHaveValue("fashion");
    });

    it("should have correct option values for electronics", () => {
        render(<CategoryNavigationBar />);
        const options = screen.getAllByRole("option");
        const electronicsOption = options.find(option => option.textContent === "Electronics");
        expect(electronicsOption).toHaveValue("electronics");
    });

    it("should have correct option values for beauty", () => {
        render(<CategoryNavigationBar />);
        const options = screen.getAllByRole("option");
        const beautyOption = options.find(option => option.textContent === "Beauty");
        expect(beautyOption).toHaveValue("beauty");
    });
});
