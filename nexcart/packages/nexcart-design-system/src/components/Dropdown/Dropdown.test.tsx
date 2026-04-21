import {render, screen} from "@testing-library/react";
import {describe, expect, it} from "vitest";
import {Dropdown} from "./Dropdown";

describe("Dropdown", () => {
    it("renders the select element", () => {
        render(
            <Dropdown children='Lyari'/>
        );

        const select = screen.getByRole("combobox");
        expect(select).toBeInTheDocument();
    });

    it("renders children options", () => {
        render(
            <Dropdown children='Lyari'/>
        );

        expect(screen.getByText("Lyari")).toBeInTheDocument();
    });

    it("renders the chevron icon", () => {
        render(
            <Dropdown children='Lyari'/>
        );

        const icon = document.querySelector("svg");
        expect(icon).toBeInTheDocument();
    });
});