'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function Steps() {
  return (
    <>
      <div className='w-full bg-[#0E1E29] text-white'>
        <div className='max-w-6xl p-4 mx-auto py-20'>
          <div className='flex flex-col items-center justify-center slg:flex-row'>
            {/* 3 */}
            <div className='w-full'>
              <div className='flex flex-col sm:flex-row items-center justify-center gap-14'>
                <div>
                  {/* eslint-disable-next-line */}
                  <img src='/img/stroke.png' alt='' />
                </div>

                {/* btn */}
                <div className='grid gap-4'>
                  <p className='text-sm'>Big Little</p>
                  <div>
                    <h1 className='text-xl'>Steps To</h1>
                    <h1 className='text-xl'>Become a Driver</h1>
                  </div>
                  <Link href={'/register'}>
                    <p className='w-fit px-9 py-2 bg-gradient-to-t from-lBlue to-green text-white text-sm font-bold rounded'>
                      JOIN US
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* div */}
            <div className='mt-20 md:mt-0 w-[80%]'>
              <div className='grid sm:grid-cols-2 gap-3'>
                {/* subgrid */}
                <div className='bg-[#E68B68]/30 grid gap-10 w-fit p-4 rounded-t-3xl rounded-bl-3xl'>
                  {/* img */}
                  <div>
                    {/* eslint-disable-next-line */}
                    <img src='../img/grid-1.png' alt='' />
                  </div>
                  {/* text*/}
                  <div>
                    <p className='font-semibold'>Registration</p>
                    <p className='text-sm mt-2'>
                      Register, Sign up with your valid credential
                    </p>
                    <div className='grid justify-end text-2xl'>
                      <p className='text-[#E68B68]'>1</p>
                    </div>
                  </div>
                </div>
                <div className='bg-[#11CA94]/30 grid gap-10 w-fit p-4 rounded-t-3xl rounded-br-3xl'>
                  {/* img */}
                  <div>
                    {/* eslint-disable-next-line */}
                    <img src='../img/grid-3.png' alt='' />
                  </div>
                  {/* text*/}
                  <div>
                    <p className='font-bold'>Verification</p>
                    <p className='text-sm mt-2'>
                      Get Verified, Get verified and accepted by usl
                    </p>
                    <div className='grid justify-end text-2xl'>
                      <p className='text-[#11CA94]'>2</p>
                    </div>
                  </div>
                </div>
                <div className='bg-[#6633EF]/30 grid gap-6 w-fit p-4 rounded-b-3xl rounded-tl-3xl'>
                  {/* img */}
                  <div>
                    {/* eslint-disable-next-line */}
                    <img src='../img/grid-2.png' alt='' />
                  </div>
                  {/* text*/}
                  <div>
                    <p className='font-bold'>Medical & Training</p>
                    <p className='text-xs mt-2'>
                      Complete your Training, Get trained and a vehicle will be
                      assigned to you
                    </p>
                    <div className='grid justify-end text-2xl'>
                      <p className='text-[#6633EF]'>3</p>
                    </div>
                  </div>
                </div>
                <div className='bg-[#0D7CCC]/30 grid gap-10 aspect-square lg:w-[15rem] items-center justify-center rounded-b-3xl rounded-tr-3xl'>
                  {/* img */}
                  <div className=' -rotate-45'>
                    <FaArrowUp size={100} color='rgba(13, 124, 204, 0.3)' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
