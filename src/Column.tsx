import { FC } from "react";
import { ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {
  text: string;
  children?: React.ReactNode;
};

export const Column: FC<ColumnProps> = ({ text, children }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
    </ColumnContainer>
  );
};
