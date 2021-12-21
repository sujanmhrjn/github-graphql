import React, { useReducer } from 'react';

const AppContext = React.createContext(null);
const initialState = {
    users: [],
    selectedUser:null,
    selectedRepository: null,

  }
  function reducer(state, action) {
    return { ...state, ...action };
  }
const AppProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(reducer, initialState);

      return (
        <AppContext.Provider value={{state, dispatch}}>
          {children}
        </AppContext.Provider>
      )
    
  }
  export { AppContext, AppProvider };