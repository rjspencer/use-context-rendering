import React, { createContext, useState } from "react";

type State = [
  value: number | null,
  setValue: (newValue: any) => void
]

export const GlobalStateContext = createContext<State>([
  null,
  (value: any) => {},
]);

interface GlobalStateProviderProps {
  state: State;
  children: React.ReactNode;
}

export function GlobalStateProvider({ 
  children 
}: GlobalStateProviderProps) {
  const [state, setState] = useState<number>()
  
  return (
    <GlobalStateContext.Provider value={[
      state,
      (value: any) => {
        setState(value)
      }
    ]}>
      {children}
    </GlobalStateContext.Provider>
  );
}