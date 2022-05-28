import React from "react";

interface IPageProps {
  title: string;
  children?: React.ReactNode;
}

export const Page: React.FC<IPageProps> = ({
  title,
  children,
}: IPageProps): JSX.Element => {
  React.useEffect(() => {
    const previousTitle: string = document.title;
    document.title = title;
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
  return <>{children}</>;
};
