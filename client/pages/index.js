import Head from "next/head"
import HomeImages from "../components/Home/HomeImages"
import HomeText from "../components/Home/HomeText"

const Home = () => {
  return <div className="home flex flex-col lg:flex-row h-full items-center justify-center">
    <Head>
      <title>Home - Lofi Music App</title>
      <meta name="title" content="Home - Lofi Music App"/>
      <meta name="description" content="Do you like lofi? if you do this site is made for you, visit us to discover why"/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://lofimusicapp.com/"/>
      <meta property="og:title" content="Home - Lofi Music App"/>
      <meta property="og:description" content="Do you like lofi? if you do this site is made for you, visit us to discover why"/>
      <meta property="og:image" content="https://lofimusicapp.com/images/lofi-image.png"/>

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://lofimusicapp.com/"/>
      <meta property="twitter:title" content="Home - Lofi Music App"/>
      <meta property="twitter:description" content="Do you like lofi? if you do this site is made for you, visit us to discover why"/>
      <meta property="twitter:image" content="https://lofimusicapp.com/images/lofi-image.png"/>
    </Head>
    
    <HomeText />
    <HomeImages />
  </div>
}

export default Home