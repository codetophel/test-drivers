'use client';
import Link from 'next/link';
import { FaArrowUp } from 'react-icons/fa';

export default function Need() {
  return (
    <>
      <div className='py-[6rem]'>
        <div className='grid gap-4 items-center justify-center text-center'>
          <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-[#129CE9]'>
            What you need to know to drive with LagosRide
          </h1>
          <p className='text-sm'>
            Get to know what is required to drive with Lagosride
          </p>
          <Link href={'/overview'} className='grid items-center justify-center'>
            <p className='w-fit px-9 py-2 bg-gradient-to-t from-lBlue to-green text-white text-sm font-bold rounded'>
              DOWNLOAD REQUIREMENT
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
