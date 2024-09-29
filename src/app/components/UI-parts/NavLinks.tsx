import Link from 'next/link';
import { usePathname } from 'next/navigation';
import *as React from 'react';

interface NavLinksProps {
    small: boolean;
};

const NavLinks: React.FC<NavLinksProps> = ({small}) => {
    const pathName: string = usePathname();

    return (
        <ul className='hidden lg:flex gap-6 text-sm'>
            <li>
                <Link href={'/'} className={pathName === '/' ? 'text-[#6593fc]' : 'text-black'}>
                    Home
                </Link>
            </li>
            <li>
                <Link href={'/shop'} className={pathName === '/shop' ? 'text-[#6593fc]' : 'text-black'}>
                    Shop
                </Link>
            </li>
            <li className='relative group'>
                <Link href='#'>Categories</Link>
                <ul className='bg-white shadow-md p-4 absolute hidden group-hover:block space-y-3'>
                    <li>
                        <Link href={'/categories/cars'} className={pathName === '/categories/cars' ? 'text-[#6593fc]' : 'text-black'}>
                            Cars
                        </Link>
                    </li>
                    <li>
                        <Link href={'/categories/motorbikes'} className={pathName === '/categories/motorbikes' ? 'text-[#6593fc]' : 'text-black'}>
                            Motorbikes
                        </Link>
                    </li>
                    <li>
                        <Link href={'/categories/phones'} className={pathName === '/categories/phones' ? 'text-[#6593fc]' : 'text-black'}>
                            Phones
                        </Link>
                    </li>
                    <li>
                        <Link href={'/categories/laptops'} className={pathName === '/categories/laptops' ? 'text-[#6593fc]' : 'text-black'}>
                            Laptops
                        </Link>
                    </li>
                    <li>
                        <Link href={'/categories/desktops'} className={pathName === '/categories/desktops' ? 'text-[#6593fc]' : 'text-black'}>
                            Desktops
                        </Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link href={'/contact-us'} className={pathName === '/contact-us' ? 'text-[#6593fc]' : 'text-black'}>
                    Contact Us
                </Link>
            </li>
            <li>
                <Link href={'/login'} className={pathName === '/login' ? 'text-[#6593fc]' : 'text-black'}>
                    Login
                </Link>
            </li>
            <li>
                <Link href={'/sign-up'} className={pathName === '/sign-up' ? 'text-[#6593fc]' : 'text-black'}>
                    Sign Up
                </Link>
            </li>
        </ul>
    );
};

export default NavLinks;