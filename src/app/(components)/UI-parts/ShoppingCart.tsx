import *as React from 'react';
import { PiShoppingCartLight } from 'react-icons/pi';

interface ShoppingCartProps {
    handleMyListsButton: () => void;
};

const ShoppingCart: React.FC<ShoppingCartProps> = ({handleMyListsButton}) => {
    return (
        <div className='relative flex'>
            <button onClick={handleMyListsButton}>
                <PiShoppingCartLight className='w-6 md:w-8 xl:w-10 h-6 md:h-8 xl:h-10' />
            </button>
            <span className='bg-inherit border border-[#dd37fc] text-[#6593fc] font-semibold w-4 xl:w-5 h-4 xl:h-5 rounded-full flex justify-center items-center absolute md:-top-[8px] -top-[10px] md:-right-[8px] -right-[10px]'>
                <span className='w-fit h-fit text-xs'>9+</span>
            </span>
        </div>
    );
};

export default ShoppingCart;