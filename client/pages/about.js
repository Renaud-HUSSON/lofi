import Head from "next/head"
import Ga from '../components/Ga'

const About = () => {
  return <Ga>
    <section className="pt-8">
      <Head>
        <title>About - Lofi Music App</title>
        <meta name="title" content="About - Lofi Music App"/>
        <meta name="description" content="Explains what is Lofi Music App, what you can do with it and how simple it is"/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://lofimusicapp.com/about"/>
        <meta property="og:title" content="About - Lofi Music App"/>
        <meta property="og:description" content="Explains what is Lofi Music App, what you can do with it and how simple it is"/>
        <meta property="og:image" content="https://lofimusicapp.com/images/lofi-image.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://lofimusicapp.com/about"/>
        <meta property="twitter:title" content="About - Lofi Music App"/>
        <meta property="twitter:description" content="Explains what is Lofi Music App, what you can do with it and how simple it is"/>
        <meta property="twitter:image" content="https://lofimusicapp.com/images/lofi-image.png"/>
      </Head>
      
      <h1 className="mb-5 md:text-5xl text-4xl font-black">ABOUT</h1>
      <p className="mb-5 text-xl">This application displays most famous lofi lives on youtube, and allows you to listen to them from here, while also providing a way to quickly switch to another if you’re bored of one, or you just want to change.</p>
      <p className="mb-5 text-xl">You can find the code on <a className="text-blue-500" href="https://github.com/Renaud-HUSSON/lofi" target="_blank" rel="noreferrer">github</a>, and feel free to share !</p> 
      <p className="mb-5">(Youtube chanels and lives are linked in the song details accessible from the bottom bar)</p>
    </section>
  </Ga> 
}

export default About