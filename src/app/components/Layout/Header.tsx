"use client";
import Image from 'next/image';
import React from 'react';
import nextStoreLogoLight from '@/app/assets/NextStore-light.png';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PiShoppingCartLight } from 'react-icons/pi';
import NavLinks from '../UI-parts/NavLinks';

const Header: React.FC = () => {
    const router = useRouter();
    // States
    // const [searchText, setSearchText] = useState<string>('');

    // Implement the search functionality
    const handleSearch = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            searchProduct: { value: string }
        };

        console.log(target.searchProduct.value);
    };

    // Handle the My List button
    const handleMyListsButton = (): void => {
        router.push('/my-lists');
    };

    return (
        <header className='bg-[#ffff] p-0 xl:px-24 py-2 shadow-md shadow-[#6593fc]'>
            <div className='flex justify-between items-center w-full lg:w-[996px] xl:w-[1248px] mx-auto'>
                <div>
                    <Link href={'/'}>
                        <Image
                            src={nextStoreLogoLight}
                            alt='NextStore'
                            className='md:w-20 xl:w-24 h-auto'
                            priority
                        />
                    </Link>
                </div>

                <div className='relative hidden'>
                    <button onClick={handleMyListsButton}>
                        <PiShoppingCartLight className='w-10 h-10' />
                    </button>
                    <span className='bg-inherit border border-[#dd37fc] text-[#6593fc] text-base font-semibold w-5 h-5 rounded-full flex justify-center items-center absolute -top-[10px] -right-[10px]'>
                        <span className='w-fit h-fit text-sm'>2</span>
                    </span>
                </div>

                {/* Dropdown Menu for small devices */}
                <nav className='hidden'>
                    {/* NavLinks */}
                    <NavLinks />
                </nav>

                <div className='flex items-center gap-3'>
                    <form onSubmit={handleSearch} action="">
                        <input
                            type="text"
                            name="searchProduct"
                            id="searchProduct"
                            spellCheck={true}
                            placeholder='Search your favourite product'
                            className='border border-r-0 border-[#dd37fc] focus:outline-none bg-inherit text-[#6593fc] font-bold rounded-l-full lg:w-[280px] px-6 md:py-2 xl:py-3'
                        />
                        <input
                            type="submit"
                            value={'Search'}
                            className='border border-l-0 border-[#dd37fc] focus:outline-none bg-[#dd37fc] text-[#161616] font-bold hover:cursor-pointer px-6 rounded-r-full md:py-2 xl:py-3'
                        />
                    </form>

                    <div className='relative hidden lg:flex'>
                        <button onClick={handleMyListsButton}>
                            <PiShoppingCartLight className='w-10 h-10' />
                        </button>
                        <span className='bg-inherit border border-[#dd37fc] text-[#6593fc] text-base font-semibold w-5 h-5 rounded-full flex justify-center items-center absolute -top-[10px] -right-[10px]'>
                            <span className='w-fit h-fit text-sm'>2</span>
                        </span>
                    </div>
                </div>


                <nav>
                    {/* NavLinks */}
                    <NavLinks />
                </nav>
            </div>
        </header>
    );
};



export default Header;