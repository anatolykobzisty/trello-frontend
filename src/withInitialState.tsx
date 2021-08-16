import { useState, useEffect, ComponentType } from "react";
import { AppState } from "./state/appStateReducer";

type InjectedProps = {
  initialState: AppState;
};

type PropsWithoutInjected<TBaseProps> = Omit<TBaseProps, keyof InjectedProps>;

export function withInitialState<TProps>(WrappedComponent: ComponentType<PropsWithoutInjected<TProps> & InjectedProps>) {
  return (props: PropsWithoutInjected<TProps>) => {
    const [initialState, setInitialState] = useState<AppState>({ lists: [], draggedItem: null });
    // ...
    return <WrappedComponent {...props} initialState={initialState} />;
  };
}
