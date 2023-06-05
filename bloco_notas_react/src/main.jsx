import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import BlocContextProvider from "./Context/blocContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BlocContextProvider>
      <App/>
    </BlocContextProvider>
  </React.StrictMode>,
)
