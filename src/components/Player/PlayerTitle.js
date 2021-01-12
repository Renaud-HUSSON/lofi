const PlayerTitle = ({artist, song}) => {
  return <div className="hidden lg:block">
    <p className="leading-3">{song}</p>
    <p className="font-bold">{artist}</p>
  </div>
}

export default PlayerTitle