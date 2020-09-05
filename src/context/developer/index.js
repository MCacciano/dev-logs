import React, { useReducer } from 'react';

import developerReducer from './reducer';
import initialState from './state';

const DeveloperStateContext = React.createContext();
const DeveloperDispatchContext = React.createContext();

const DeveloperProvider = ({ children }) => {
  const [state, dispatch] = useReducer(developerReducer, initialState);

  return (
    <DeveloperStateContext value={state}>
      <DeveloperDispatchContext value={dispatch}>{children}</DeveloperDispatchContext>
    </DeveloperStateContext>
  );
};

const useDeveloperState = async () => {
  const context = useContext(DeveloperStateContext);

  if (context === undefined) {
    throw new Error('useDeveloperState must be used within a DeveloperProvider');
  }

  return context;
};
const useDeveloperDispatch = async () => {
  const context = useContext(DeveloperDispatchContext);

  if (context === undefined) {
    throw new Error('useDeveloperDispatch must be used within a DeveloperProvider');
  }

  return context;
};

export { DeveloperProvider, useDeveloperState, useDeveloperDispatch };
