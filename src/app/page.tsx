import Navbar from '@/components/layouts/Navbar'
import Hero from '../components/landing/Hero'
import Marquee from '../components/landing/Marquee'
import Features from '../components/features/Features'
import UseCases from '@/components/useCases/UseCases'
import Footer from '@/components/layouts/Footer'

export default function Home() {
  return (
    <main className="w-full h-screen mx-auto">
      <Navbar/>
      <Hero/>
      <Marquee/>
      <Features/>
      <UseCases/> 
      <Footer/>    
    </main>
  )
}
