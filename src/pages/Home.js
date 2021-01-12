import HomeImages from "../components/Home/HomeImages"
import HomeText from "../components/Home/HomeText"

const Home = () => {
  return <div className="home flex flex-col lg:flex-row h-full items-center justify-center">
    <HomeText />
    <HomeImages />
  </div>
}

export default Home