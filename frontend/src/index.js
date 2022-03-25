import React from 'react';
import ReactDOM from 'react-dom'; //para conectar el archivo html
import App from './App';
import './index.css'
import { ThemeProvider } from './context';
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>  
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

