import { FC } from "react";
import { AppContainer } from "./styles";

import { AddNewItem } from "./AddNewItem";

export const App: FC = ({ children }) => {
  return (
    <AppContainer>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
};
