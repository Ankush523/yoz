import Link from 'next/link'
import Image from 'next/image'
import { IoIosArrowForward } from 'react-icons/io'

const Post = [
  {
    background: "/assets/useCases/background_1.jpg",
    companyLogo: "/assets/useCases/cryptoPunks.png",
    companyName: "Crypto Punks",
    title: "Giving Punk Collectors the Edge with Notifications",
    subtitle: "CryptoPunks is a popular NFT collection with 10,000 unique characters on Ethereum blockchain and inspired the ERC-721 standard for digital art and collectibles.",
  },
  {
    background: "/assets/useCases/background_2.jpg",
    companyLogo: "/assets/useCases/aave.png",
    companyName: "AAVE",
    title: "Growing Protocol Participation with Notifications",
    subtitle: "AAVE is a leading decentralized community-governed protocol where token holders propose, vote on, and implement changes that affect the future direction of the protocol.",
  }
]

const PostCard = () => {
  return (
    <>
    {Post.map((post, index) => (
      <div 
        key={index} 
        style={{ backgroundImage: `url(${post.background})` }}
        className="bg-cover bg-no-repeat border border-secondary/50 rounded-md min-[992px]:mr-[13px] min-[992px]:px-16 px-5 min-[992px]:w-[50%] max-[991px]:mx-6 max-[991px]:mb-6"
      >
        <p className="my-9">
          <Image src={post.companyLogo} alt={post.companyName} width={100} height={100}/>
        </p>
        <h3 className="text-[32px] font-semibold">
          {post.title}
        </h3>
        <p className="text-lg font-bold text-secondary text-ellipsis mt-4 mb-6">
          {post.subtitle}
        </p>
        <div className="flex items-center mb-16">
          <Link href="/" className="text-xs font-semibold uppercase">read more</Link>
          <button><IoIosArrowForward/></button>
        </div>
      </div>
    ))}
    </>
  )
}

export default PostCard