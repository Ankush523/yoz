import PostCard from "./PostCard"
const UseCases = () => {
  return (
    <div className="my-20 min-[992px]:ml-10 min-[992px]:mr-5">
      <p className="text-lg text-center text-secondary mb-4">
        Use Cases
      </p>
      <h2 className="md:text-[42px] text-2xl text-center font-bold mx-auto mb-[70px]">
        Discover the Benefits of Yoz Notifications
      </h2>
      <div className="flex min-[992px]:flex-row flex-col min-[992px]:max-w-[1150px] w-full min-[992px]:mx-auto">
        <PostCard/>
      </div>
    </div>
  )
}

export default UseCases