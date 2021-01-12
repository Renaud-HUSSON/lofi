const PlayerChanel = ({chanel, subs, videos}) => {
  return <div className="hidden lg:block">
    <p className="font-bold">{chanel}</p>
    <p className="text-sm leading-3">{subs} Subscribers</p>
    <p className="text-sm">{videos} Videos</p>
  </div>
}

export default PlayerChanel