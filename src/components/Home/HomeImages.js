const HomeImages = () => {
  return <div className="lg:w-1/2 w-full mb-5" >
    <div className="flex">
      <div className="w-1/2 ">
        <img className="w-full" src={`${process.env.PUBLIC_URL}/images/lofi1.jpg`} alt="Lofi thumbnail"/>
        <img className="w-full" src={`${process.env.PUBLIC_URL}/images/lofi2.jpg`} alt="Lofi thumbnail"/>
      </div>
      <div className="w-1/2 mt-10">
        <img className="w-full" src={`${process.env.PUBLIC_URL}/images/lofi3.jpg`} alt="Lofi thumbnail"/>
        <img className="w-full" src={`${process.env.PUBLIC_URL}/images/lofi4.jpg`} alt="Lofi thumbnail"/>
      </div>
    </div>
  </div>
}

export default HomeImages