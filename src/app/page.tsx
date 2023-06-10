import Navbar from '@/components/layouts/Navbar'
import Hero from '../components/landing/Hero'
import Marquee from '../components/landing/Marquee'
import Features from '../components/features/Features'
import UseCases from '@/components/useCases/UseCases'
import Footer from '@/components/layouts/Footer'
import Card_1 from '@/components/features/Card_1'
import Card_2 from '@/components/features/Card_2'
import Card_3 from '@/components/features/Card_3'

export default function Home() {
  return (
    <main className="w-screen h-screen overflow-x-hidden mx-auto">
      <section className="bg-landing bg-no-repeat bg-cover pt-7 w-screen h-screen">
        <Navbar/>
        <Hero/>
      </section>
      <Marquee/>
      <Features/>
      <section>
        <Card_1/>
        <Card_2/>
        <Card_3/>
      </section>
      <UseCases/> 
      <Footer/>    
    </main>
  )
}
