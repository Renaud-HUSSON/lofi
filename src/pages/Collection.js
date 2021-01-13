import { useContext } from "react"
import Song from "../components/Collection/Songs"
import Loading from "../components/shared/Loading"
import { SongsContext } from "../context/Songs"

const Collection = () => {
  const [songs, ] = useContext(SongsContext)
  
  return songs
  ?<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {
      songs.map(song => {
        return <Song key={song.id.videoId} image={song.snippet.thumbnails.medium.url}/>
      })
    }
  </section>
  :<Loading />
}

export default Collection