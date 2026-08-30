'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';


const NavBar = () => {

	const pathname = usePathname();

	const navItems = [
		{ name: 'About me', href: '/' },
		{ name: 'Projects', href: '/#projects' },
	];

	return(
		<div className="w-2/7 h-screen bg-surface flex justify-center items-start ml-45">
		 <ul className="mt-50">
      {navItems.map(({ name, href }) => (
        <li key={name}>
          <Link
            href={href}
            className={`font-sans transition-all duration-150 hover:text-accent-yellow hover:scale-105 focus-visible:outline-2 focus-visible:outline-accent-yellow ${
              pathname === href ? 'text-foreground' : 'text-foreground-muted'
            }`}
          >
            {name}
          </Link>
          
        </li>
      ))}
     </ul>
       </div>
	)
}

export default NavBar
