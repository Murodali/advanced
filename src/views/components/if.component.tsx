import React from "react";

interface IIfProps {
  condition: boolean;
  anotherChildren?: React.ReactNode;
  children: React.ReactNode;
}

export const IF: React.FC<IIfProps> = React.memo(
  ({ condition, anotherChildren, children }) => {
    if (!condition) {
      return <>{anotherChildren && anotherChildren}</>;
    }
    return <>{children}</>;
  }
);
