import Link from 'next/link';
import React from 'react';

export default function Subscribe() {
  return (
    <div className='  flex justify-center items-center w-full py-[6rem] '>
      <div className='w-[90%] flex justify-between items-center flex-col md:flex-row '>
        <div className='md:w-[35%] w-full md:absolute md:mb-0 mb-12 '>
            {/* eslint-disable-next-line */}
          <img src='../img/subscribe.jpg' alt='' className='shadow-lg w-full' />
        </div>
        <div className='md:w-[55%] w-full right-[-45%] md:relative'>
          <div className='z-[1000]'>
            <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-[#129CE9] mb-8'>
              Subscribe to <br className='md:block hidden' /> Lagosride
              newsletter
            </h1>
          </div>
          <div className='right-[25%] md:relative'>
            <div className='bg-[#ffffff] border border-[#129CE9] px-[4rem] py-8  w-full rounded-2xl '>
              {' '}
              <div class='mb-6'>
                <label
                  for='name'
                  class='block mb-2 text-sm font-medium text-gray-900 '
                >
                  Name
                </label>
                <input
                  type='text'
                  id='text'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -blue-500 outline-none'
                  required
                />
              </div>
              <div class='mb-6'>
                <label
                  for='email'
                  className='block mb-2 text-sm font-medium text-gray-900 '
                >
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -blue-500 outline-none'
                  required
                />
              </div>
              <div className='w-full flex justify-end items-end'>
                <Link
                  href={''}
                  className='grid items-center justify-center md:w-[50%] w-full '
                >
                  <p className='w-fit px-9 py-2 bg-gradient-to-t from-lBlue to-green text-white text-sm font-bold rounded'>
                    DOWNLOAD REQUIREMENT
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
