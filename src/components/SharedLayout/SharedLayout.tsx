import { ReactElement } from "react";

import "./SharedLayout.css";

interface IProps {
  children: ReactElement;
}

export const SharedLayout = ({ children }: IProps) => {
  return <div className="sharedLayout">{children}</div>;
};
