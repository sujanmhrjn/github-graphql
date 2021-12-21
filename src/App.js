
//token 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
import React from "react";


import HomePage from './pages';
import RepositoriesPage from './pages/repositories';
import IssuePage from './pages/issues';
import { useContext } from 'react';
import { AppContext } from "./context/appContext";


const App = () => {
  const {state, dispatch} = useContext(AppContext)
  return (


      <div>
        {!state.selectedUser && <HomePage/>}
        {state.selectedUser && !state.selectedRepository && <RepositoriesPage/> }
        {state.selectedUser && state.selectedRepository && <IssuePage/>}
      </div>


  );
}

export default App;
