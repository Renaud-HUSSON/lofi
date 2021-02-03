import { useContext } from "react"
import Song from "../components/Collection/Songs"
import Loading from "../components/shared/Loading"
import { SongsContext } from "../context/Songs"
import Head from 'next/head'
import Ga from '../components/Ga'

const Collection = () => {
  const [songs, ] = useContext(SongsContext)
  
  return <Ga>
    {
      songs
      ?<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Head>
          <title>Collection - Lofi Music App</title>
          <meta name="title" content="About - Collection - Lofi Music App"/>
          <meta name="description" content="Displays most famous youtube lofi lives and allows you to listen to them, with a quick way to switch to another"/>
    
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://lofimusicapp.com/collection"/>
          <meta property="og:title" content="Collection - Lofi Music App"/>
          <meta property="og:description" content="Displays most famous youtube lofi lives and allows you to listen to them, with a quick way to switch to another"/>
          <meta property="og:image" content="https://lofimusicapp.com/images/lofi-image.png"/>
    
          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content="https://lofimusicapp.com/collection"/>
          <meta property="twitter:title" content="Collection - Lofi Music App"/>
          <meta property="twitter:description" content="Displays most famous youtube lofi lives and allows you to listen to them, with a quick way to switch to another"/>
          <meta property="twitter:image" content="https://lofimusicapp.com/images/lofi-image.png"/>
        </Head>
        
        {
          songs.map((song, index) => {
            return <Song key={song.video} song={song} index={index}/>
          })
        }
      </section>
      :<Loading />
    }
  </Ga>
}

export default Collection