"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import nextStoreLogoLight from '@/app/assets/NextStore-light.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavButton {
    btnName: string,
    path: string
};

interface NavLinks {
    linkName: string,
    path: string
};

const Header: React.FC = () => {
    const pathName = usePathname();
    console.log(pathName);
    // States
    const [searchText, setSearchText] = useState<string>('');

    // Implement the search functionality
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            searchProduct: {value: string}
        };

        console.log(target.searchProduct.value);
    };

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

                    <form onSubmit={handleSearch} action="">
                        <input
                            type="text"
                            name="searchProduct"
                            id="searchProduct"
                            spellCheck={true}
                            placeholder='Search your favourite product here'
                            className='border border-r-0 border-[#dd37fc] focus:outline-none bg-inherit text-[#6593fc] font-bold rounded-l-full w-[362px] px-6 py-3'
                        />
                        <input
                            type="submit"
                            value={'Search'}
                            className='border border-l-0 border-[#dd37fc] focus:outline-none bg-[#dd37fc] text-[#161616] font-bold hover:cursor-pointer px-6 rounded-r-full py-3'
                        />
                    </form>

                {/* NavLinks */}
                <ul className='flex gap-6'>
                    {
                        links.map((link, n) => (
                            <li key={n}>
                                <Link href={link.path} className={pathName === link?.path ? 'text-[#6593fc]' : 'text-black'}>{link.linkName}</Link>
                            </li>
                        ))
                    }
                </ul>

                <div className='flex gap-6'>
                    {
                        navBtn.map((btn, n) => (
                            <button key={n}>
                                <Link href={btn.path} className={pathName === btn?.path ? 'text-[#6593fc]' : 'text-black'}>{btn.btnName}</Link>
                            </button>
                        ))
                    }
                </div>
            </nav>
        </header>
    );
};

export default Header;