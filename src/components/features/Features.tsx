import Card_1 from './Card_1'
import Card_2 from './Card_2'
import Card_3 from './Card_3'

const Features = () => {
  return (
    <section className="flex flex-col items-center ">
      <p className="text-lg text-center text-secondary mb-4">
        Designed by Developers for Developers
      </p>
      <h2 className="text-[42px] text-center font-bold w-[30%] mx-auto mb-[70px]">
        Your no-code web3 notification system
      </h2>
      <Card_1/>
      <Card_2/>
      <Card_3/>
    </section>
  )
}

export default Features