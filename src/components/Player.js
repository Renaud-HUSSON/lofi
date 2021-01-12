import PlayerChanel from "./Player/PlayerChanel"
import PlayerControls from "./Player/PlayerControls"
import PlayerTitle from "./Player/PlayerTitle"

const Player = () => {
  return <section className="player overflow-hidden flex justify-between items-center md:pl-20 md:pr-24 pl-5 pr-9">
    <PlayerTitle artist="Lorem" song="Lorem ipsum lorem ipsum"/>
    <PlayerControls />
    <PlayerChanel chanel="Lorem" subs="7320000" videos="240"/>
  </section>
}

export default Player