import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/index.css'
import {BrowserRouter} from 'react-router-dom'
import { MenuProvider } from './context/Menu';
import { DarkProvider } from './context/Dark';
import { SongsProvider } from './context/Songs';
import { CurrentSongProvider } from './context/CurrentSong';

require('dotenv').config()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkProvider>
        <SongsProvider>
          <CurrentSongProvider>
            <MenuProvider>
              <App />
            </MenuProvider>
          </CurrentSongProvider>
        </SongsProvider>
      </DarkProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
