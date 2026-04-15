import type {ComponentPropsWithoutRef, PropsWithChildren} from "react";
import styles from './Button.module.css';

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
                           variant = "primary",
                           ...args
                       }: PropsWithChildren<ButtonProps>) => (

    <button
        className={[styles['btn'], styles[`btn-${variant}`], className]
            .filter(Boolean)
            .join(" ")}
        disabled={disabled || loading}
        type="button"
        {...args}
    >
        {children}
    </button>
);

