import { useContext } from "react"
import { VideoEnabledContext } from "../../context/VideoEnabled"
import YoutubeVideo from "./YoutubeVideo"

const PlayerDetails = ({currentSong, details}) => {
  const [videoEnabled, ] = useContext(VideoEnabledContext)
  console.log(currentSong)
  
  return currentSong
  ?<div className={`no-scrollbar z-10 transition-all overflow-hidden duration-500 player__details fixed right-0 left-0 bg-white dark:bg-black transform ${details ? 'player__details--opened' : ''}`}>
    <div className="minHeightYoutube md:px-20 px-5 flex flex-col lg:flex-row justify-center items-center h-full">
      <div className="w-full lg:flex-1">
        <YoutubeVideo videoEnabled={videoEnabled}/>
        {
          !videoEnabled
          ?<img className="w-full g:w-3/4 mx-auto" src={currentSong.snippet.thumbnails.medium.url} alt=""/>
          :<></>
        }
      </div>
      <div className=" w-full lg:flex-1">
        <p className="text-center font-bold text-xl xl:text-2xl my-2"><a className="p-2" target='_blank' rel='noreferrer' href={`https://youtube.com/channel/${currentSong.snippet.channelId}`}>{currentSong.snippet.channelTitle}</a></p>
        <p className="text-center text-xl xl:text-2xl my-2"><a className="p-2" target='_blank' rel='noreferrer' href={`https://youtube.com/watch?v=${currentSong.id.videoId}`}>{currentSong.snippet.title}</a></p>
      </div>
    </div>
  </div>
  :<></>
}

export default PlayerDetails