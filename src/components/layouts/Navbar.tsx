"use client"
import logo from '../../../public/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const links = [
    { name: 'Cases', url: '#cases' },
    { name: 'Demo', url: '#demo' },
    { name: 'About', url: '#about' }
]

const Navbar = () => {
    const [nav, setNav] = useState(false);
  
    const handleNav = () => {
      console.log("nav clicked");
      nav ? setNav(false) : setNav(true);
    }
    return (
    <nav className="flex justify-between items-center 2xl:max-w-[70%] 2xl:mx-auto md:px-12 px-5 mb-4">
        <div>
            <Image src={logo} alt="YOZ Logo" className='w-[86px] h-[35px]'/>
        </div>
        <ul className="hidden min-[480px]:flex items-center justify-between">
            {links.map((link, index) => (
                <li key={index} className="text-sm font-bold mr-4">
                    <Link href={link.url}>{link.name}</Link>
                </li>
            ))}   
            <li className='text-[10px] font-bold uppercase rounded-full border border-secondary px-2 py-1'>request access</li> 
        </ul>
        <button className="min-[480px]:hidden mx-2" onClick={handleNav}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <div className={`fixed ${nav ? "top-0 transition ease-in duration-300" : "-translate-y-full transition ease-out duration-500"} left-0 z-10 bg-white text-black shadow-lg dark:shadow-2xl rounded-b-2xl border-b border-black/20 w-full`}>
          <button className="fixed right-0 mt-10 mr-6" onClick={handleNav}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="flex flex-col justify-center w-full h-full mt-14 mb-8">
              {links.map((link, index) => (
              <li key={index} className="text-xl font-bold text-center my-2 mx-6">
                  <Link href={link.url} className="">{link.name}</Link>
              </li>
              ))}
              <li className='text-xl font-bold text-center my-2 mx-6'>Request Access</li> 
          </ul>
        </div>
    </nav>
  )
}

export default Navbar