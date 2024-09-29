import *as React from 'react';
import { PiShoppingCartLight } from 'react-icons/pi';

interface ShoppingCartProps {
    handleMyListsButton: () => void;
};

const ShoppingCart: React.FC<ShoppingCartProps> = ({handleMyListsButton}) => {
    return (
        <div className='relative flex'>
            <button onClick={handleMyListsButton}>
                <PiShoppingCartLight className='w-6 md:w-10 h-6 md:h-10' />
            </button>
            <span className='bg-inherit border border-[#dd37fc] text-[#6593fc] font-semibold w-4 md:w-5 h-4 md:h-5 rounded-full flex justify-center items-center absolute -top-[10px] -right-[10px]'>
                <span className='w-fit h-fit text-xs'>2</span>
            </span>
        </div>
    );
};

export default ShoppingCart;