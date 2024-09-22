import Image from 'next/image';
import React from 'react';
import nextStoreLogoLight from '@/app/assets/NextStore-light.png';
import Link from 'next/link';

interface NavButton {
    btnName: string,
    path: string
};

interface NavLinks {
    linkName: string,
    path: string
};

const Header: React.FC = () => {
    const navBtn: NavButton[] = [
        { btnName: 'Login', path: '/login' },
        { btnName: 'Sign Up', path: '/sign-up' },
    ];

    const links: NavLinks[] = [
        { linkName: 'Home', path: '/' },
        { linkName: 'About', path: '/about' },
    ];

    return (
        <header className='bg-[#ffff] container xl:px-24 py-2 shadow-md shadow-[#6593fc]'>
            <nav className='flex justify-between items-center'>
                <div>
                    <Link href={'/'}>
                        <Image
                            src={nextStoreLogoLight}
                            alt='NextStore'
                            className='w-24 h-auto'
                            priority
                        />
                    </Link>
                </div>

                <div className=''>
                    <input
                        type="text"
                        name="SearchProduct"
                        id="SearchProduct"
                        className='border border-r-0 border-[#dd37fc] focus:outline-none bg-inherit text-[#6593fc] font-bold rounded-l-full w-[362px] px-6 py-3'
                    />
                    <input 
                    type="submit"
                    value={'Search'}
                    className='border border-l-0 border-[#dd37fc] focus:outline-none bg-[#dd37fc] text-[#161616] font-bold hover:cursor-pointer px-6 rounded-r-full py-3'
                     />
                </div>

                {/* NavLinks */}
                <ul className='flex gap-6'>
                    {
                        links.map((link, n) => (
                            <li key={n}><Link href={link.path}>{link.linkName}</Link></li>
                        ))
                    }
                </ul>

                <div className='flex gap-6'>
                    {
                        navBtn.map((btn, n) => (
                            <button key={n}><Link href={btn.path}>{btn.btnName}</Link></button>
                        ))
                    }
                </div>
            </nav>
        </header>
    );
};

export default Header;