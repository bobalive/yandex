import type { ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "default" | "disabled" | "yellow" | "black";
}
export const Button = ({
  variant = "default",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
};
