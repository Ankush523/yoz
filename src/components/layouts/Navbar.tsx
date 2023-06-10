import logo from '../../../public/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'

const links = [
    { name: 'Cases', url: '#cases' },
    { name: 'Demo', url: '#demo' },
    { name: 'About', url: '#about' }
]

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-w-[70%] mx-auto mt-7 mb-4">
        <div>
            <Image src={logo} alt="YOZ Logo" className='w-[86px] h-[35px]'/>
        </div>
        <ul className="flex justify-between">
            {links.map((link, index) => (
                <li key={index} className="text-sm font-bold mr-4">
                    <Link href={link.url}>{link.name}</Link>
                </li>
            ))}    
        </ul>
    </nav>
  )
}

export default Navbar