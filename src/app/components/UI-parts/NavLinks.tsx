import Link from 'next/link';
import { usePathname } from 'next/navigation';
import *as React from 'react';
import { BiX } from 'react-icons/bi';

interface NavLinksProps {
    showNav: boolean;
    handleHideNav: () => void;
};

const NavLinks: React.FC<NavLinksProps> = ({showNav, handleHideNav}) => {
    const pathName: string = usePathname();
    

    return (
        <ul className={`gap-6 text-sm bg-inherit lg:flex lg:flex-row blur-sidebar ${showNav ? 'flex flex-col h-screen w-[50%] md:w-[40%] px-6 py-3 blur-sidebar-active' : ''}`}>
            {
                showNav && <li>
                    <BiX onClick={handleHideNav} className='text-2xl' />
                </li>
            }
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