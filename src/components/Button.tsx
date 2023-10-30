import { ReactNode } from "react";

interface IProps {
  onClick: () => void;
  className?: string;
  isDisabled: boolean;
  children: ReactNode;
  isLoading: boolean;
}

export const Button = ({
  className,
  children,
  isLoading,
  isDisabled,
  onClick,
}: IProps) => {
  const classes = ["button"];

  if (isLoading) {
    classes.push("button--is-loading");
  }

  if (className) {
    classes.push(className);
  }

  return (
    <button
      className={classes.join(" ")}
      disabled={isDisabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? <span className="loader"></span> : children}
    </button>
  );
};
