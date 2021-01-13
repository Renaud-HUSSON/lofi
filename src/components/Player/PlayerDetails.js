const PlayerDetails = ({currentSong, details}) => {
  console.log(currentSong)
  
  return currentSong
  ?<div className={`z-10 transition-all overflow-hidden duration-500 player__details fixed right-0 left-0 bg-white dark:bg-black transform ${details ? 'player__details--opened' : ''}`}>
    <div className="flex flex-col md:flex-row justify-center items-center h-full">
      <div className=" w-full mdflex-1">
        <img className="w-11/12 md:w-3/4 mx-auto" src={currentSong.snippet.thumbnails.medium.url} alt=""/>
      </div>
      <div className=" w-11/12 mdflex-1">
        <p className="text-center font-bold text-xl xl:text-2xl my-2"><a className="p-2" target='_blank' rel='noreferrer' href={`https://youtube.com/channel/${currentSong.snippet.channelId}`}>{currentSong.snippet.channelTitle}</a></p>
        <p className="text-center text-xl xl:text-2xl my-2"><a className="p-2" target='_blank' rel='noreferrer' href={`https://youtube.com/watch?v=${currentSong.id.videoId}`}>{currentSong.snippet.title}</a></p>
      </div>
    </div>
  </div>
  :<></>
}

export default PlayerDetails