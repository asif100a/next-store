import Image from 'next/image';
import React from 'react';
import nextStoreLogoLight from '@/app/assets/NextStore-light.png';
import Link from 'next/link';

const Header = () => {
    const navBtn = [
        { btnName: 'Login', path: '/login' },
        { btnName: 'Sign Up', path: '/sign-up' },
    ];

    const links = [
        { linkName: 'Home', path: '/' },
        { linkName: 'About', path: '/about' },
    ];

    return (
        <header className='container xl:px-24'>
            <nav className='flex justify-between items-center'>
                <div>
                    <Link href={'/'}><Image src={nextStoreLogoLight} alt='NextStore' width={116} /></Link>
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