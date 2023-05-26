import Image from 'next/image';
import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const register = () => {
  return (
    <main>
      <div className='bg-[#D9D9D9]'>
        <Nav />

        <div className='pt-6'>
          <div className='bg-[#E3F6FC] lg:py-10 lg:px-24 lg:w-2/3 relative rounded-md'>
            <div className='bg-white px-6 py-6 rounded-t-[40px] lg:px-16 max-w-[500px]'>
              <h3 className=' text-sm lg:mt-5 text-[#275A7F]'>Stage 1</h3>

              <div className='flex items-center justify-between'>
                <h3 className='text-base lg:text-2xl font-bold text-[#129CE9]'>
                  Registration
                </h3>
                <h3 className='text-[#129ce9] text-lg font-bold'>1/2</h3>
              </div>

              <form className='mt-10 mb-20 flex items-start justify-start flex-col gap-3'>
                <label htmlFor='Phone' className='text-[#275A7F] text-sm'>
                  Phone Number
                </label>
                <input
                  type='text'
                  className='bg-[#F1F3F4] rounde-sm outline-none w-full py-2 px-4'
                />

                <p className='text-sm text-[#275A7F]'>
                  A 4-digit code will be sent to your ohone number via SMS.
                </p>
              </form>

              <button
                className='rounded-sm text-base btn text-white w-full px-6 py-2 lg:mb-10 uppercase
'
              >
                Proceed
              </button>
            </div>
          </div>
          <Image
            src='/img/reg_car.png'
            width={700}
            height={300}
            loading='lazy'
            alt='car'
            className='overview-img ml-auto car-shadow lg:block hidden absolute lg:top-[16%] lg:right-0'
          />

          <Image
            src='/img/reg_car.png'
            width={350}
            height={200}
            loading='lazy'
            alt='car'
            className='overview-img mx-auto drop-shadow-lg lg:hidden relative'
          />
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default register;
