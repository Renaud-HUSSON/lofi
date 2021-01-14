import { useContext } from "react"
import { DarkContext } from "../../context/Dark"
import { VideoEnabledContext } from "../../context/VideoEnabled"

const ThemeSwitch = () => {
  const [dark, setDark] = useContext(DarkContext)
  const [videoEnabled, setVideoEnabled] = useContext(VideoEnabledContext)
  
  const handleThemeClick = () => {
    setDark(theme => !theme)
  }
  
  const handleVideoClick = () => {
    setVideoEnabled(video => !video)
  }
  
  return <div>
    <div className="flex justify-between items-center p-4 pb-0">
      <p>THEME:</p>
        <div className="border transition-colors duration-500 border-black w-10 h-5 bg-white rounded-xl relative cursor-pointer mx-3" onClick={handleThemeClick}>
          <div className={`w-4 h-4 bg-black rounded-lg absolute ${!dark ? 'left-0.5' : 'right-0.5'} top-1/2 transform -translate-y-1/2`}></div>
        </div>
    </div>
    <div className="flex justify-between items-center p-4 pb-0">
      <p>VIDEO:</p>
        <div className="border transition-colors duration-500 border-black w-10 h-5 bg-white rounded-xl relative cursor-pointer mx-3" onClick={handleVideoClick}>
          <div className={`w-4 h-4 bg-black rounded-lg absolute ${!videoEnabled ? 'left-0.5' : 'right-0.5'} top-1/2 transform -translate-y-1/2`}></div>
        </div>
    </div>
  </div>
}

export default ThemeSwitch