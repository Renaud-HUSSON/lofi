import HomeImages from "../components/Home/HomeImages"
import HomeText from "../components/Home/HomeText"

const Home = () => {
  return <div className="home flex h-full items-center justify-center md:justify-around flex-col lg:flex-row">
    <HomeText />
    <HomeImages />
  </div>
}

export default Home