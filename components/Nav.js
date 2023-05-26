import { MenuOutlined } from '@mui/icons-material';
import Image from 'next/image';
import React from 'react';

const Nav = () => {
  return (
    <div>
      {/* web navbar */}
      <div className='hidden py-3 px-20 lg:flex items-center justify-between'>
        {/* logo */}
        <Image
          src='/img/logo.png'
          width={150}
          height={200}
          loading='lazy'
          alt='test-logo'
          className='ml-16'
        />
        {/* nav menu */}
        <div className='flex items-center gap-16'>
          <ul className='text-base text-[#275A7F] flex items-center gap-10 whitespace-nowrap'>
            <li>Home</li>
            <li>Search Trips</li>
            <li>How to use</li>
            <li>Join to ride</li>
            <li>News</li>
          </ul>
          {/* drive button */}
          <button
            className='rounded-md text-base font-bold btn text-white px-2 py-2 whitespace-nowrap
          '
          >
            Join to drive
          </button>
        </div>
      </div>

      {/* mobile nav */}
      <div className='lg:hidden  flex items-center justify-between p-4'>
        <Image
          src='/img/logo.png'
          width={150}
          height={200}
          loading='lazy'
          alt='test-logo'
          className='ml-6'
        />

        <MenuOutlined className='h-5 w-5' />
      </div>
    </div>
  );
};

export default Nav;
