const YoutubeVideo = ({videoEnabled}) => {
  return <div className={`mx-auto ${!videoEnabled ? 'h-0 overflow-hidden w-0' : 'w-full'}`}>
    <div className="video-container">
      <div className="mx-auto" id="youtubevideoplayer"></div>
    </div> 
  </div>
}

export default YoutubeVideo