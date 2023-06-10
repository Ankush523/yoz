import feat_icon from '/public/assets/features/card_2/feat_icon.svg'
import feat_img from '/public/assets/features/card_2/feat_img.png'
import Image from 'next/image'

const features = [
  { 
    title: "Multi-channel delivery", 
    description: "Easy integration with existing messaging apps", 
    icon: "/assets/features/card_2/feat_icon_1.svg"
  },
  { 
    title: "Simple user interface", 
    description: "Built-in subscribe dialog; no SDK required",
    icon: "/assets/features/card_2/feat_icon_2.svg"
  },
  {
    title: "No extra apps needed", 
    description: "Reach users where they are",
    icon: "/assets/features/card_2/feat_icon_3.svg"
  },
]

const Card_2 = () => {
  return (
    <div className="flex min-[992px]:flex-row flex-col items-center border border-secondary/50 rounded-md max-w-[1150px] min-[1230px]:mx-auto mx-6 my-[13px]">
      <div className="min-[992px]:w-[50%] min-[992px]:p-16 p-5">
        <div className="min-[992px]:flex min-[992px]:items-end min-[992px]:pt-20 px-10">
          <Image src={feat_img} alt="Feature Card 2 Image." className="w-full drop-shadow-2xl drop-shadow-white"/>
        </div>
      </div>
      <div className="min-[992px]:w-[50%] min-[992px]:p-16 px-5 pb-5 min-[992px]:pb-0">
        <div className='bg-[#495aeb] rounded-xl p-2 w-max max-[991px]:mx-auto'>
          <Image src={feat_icon} alt="feature icon"/>
        </div>
        <h3 className="min-[992px]:text-[32px] text-2xl text-center min-[992px]:text-left font-semibold mt-6">
          Provide a seamless
          <br/>
          user experience
        </h3>
        { features.map((feature, index) => (
          <div key={index} className="flex mt-6">
            <div className="w-max mr-4">
              <Image src={feature.icon} alt="feature icon" width={25} height={25}/>  
            </div>
            <div className=''>
              <p className='font-semibold '>{feature.title}</p>
              <p className='text-sm text-secondary'>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card_2