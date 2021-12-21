import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/styles.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from "@apollo/client";
import client from './graphql/client';
import {AppProvider} from './context/appContext';

ReactDOM.render(

  <AppProvider>
    
      <ApolloProvider client={client}>

        <App />

    </ApolloProvider>
  
  </AppProvider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
