import { AiOutlineTwitter } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import Link from 'next/link';

const socials = [
  { logo: <AiOutlineTwitter/>, link: 'https://twitter.com' },
  { logo: <FaDiscord/>, link: 'https://www.linkedin.com/in' },
];

const Footer = () => {
  return (
    <div className="flex flex-wrap items-center min-[480px]:justify-between justify-center w-[70%] mx-auto pt-[32px] pb-[154px]">
      <p className="text-sm text-secondary text-center py-2">
        Copyright © 2023 Yoz Labs. All rights reserved.
      </p>
      <div className='flex'>
        {socials.map((social, index) => (
          <Link key={index} href={social.link} target="_blank" className='text-secondary text-xl mx-2 py-2'>
              {social.logo}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Footer