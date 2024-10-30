import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo: React.FC = () => {
    return (
        <div>
            <Link href={'/'}>
                <Image
                    src='/images/NextStore_logo.png'
                    alt='NextStore'
                    width={96}
                    height={72}
                    className='w-16 md:w-20 xl:w-24 h-auto'
                    priority
                />
            </Link>
        </div>
    );
};

export default Logo;