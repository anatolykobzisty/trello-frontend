import { FC } from "react";
import { AppContainer } from "./styles";

import { Column } from "./Column";
import { AddNewItem } from "./AddNewItem";

import { useAppState } from "./state/AppStateContext";

export const App: FC = () => {
  const { lists } = useAppState();

  return (
    <AppContainer>
      {lists.map((list) => (
        <Column text={list.text} key={list.id} id={list.id} />
      ))}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
};
