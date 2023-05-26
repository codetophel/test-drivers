import { MenuOutlined } from '@mui/icons-material';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Navbar() {
  const router = useRouter();

  return (
    <div>
      {/* web navbar */}
      <div className='hidden py-3 px-20 bg-darkNav lg:flex items-center justify-between'>
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
            <Link href='/home'>
              Home
            </Link>
            <Link href='/#'>
              Search Trips
            </Link>
            <Link href='/#'>
              How to use
            </Link>
            <Link href='/#'>
              Join to ride
            </Link>
            <Link href='/#'>
              News
            </Link>
          </ul>
          {/* drive button */}
          <button
            className='rounded-md text-base font-bold bg-white text-secondary px-2 py-2
          '
            onClick={() => router.push('overview')}
          >
            Join to drive
          </button>
        </div>
      </div>

      {/* mobile nav */}
      <div className='lg:hidden bg-darkNav flex items-center justify-between p-4'>
        <Image
          src='/img/logoo.png'
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
}

export default Navbar;
