import { Link } from "react-router-dom"

const HomeText = () => {
  return <section className="lg:w-1/2 self-start lg:self-center mb-5">
    <p className="2xl:text-7xl xl:text-6xl md:text-5xl text-4xl">Do you like <strong>lofi</strong>?</p>
    <p className="2xl:text-7xl xl:text-6xl md:text-5xl text-4xl mb-5">If you do,</p>
    <Link className="inline-block xl:text-3xl lg:text-2xl text-base bg-black p-6 text-white" to="/collection">SEE THE COLLECTION</Link>
  </section>
}

export default HomeText