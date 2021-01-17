import React, { useCallback, useContext, useEffect, useState } from "react"
import { CurrentSongContext } from "../context/CurrentSong"
import { DarkContext } from "../context/Dark"
import PlayerControls from "./Player/PlayerControls"
import PlayerDetails from "./Player/PlayerDetails"
import { useLocation } from "react-router-dom"
import VolumeChanger from "./Player/VolumeChanger"

const Player = React.memo(() => {
  const [currentSong, ] = useContext(CurrentSongContext)
  const [dark, ] = useContext(DarkContext)

  const [details, setDetails] = useState(false)

  const location = useLocation()

  useEffect(() => {
    setDetails(false)
  }, [location])

  const handleClick = useCallback(() => {
    setDetails(details => !details)
  }, [])

  return <section className="player flex justify-center overflow-hidden relative items-center md:px-20 px-5">
    <div className="hidden lg:flex items-center absolute top-1/2 left-20 transform -translate-y-1/2">
      <VolumeChanger />
    </div>
    <PlayerControls />
    <div className="absolute transform -translate-y-1/2bottom-1/2 right-4 lg:right-20 z-50 p-2 cursor-pointer" onClick={handleClick} >
      <svg width="7" height="27" viewBox="0 0 7 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="3.5" cy="3.5" r="3.5" fill={dark ? '#FFF' : '#161616'}/>
        <circle cx="3.5" cy="13.5" r="3.5" fill={dark ? '#FFF' : '#161616'}/>
        <circle cx="3.5" cy="23.5" r="3.5" fill={dark ? '#FFF' : '#161616'}/>
      </svg>
    </div>
    <PlayerDetails currentSong={currentSong} details={details}/>
  </section>
})

export default Player