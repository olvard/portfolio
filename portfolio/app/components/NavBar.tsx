'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';


const NavBar = () => {

	const pathname = usePathname();

	const navItems = [
		{ name: 'About me', href: '/' },
		{ name: 'Projects', href: '/#projects' },
		{ name: 'Resume', href: '/resume' },
	];

	return(
		<div className="w-2/7 h-screen bg-gray-100 flex justify-center items-start ml-50">
		 <ul className="mt-50">
      {navItems.map(({ name, href }) => (
        <li key={name}>
          <Link
            href={href}
            className={`transition-all duration-150 hover:text-black hover:scale-105 ${
              pathname === href ? 'text-black' : 'text-gray-500'
            }`}
          >
            {name}
          </Link>
          
        </li>
      ))}
      <li>
        <hr className="my-2 border-t-1 border-gray-300" />
      </li>
      <li>
        <Link
          className={`transition-all duration-150 hover:text-black hover:scale-105 ${
        pathname === '/contact' ? 'text-black' : 'text-gray-500'
          }`}
          href="/contact"
        >
          Contact
        </Link>
      </li>
    </ul>
       </div>
	)
}

export default NavBar