import classNames from "classnames";
import React from "react";
import Components from "../components";
import styles from "../../styles/modules";

interface IButtonProps {
  onCLick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant: "primary" | "secondary";
  type?: "outlined" | "contained";
  size?: "small" | "medium" | "large";
  maxWidth?: boolean;
  className?: string;
  onMouseDown?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseUp?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseOver?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseMove?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  disabled?: boolean;
  isSubmit?: boolean;
}

export const Button: React.FC<IButtonProps> = (props): JSX.Element => {
  const className = classNames(
    // props.maxWidth && styles.Button.maxWidth,
    styles.Button.root,
    props.disabled && styles.Button.__disabled,
    // props.size === "small" && styles.Button.__size__small,
    props.size === "medium" && styles.Button.__size__medium
    // props.size === "large" && styles.Button.__size__large,
    // props.type === "contained" && styles.Button.__type__contained,
    // props.type === "outlined" && styles.Button.__type__outlined
  );
  return (
    <Components.IF
      condition={!props.disabled}
      anotherChildren={<div className={className}>{props.children}</div>}
    >
      <button
        type={props.isSubmit ? "submit" : "button"}
        onMouseDown={props.onMouseDown}
        onMouseEnter={props.onMouseEnter}
        onMouseUp={props.onMouseUp}
        onMouseOver={props.onMouseOver}
        onMouseLeave={props.onMouseLeave}
        onMouseMove={props.onMouseMove}
        onClick={props.onCLick}
        style={{ width: props.maxWidth ? "100%" : "auto" }}
        className={className}
      >
        {props.children}
      </button>
    </Components.IF>
  );
};
