import { Link } from "react-router-dom"

const HomeText = () => {
  return <section className="lg:w-1/2 self-start lg:self-center mb-5">
    <p className="2xl:text-7xl xl:text-6xl md:text-5xl text-4xl">Do you like <strong>lofi</strong>?</p>
    <p className="2xl:text-7xl xl:text-6xl md:text-5xl text-4xl mb-5">If you do,</p>
    <Link className="transition-colors font-semibold duration-500 inline-block xl:text-3xl lg:text-2xl text-base dark:bg-white bg-black p-4 sm:px-6 sm:py-4 dark:text-black text-white" to="/collection">SEE THE COLLECTION</Link>
  </section>
}

export default HomeText