import { AppContainer } from "./styles";

import { Column } from "./Column";
import { AddNewItem } from "./AddNewItem";

import { useAppState } from "./state/AppStateContext";
import { CustomDragLayer } from "./CustomDragLayer";
import { addList } from "./state/actions";

export const App = () => {
  const { lists, dispatch } = useAppState();

  return (
    <AppContainer>
      <CustomDragLayer />
      {lists.map((list) => (
        <Column text={list.text} key={list.id} id={list.id} />
      ))}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={(text) => dispatch(addList(text))} />
    </AppContainer>
  );
};
