export const buttonVariants = {
  primary: "primary",
  secondary: "secondary",
} as const;

export type ButtonVariants = keyof typeof buttonVariants;

export type ButtonProps = {
  variant?: ButtonVariants;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<"button">;


export const Button = ({variant, children}) => {
    return (
        <button>
            {children}
        </button>
    )
}

export default Button;