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
import { VideoEnabledProvider } from './context/VideoEnabled';
import { PlayProvider } from './context/Play';
import { PlayerProvider } from './context/Player';
import {HelmetProvider} from 'react-helmet-async'

require('dotenv').config()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkProvider>
        <VideoEnabledProvider>
          <SongsProvider>
            <PlayerProvider>
              <CurrentSongProvider>
                <PlayProvider>
                  <MenuProvider>
                    <HelmetProvider>
                      <App />
                    </HelmetProvider>
                  </MenuProvider>
                </PlayProvider>
              </CurrentSongProvider>
            </PlayerProvider>
          </SongsProvider>
        </VideoEnabledProvider>
      </DarkProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
