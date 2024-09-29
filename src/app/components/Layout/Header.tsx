"use client";
import Image from 'next/image';
import React from 'react';
import nextStoreLogoLight from '@/app/assets/NextStore-light.png';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import NavLinks from '../UI-parts/NavLinks';
import { TbMenuDeep } from 'react-icons/tb';
import ShoppingCart from '../UI-parts/ShoppingCart';

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
        <header className='bg-[#ffff] p-0 xl:px-24 py-0 md:py-2 md:shadow-md md:shadow-[#6593fc]'>
            <div className='flex flex-col md:flex-row justify-between md:items-center w-full lg:w-[996px] xl:w-[1248px] mx-auto'>
                <div className='flex justify-between md:block px-2 md:px-0 shadow-md shadow-[#6593fc] md:shadow-none'>
                    {/* Logo */}
                    <div className='mb-1 md:mb-0'>
                        <Link href={'/'}>
                            <Image
                                src={nextStoreLogoLight}
                                alt='NextStore'
                                className='w-16 md:w-20 xl:w-24 h-auto'
                                priority
                            />
                        </Link>
                    </div>

                    <div className='flex items-center gap-6 w-fit md:hidden'>
                        {/* My List Cart */}
                        <ShoppingCart handleMyListsButton={handleMyListsButton} />

                        {/* Dropdown Menu for small devices */}
                        <nav className='block lg:hidden'>
                            {/* NavLinks */}
                            <div className='hidden'>
                                <NavLinks small={true} />
                            </div>
                            <div>
                                <TbMenuDeep className='text-lg' />
                            </div>
                        </nav>
                    </div>
                </div>

                <div className='block md:flex md:gap-6 md:items-center mt-3 md:mt-0'>
                    <form onSubmit={handleSearch} action="" className='border border-[#dd37fc] rounded-full overflow-hidden flex gap-3 w-full md:w-96 py-1 px-1'>
                        <input
                            type="text"
                            name="searchProduct"
                            id="searchProduct"
                            spellCheck={true}
                            placeholder='Search your favourite product'
                            className='focus:outline-none bg-inherit text-[#6593fc] text-xs md:text-sm font-bold w-full h-6 md:h-10 ml-2'
                        />
                        <input
                            type="submit"
                            value={'Search'}
                            className='focus:outline-none bg-[#dd37fc] rounded-full text-[#161616] text-xs md:text-sm font-bold hover:cursor-pointer w-24 md:w-32 h-6 md:h-10'
                        />
                    </form>

                    <div className='hidden md:block w-fit'>
                        {/* Shoping Cart logo */}
                        <ShoppingCart handleMyListsButton={handleMyListsButton} />
                    </div>
                </div>


                <nav>
                    {/* NavLinks */}
                    <NavLinks small={false} />
                </nav>
            </div>
        </header>
    );
};



export default Header;