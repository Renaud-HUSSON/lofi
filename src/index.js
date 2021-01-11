import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/index.css'
import {BrowserRouter} from 'react-router-dom'
import { MenuProvider } from './context/Menu';
import { DarkProvider } from './context/Dark';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkProvider>
        <MenuProvider>
          <App />
        </MenuProvider>
      </DarkProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
