import Image from 'next/image';
import React from 'react';

function Navbar() {
  return (
    <div>
      {/* web navbar */}
      <div className='py-4 px-20 mt-5 bg-darkNav flex items-center justify-between'>
        {/* logo */}
        <Image
          src='/img/logoo.png'
          width={150}
          height={200}
          loading='lazy'
          alt='test-logo'
          className='ml-16'
        />
        {/* nav menu */}
        <div className='flex items-center gap-16'>
          <ul className='text-base text-[#fff] flex items-center gap-10'>
            <li>Home</li>
            <li>Search Trips</li>
            <li>How to use</li>
            <li>Join to ride</li>
            <li>News</li>
          </ul>
          {/* drive button */}
          <button
            className='rounded-md text-base font-bold bg-white text-secondary px-2 py-2
          '
          >
            Join to drive
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
