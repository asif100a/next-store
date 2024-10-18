import Image from 'next/image';
import React, { FC } from 'react';
import nextStoreLogoLight from '../../assets/NextStore-light-footer.png';
import Link from 'next/link';
import { MdOutlineLanguage } from 'react-icons/md';

const Footer: FC = () => {
    return (
        <footer className='bg-[#f6efef] py-3 px-2 md:px-3 lg:px-0'>
            <div className='space-y-3 lg:space-y-4 w-full overflow-hidden lg:w-[996px] xl:w-[1248px] mx-auto'>
                <Image
                    src={nextStoreLogoLight}
                    alt="NextStore"
                    className='w-24 h-auto'
                    priority
                />
                <div className='flex flex-col lg:flex-row justify-between gap-6 lg:gap-12'>
                    <div className='space-y-3 lg:space-y-6'>
                        <p className='w-full lg:w-80'>NextStore is your go-to destination for high-quality products, from cars to mobile phones. Explore a wide range of items at competitive prices and enjoy seamless shopping, fast delivery, and exceptional customer service.</p>

                        <ul className='flex items-center gap-6 lg:gap-5 xl:gap-6'>
                            <li>
                                <Link href=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-6 h-auto'><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg></Link>
                            </li>
                            <li>
                                <Link href=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='w-4 h-auto'><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" /></svg></Link>
                            </li>
                            <li>
                                <Link href=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-6 h-auto'><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg></Link>
                            </li>
                            <li>
                                <Link href=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-6 h-auto'><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg></Link>
                            </li>
                        </ul>

                        {/* For Large Device */}
                        <div className='lg:flex lg:justify-start lg:items-center hidden'>
                            <div className='text-start border-t-4 border-double border-[#dd37fc4d] px-0 flex flex-row justify-between gap-0 lg:gap-6'>
                                <p className='flex gap-1 justify-center items-center'><span><MdOutlineLanguage /></span><small>English</small></p>
                                <p><small>&copy; 2024 NextStore.com</small></p>
                            </div>
                        </div>
                    </div>
                    <nav className='grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-0 lg:flex lg:justify-between w-full'>
                        {quickLinks}
                        {accountRelatedLinks}
                        {legalLinks}
                        {customerSupportLinks}
                        {categoriesLinks}
                    </nav>
                </div>

                {/* For Small & Medium Devices */}
                <div className='w-full lg:hidden pt-1'>
                    <div className='text-center border-t-4 border-double border-[#dd37fc4d] px-0 md:px-3 flex flex-row justify-between gap-0 lg:gap-6'>
                        <p className='flex gap-1 justify-center items-center'><span><MdOutlineLanguage /></span><small>English</small></p>
                        <p><small>&copy; 2024 NextStore.com</small></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const quickLinks: JSX.Element = <>
    <div className='text-xs md:text-sm'>
        <h4 className='mb-3 md:mb-4 font-bold text-[#6593fc]'>Quick Links</h4>
        <ul className='flex flex-col gap-2'>
            <li><Link href='' className='hover:text-[#6593fc] hover:underline'>Home</Link></li>
            <li><Link href='' className='hover:text-[#6593fc] hover:underline'>Shop</Link></li>
            <li><Link href='' className='hover:text-[#6593fc] hover:underline'>About Us</Link></li>
            <li><Link href='' className='hover:text-[#6593fc] hover:underline'>Contact Us</Link></li>
            <li><Link href='' className='hover:text-[#6593fc] hover:underline'>FAQs</Link></li>
            <li><Link href='' className='hover:text-[#6593fc] hover:underline'>Shipping &amp; Delivery</Link></li>
            <li><Link href='' className='hover:text-[#6593fc] hover:underline'>Returns &amp; Refunds</Link></li>
            <li><Link href='' className='hover:text-[#6593fc] hover:underline'>Track You Order</Link></li>
        </ul>
    </div>
</>;

const accountRelatedLinks: JSX.Element = <>
    <div className='text-xs md:text-sm'>
        <h4 className='mb-3 md:mb-4 font-bold text-[#6593fc]'>Account Related</h4>
        <ul className='flex flex-col gap-2'>
            <li><Link href='' className='hover:text-[#6593fc] hover:underline'>My Account</Link></li>
            <li><Link href='' className='hover:text-[#6593fc] hover:underline'>Order History</Link></li>
            <li><Link href='' className='hover:text-[#6593fc] hover:underline'>Wishlist</Link></li>
            <li><Link href='' className='hover:text-[#6593fc] hover:underline'>Login</Link></li>
            <li><Link href='' className='hover:text-[#6593fc] hover:underline'>Sign Up</Link></li>
        </ul>
    </div>
</>;

const legalLinks: JSX.Element = <>
    <div className='text-xs md:text-sm'>
        <h4 className='mb-3 md:mb-4 font-bold text-[#6593fc]'>Legal Links</h4>
        <ul className='flex flex-col gap-2'>
            <li><Link href='' className='hover:text-[#6593fc] hover:underline'>Privacy Policy</Link></li>
            <li><Link href='' className='hover:text-[#6593fc] hover:underline'>Terms of Service</Link></li>
            <li><Link href='' className='hover:text-[#6593fc] hover:underline'>Cookie Policy</Link></li>
        </ul>
    </div>
</>;

const customerSupportLinks: JSX.Element = <>
    <div className='text-xs md:text-sm'>
        <h4 className='mb-3 md:mb-4 font-bold text-[#6593fc]'>Customer Supports</h4>
        <ul className='flex flex-col gap-2'>
            <li><Link href='' className='hover:text-[#6593fc] hover:underline'>Support Center</Link></li>
            <li><Link href='' className='hover:text-[#6593fc] hover:underline'>Live Chat</Link></li>
            <li><Link href='' className='hover:text-[#6593fc] hover:underline'>Email Support</Link></li>
        </ul>
    </div>
</>;

const categoriesLinks: JSX.Element = <>
    <div className='text-xs md:text-sm'>
        <h4 className='mb-3 md:mb-4 font-bold text-[#6593fc]'>Categories</h4>
        <ul className='flex flex-col gap-2'>
            <li><Link href='' className='hover:text-[#6593fc] hover:underline'>Cars</Link></li>
            <li><Link href='' className='hover:text-[#6593fc] hover:underline'>Motor Bikes</Link></li>
            <li><Link href='' className='hover:text-[#6593fc] hover:underline'>Mobile Phones</Link></li>
            <li><Link href='' className='hover:text-[#6593fc] hover:underline'>Desktops</Link></li>
            <li><Link href='' className='hover:text-[#6593fc] hover:underline'>Laptops</Link></li>
        </ul>
    </div>
</>;

export default Footer;