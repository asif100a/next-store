import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import *as React from 'react';
import { BiX } from 'react-icons/bi';

interface NavLinksProps {
    showNav: boolean;
    handleHideNav: () => void;
    status: string;
};

const NavLinks: React.FC<NavLinksProps> = ({ showNav, handleHideNav, status }) => {
    const pathName: string = usePathname();
    console.log(status);

    const links = [
        { name: "Home", path: "/" },
        { name: "Shop", path: "/shop" },
        {
            name: "Categories", subCategories: [
                { name: "Cars", path: "/categories/cars" },
                { name: "Motorbikes", path: "/categories/motorbikes" },
                { name: "Phones", path: "/categories/phones" },
                { name: "Laptops", path: "/categories/laptops" },
                { name: "Desktops", path: "/categories/desktops" },
            ]
        },
        { name: "About Us", path: "/about-us" }
    ];

    return (
        <ul className={`gap-6 lg:gap-5 xl:gap-6 text-sm bg-inherit lg:flex lg:flex-row blur-sidebar ${showNav ? 'flex flex-col h-screen w-[50%] md:w-[40%] px-6 py-3 blur-sidebar-active' : ''}`}>
            {
                showNav && <li>
                    <BiX onClick={handleHideNav} className='text-2xl' />
                </li>
            }

            {links.map((link, index) => (
                <>
                    {link.subCategories ? (
                        <li className='relative group'>
                            <Link href='#'>Categories</Link>
                            <ul className='bg-white shadow-md p-4 absolute hidden group-hover:block space-y-3'>
                                {link.subCategories.map((category, idx) => (
                                    <li key={idx}>
                                        <Link href={category.path} className={pathName === category.path ? 'text-[#6593fc]' : 'text-black'}>
                                            {category.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ) : (
                        <li key={index}>
                            <Link href={link.path} className={`${pathName === link.path ? 'text-[#6593fc]' : 'text-black'} ${link.name === 'Category' && 'relative group'}`}>
                                {link.name}
                            </Link>
                        </li>
                    )}
                </>
            ))}

            {
                status === 'authenticated' ?
                    <li>
                        <button onClick={() => signOut()}>Logout</button>
                    </li>
                    : <>
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
                    </>
            }
        </ul>
    );
};

export default NavLinks;