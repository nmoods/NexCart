import {Button, type ButtonVariants, buttonVariants} from "./Button";
import {render, screen} from "@testing-library/react";
import styles from "./Button.module.css";

describe('Button', () => {
    it("should render correctly", () => {
        render(
            <Button children={'Ki derouler'}/>
        );
        const button = screen.getByRole("button", {name: /Ki derouler/i});
        expect(button).toBeInTheDocument;
    });

    it.each(Object.keys(buttonVariants))(
        "should render correctly with variant %s",
        (variant) => {
            render(
                <Button variant={variant as ButtonVariants}>
                    Test
                </Button>,
            );
            const button = screen.getByRole("button", { name: /test/i });
            expect(button).toHaveClass(styles[`nx-btn-${variant}`]);
        },
    );

    it("Should disable the button when disabled", () => {
        render(
            <Button disabled>
                Disabled
            </Button>,
        );
        const button = screen.getByText("Disabled");
        expect(button).toBeDisabled();
    });

});