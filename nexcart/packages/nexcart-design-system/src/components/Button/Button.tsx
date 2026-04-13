import type {ComponentPropsWithoutRef} from "react";

export const buttonVariants = {
    primary: "primary",
    secondary: "secondary",
} as const;

export type ButtonVariants = keyof typeof buttonVariants;

export type ButtonProps = {
    variant?: ButtonVariants;
    loading?: boolean;
} & ComponentPropsWithoutRef<"button">;

export const Button = ({
                           children,
                           className,
                           disabled,
                           loading,
                       }: ButtonProps) => {
    return (
        <button
            className={className}
            disabled={disabled || loading}
            type="button"
        >
            {children}

        </button>
    );
}

export default Button;
