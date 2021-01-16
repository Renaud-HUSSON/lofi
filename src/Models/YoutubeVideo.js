class YoutubeVideo {
  #player
  #videoId
  #id
  
  constructor(data = {}){
    if(data.player){
      this.#player = data.player
    }
    if(data.videoId){
      this.#videoId = data.videoId
    }
    if(data.id){
      this.#id = data.id
    }
    
    if(!window.YT){
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';

      window.onYouTubeIframeAPIReady = this.loadVideo;

      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
    }
  }

  loadVideo = () => {
    this.#player = new window.YT.Player(this.#id || 'youtubevideoplayer', {
      height: '360',
      width: '640',
      videoId: this.#videoId,
      suggestedQuality: 'medium',
      events: {
        'onStateChange': this.stateChange()
      },
      playerVars: { 
        'autoplay': 0,
        'controls': 0, 
        'rel': 0,
        'fs' : 0,
        'disablekb': 1,
        'iv_load_policy': 3,
        'showinfo': 0,
        'modestbranding': 1
      }
    });
  }

  changeVideo(id){
    if(this.#player){
      this.#player.loadVideoById({
        'videoId': id,
        'suggestedQuality': 'medium'
      })
    }    
  }

  play = () => {
    this.#player.playVideo()
  }
  
  stop = () => {
    this.#player.pauseVideo()
  }

  stateChange = () => {
  }

  //GETTERS & SETTERS
  get player(){
    return this.#player
  }

  set player(player){
    this.#player = player;
  }

  get videoId() {
    return this.#videoId
  }

  set videoId(videoId){
    this.#videoId = videoId
  }

  get id() {
    return this.#id
  }

  set id(id){
    this.#id = id
  }
}

export default YoutubeVideo