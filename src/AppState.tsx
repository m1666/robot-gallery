import React, { useState } from "react";

interface AppStateValue {
  username: string;
  shoppingCart: { items: { id: number; name: string }[] };
}

const defaultContextValue: AppStateValue = {
  username: "Lpz",
  shoppingCart: { items: [] },
};

export const AppContext = React.createContext(defaultContextValue);

export const AppSetStateContext = React.createContext<
  React.Dispatch<React.SetStateAction<AppStateValue>> | undefined
>(undefined);

export const AppStateProvider: React.FC = (props) => {
  const [state, setState] = useState(defaultContextValue);
  return (
    <AppContext.Provider value={state}>
      <AppSetStateContext.Provider value={setState}>
        {props.children}
      </AppSetStateContext.Provider>
    </AppContext.Provider>
  );
};
