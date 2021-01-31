import Layout from '../components/Layout'
import '../styles/index.css'
import React from 'react'
import { DarkProvider } from '../context/Dark'
import { SongsProvider } from '../context/Songs'
import { PlayerProvider } from '../context/Player'
import { PlayProvider } from '../context/Play'
import { CurrentSongProvider } from '../context/CurrentSong'
import { MenuProvider } from '../context/Menu'
import { VideoEnabledProvider } from '../context/VideoEnabled'

function MyApp({ Component, pageProps }) {
  return <React.StrictMode>
    <DarkProvider>
      <VideoEnabledProvider>
        <SongsProvider>
          <PlayerProvider>
            <PlayProvider>
              <CurrentSongProvider>
                <MenuProvider>
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </MenuProvider>
              </CurrentSongProvider>
            </PlayProvider>
          </PlayerProvider>
        </SongsProvider>
      </VideoEnabledProvider>
    </DarkProvider>
  </React.StrictMode>
}

export default MyApp
