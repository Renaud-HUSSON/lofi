const Song = ({image, title}) => {
  return <div className="song">
    <img className="w-full" src={image} alt={title} />
  </div>
}

export default Song