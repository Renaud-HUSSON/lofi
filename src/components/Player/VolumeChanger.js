import { useRef, useState } from "react"
import { useContext, useEffect } from "react/cjs/react.development"
import { DarkContext } from "../../context/Dark"
import { PlayerContext } from "../../context/Player"

const VolumeChanger = () => {
  const range = useRef()
  
  const [player, ] = useContext(PlayerContext)
  const [dark, ] = useContext(DarkContext)

  const [volume, setVolume] = useState(35)
  const [volumeEnabled, setVolumeEnabled] = useState(true)

  useEffect(() => {
    range.current.value = 35
  }, [])
  
  useEffect(() => {
    if(player){
      player.setVolume(volume)
    }
  }, [volume, setVolume, player])

  const handleChange = (e) => {
    setVolume(e.target.value)
  }

  const handleClick = () => {
    if(player){
      setVolumeEnabled(volumeEnabled => !volumeEnabled)
      
      if(volumeEnabled){
        player.setVolume(0)
        range.current.value = 0
      }else{
        player.setVolume(volume)
        range.current.value = volume
      }
    }
  }
  
  return <>
    {
      volumeEnabled
      ?<svg onClick={handleClick} className="cursor-pointer mr-3" width="30" height="30" viewBox="0 0 512 512">
        <path style={{fill: `${dark ? '#FFF' : '#161616'}` }} d="M234.67,106.67V405.33A21.33,21.33,0,0,1,200,422L99.18,341.33H64a64.07,64.07,0,0,1-64-64V234.67a64.07,64.07,0,0,1,64-64H99.18L200,90a21.33,21.33,0,0,1,34.66,16.66Zm54.11,90.68a21.33,21.33,0,0,0-1.19,30.15,42.23,42.23,0,0,1,0,57,21.33,21.33,0,1,0,31.33,29,84.89,84.89,0,0,0,0-114.94A21.34,21.34,0,0,0,288.78,197.34ZM379,137.87a21.33,21.33,0,0,0-30.78,29.54,127.61,127.61,0,0,1,0,177.19A21.33,21.33,0,1,0,379,374.14a170.26,170.26,0,0,0,0-236.27Zm60.36-60.6a21.34,21.34,0,0,0-30.55,29.79,213.59,213.59,0,0,1,0,297.9,21.34,21.34,0,0,0,30.55,29.79,256.28,256.28,0,0,0,0-357.48Z"/>
      </svg>
      :<svg onClick={handleClick} className="cursor-pointer mr-3" width="30" height="30" viewBox="0 0 512 512">
        <path style={{fill: `${dark ? '#FFF' : '#161616'}` }} d="M256,93.07V418.93a23.27,23.27,0,0,1-37.81,18.17l-110-88H69.83A69.9,69.9,0,0,1,0,279.28V232.72A69.9,69.9,0,0,1,69.83,162.9h38.39l110-88A23.27,23.27,0,0,1,256,93.07ZM452,255.9l53.2-53.2a23.27,23.27,0,1,0-32.91-32.91L419,223l-53.44-53.33a23.28,23.28,0,1,0-32.89,33l53.41,53.29-53.39,53.38a23.27,23.27,0,1,0,32.91,32.91l53.42-53.42,52.86,52.75a23.28,23.28,0,0,0,32.89-33Z"/>
      </svg>
    }
    <input type="range" onChange={handleChange} ref={range}/>
  </>
}

export default VolumeChanger