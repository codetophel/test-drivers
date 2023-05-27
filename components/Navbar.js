import { MenuOutlined } from '@mui/icons-material';
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

function Navbar() {
  const router = useRouter();
  const [nav, setNav] = useState(false);

  return (
    <nav className='bg-darkNav p-4 mx-auto'>
      {/* desktop nav */}
      <div className='slg:px-24'>
        <div className='flex justify-between items-baseline'>
          {/* logo */}
          <Link href={''}>
            {/* eslint-disable-next-line */}
            <img className='w-[10rem]' src='../img/logoo.png' alt='' />
          </Link>

          {/* links */}
          <div className='hidden md:block'>
            <ul className='flex md:gap-5 lg:gap-7 items-center font-medium lg:font-normal text-xs lg:text-base text-white whitespace-nowrap'>
              <li>
                <Link href={'/home'}>Home</Link>
              </li>
              <li>
                <Link href={''}>Search trips</Link>
              </li>
              <li>
                <Link href={''}>How to use</Link>
              </li>
              <li>
                <Link href={''}>News</Link>
              </li>

              <li className='py-2 px-5 bg-white text-semibold capitalize text-textBlue rounded-lg'>
                <Link href={'/overview'}>Join to drive</Link>
              </li>
            </ul>
          </div>

          <div className='md:hidden'>
            <div
              onClick={() => setNav(true)}
              className=' hover:animate-pulse cursor-pointer'
            >
              <HiMenuAlt3 size={30} />
            </div>
          </div>
        </div>
      </div>


      {/* mobile nav */}
      <div className={nav ? 'md:hidden relative' : ''}>
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-full h-screen z-[99999] text-textBlue bg-white p-4 ease-in duration-500'
              : 'fixed left-0 top-[-120vh] w-full h-screen z-[99999] text-textBlue bg-white p-4 ease-out duration-500'
          }
        >
          {/* logo */}
          <div className='flex justify-between items-center'>
            {/* logo */}
            <Link href={''}>
              {/* eslint-disable-next-line */}
              <img className='w-[10rem]' src='../img/logo.png' alt='' />
            </Link>

            {/* close */}
            <div className='cursor-pointer' onClick={() => setNav(false)}>
              <HiX size={30} />
            </div>
          </div>

          {/* links */}
          <div className=' '>
            <ul className='text-textBlue whitespace-nowrap flex flex-col items-center justify-center gap-10 mt-10 pt-5'>
              <li>
                <Link href={'/home'}>Home</Link>
              </li>
              <li>
                <Link href={''}>Search trips</Link>
              </li>
              <li>
                <Link href={''}>How to use</Link>
              </li>
              <li>
                <Link href={''}>News</Link>
              </li>

              <li className=' w-full py-2 px-5 bg-gradient-to-t from-lBlue to-green text-white rounded-lg'>
                <Link href={'/register'}>Join to drive</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
