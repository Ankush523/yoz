import feat_icon from '/public/assets/features/card_3/feat_icon.svg'
import feat_img from '/public/assets/features/card_3/feat_img.png'
import Image from 'next/image'

const features = [
  { 
    title: "Delivery conversion", 
    description: "Track notifications sent and delivered", 
    icon: "/assets/features/card_3/feat_icon_1.svg"
  },
  { 
    title: "Error detection", 
    description: "Monitor error rates and identify issues early",
    icon: "/assets/features/card_3/feat_icon_2.svg"
  },
  {
    title: "Subscriber insights", 
    description: "Insights on subscribe and unsubscribe rates",
    icon: "/assets/features/card_3/feat_icon_3.svg"
  },
]

const Card_3 = () => {
  return (
    <div className="flex items-center border border-secondary/50 rounded-md w-[55%] my-[13px]">
      <div className="w-[50%] p-16">
        <div className='bg-[#495aeb] rounded-xl p-2 w-max'>
          <Image src={feat_icon} alt="feature icon"/>
        </div>
        <h3 className="text-[32px] font-semibold mt-6">
          Get live
          <br/>
          performance stats
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
      <div className="w-[50%] mx-11">
        <Image src={feat_img} alt="Feature Card 1 Image." className="w-full"/>
      </div>
    </div>
  )
}

export default Card_3