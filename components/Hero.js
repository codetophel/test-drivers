'use client';
import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <div className='w-full'>
        <div className='pb-[15rem] lg:pt-10'>
          <div className='flex items-center flex-col md:flex-row'>
            {/* text */}
            <div className='pl-4 mt-10 lg:pl-[4.5rem] grid gap-4'>
              <p className='bg-textBlue/10 rounded-2xl text-blue w-fit px-3 py-1 '>
                Get Started
              </p>

              <h1 className=' slg:pr-[3rem] text-blue text-3xl font-semibold'>
                Join us and be a part of our team of elite service providers.
              </h1>

              <p className='text-sm slg:pr-[4rem] lg:pr-[4rem]'>
                Experience a safe and reliable transportation service while
                earning <span className='text-blue'>X4</span> income
              </p>

              <div className='flex items-center gap-7'>
                <Link href={'/register'}>
                  <p className='w-fit px-9 py-2 bg-gradient-to-t from-lBlue to-green text-white text-sm font-bold rounded'>
                    SIGN UP
                  </p>
                </Link>
                <Link href={''}>
                  <p className='text-sm text-blue font-bold underline'>
                    SIGN IN
                  </p>
                </Link>
              </div>
            </div>
            {/* image */}
            <div className='relative right-0 w-full grid justify-end'>
              <div className='flex justify-end'>
                <div className='md:w-[85%] lg:w-full relative z-10 lg:pr-[4rem]'>
                  {' '}
                  {/* eslint-disable-next-line */}
                  <img src='../img/hero.png' alt='' />
                </div>
              </div>
              <div className='hidden md:block absolute top-[8rem] slg:top-[10.5rem] lg:top-[12.3rem] right-0 bg-blue w-[90%] h-[60%] rounded-tl-2xl rounded-bl-2xl'></div>
              <div className='hidden md:block w-[35%] absolute -bottom-[5rem] slg:-bottom-[6rem] z-20'>
                {/* eslint-disable-next-line */}
                <img src='../img/img-1.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
