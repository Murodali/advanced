import React from "react";
import styles from "../../styles/modules";

interface IGridProps {
  children?: React.ReactNode;
}

export const Grid: React.FC<IGridProps> = ({
  children,
}: IGridProps): JSX.Element => {
  return <div className={styles.Grid.grid}>{children}</div>;
};
