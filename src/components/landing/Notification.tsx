import Image from 'next/image'
import NotificationImg_1 from '/public/assets/notification.png'
import NotificationImg_2 from '/public/assets/notification_2.png'
import NotificationImg_3 from '/public/assets/notification_3.png'
import NotificationImg_4 from '/public/assets/notification_4.png'

const Notification = () => {
  return (
    <div className="relative stack mx-auto">
        <Image src={NotificationImg_1} alt="Notification" className="card one absolute w-[65%] mx-auto"/>
        <Image src={NotificationImg_2} alt="Notification" className="card two absolute w-[65%] mx-auto"/>
        <Image src={NotificationImg_3} alt="Notification" className="card three absolute w-[65%] mx-auto"/>
        <Image src={NotificationImg_4} alt="Notification" className="card two absolute w-[65%] mx-auto"/>
        <Image src={NotificationImg_1} alt="Notification" className="card three w-[65%] mx-auto opacity-0"/>
    </div>
  )
}

export default Notification