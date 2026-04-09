import React from 'react';

export const buttonVariants = {
  primary: "primary",
  secondary: "secondary",
} as const;

export type ButtonVariants = keyof typeof buttonVariants;

export type ButtonProps = {
    variant: ButtonVariants;
    children: React.ReactNode;
}

export const Button = ({
    variant = "primary",
    children
    }) => {
return (
    <button className={`btn btn-${variant}`}>
        {children}
    </button>
    );
}