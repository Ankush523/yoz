
const Hero = () => {
  return (
    <article className="flex flex-col justify-center items-center w-[33%] min-h-[calc(100vh-75px)] mx-auto">
        <h1 className="text-4xl text-center font-bold mt-10 mb-8">
            We’re building Web3 notifications so you don’t have to.
        </h1>
        <h3 className="text-lg text-center text-secondary mx-24 mb-10">
            Save time, streamline your development, and reach users on their preferred channels
        </h3>
        <div className="bg-early-access-gradient bg-cover text-center rounded-[32px] w-max">
            <p className="text-[10px] font-bold mt-2">IN PRIVATE BETA</p>
            <button className="bg-white text-black font-bold py-3.5 px-10 m-2 rounded-3xl">GET EARLY ACCESS</button>
        </div>
    </article>
  )
}

export default Hero