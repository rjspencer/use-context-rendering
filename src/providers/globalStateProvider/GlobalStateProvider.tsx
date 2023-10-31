import React, { createContext, useState } from "react";

type State<T> = [
  value: T | undefined,
  setValue: (newValue: T) => void
]

export const GlobalStateContext = createContext<State<number>>([
  undefined,
  () => { },
]);

interface GlobalStateProviderProps {
  children: React.ReactNode;
}

export function GlobalStateProvider({
  children
}: GlobalStateProviderProps) {
  const [state, setState] = useState<number>()

  return (
    <GlobalStateContext.Provider value={[
      state,
      (value: number) => {
        setState(value)
      }
    ]}>
      {children}
    </GlobalStateContext.Provider>
  );
}