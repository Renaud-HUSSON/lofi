import React, { useCallback, useContext, useEffect, useState } from "react"
import { CurrentSongContext } from "../context/CurrentSong"
import { DarkContext } from "../context/Dark"
import PlayerControls from "./Player/PlayerControls"
import PlayerDetails from "./Player/PlayerDetails"
import YoutubeVideo from "../Models/YoutubeVideo"
import { useLocation } from "react-router-dom"

const Player = React.memo(() => {
  const [initialize, setInitialize] = useState(false)

  const [details, setDetails] = useState(false)
  const [player, setPlayer] = useState()
  
  const [currentSong, ] = useContext(CurrentSongContext)
  const [dark, ] = useContext(DarkContext)

  const location = useLocation()

  //Initialize the youtube video object, only once when the initial song is ready
  useEffect(() => {
    if(currentSong && !initialize){
      setPlayer(new YoutubeVideo({
        videoId: currentSong.song.id.videoId
      }))
      setInitialize(true)
    }
  }, [currentSong, initialize])

  useEffect(() => {
    setDetails(false)
  }, [location])

  const handleClick = useCallback(() => {
    setDetails(details => !details)
  }, [])

  return <section className="player overflow-hidden flex justify-between items-center md:px-20 px-5">
    <PlayerControls player={player} />
    <div className="relative z-50 p-2 cursor-pointer" onClick={handleClick} >
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