import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

function Register() {
  const router = useRouter();
  return (
    <main>
      <div className='bg-[#D9D9D9]'>
        <Nav />

        <div className='pt-6 bg-[#E3F6FC]'>
          <div className='px-6 py-12 slg:py-28 slg:px-24 slg:w-2/3 slg:absolute rounded-md'>
            <div className='bg-white slg:absolute mx-auto px-6 py-6 rounded-t-[40px] slg:top-[10%] shadow-lg w-full slg:w-[70%] z-20'>
              <div className='slg:px-16'>
                <h3 className=' text-sm slg:mt-5 text-[#275A7F]'>Stage 1</h3>

                <div className='flex items-center justify-between'>
                  <h3 className='text-base slg:text-2xl font-bold text-[#129CE9]'>
                    Registration
                  </h3>
                  <h3 className='text-[#129ce9] text-lg font-bold'>1/2</h3>
                </div>

                <div className='flex items-center justify-between gap-5 mt-5'>
                  <div className='h-[2px] w-1/2 bg-lBlue' />
                  <div className='h-[2px] w-1/2 bg-lBlue/30' />
                </div>

                <form className='mt-10 slg:mb-5 lg:mb-32 flex items-start justify-start flex-col gap-3'>
                  <label htmlFor='Phone' className='text-[#275A7F] text-sm'>
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    className='bg-[#F1F3F4] rounde-sm outline-none w-full py-2 px-4'
                  />

                  <p className='text-sm my-5 text-[#275A7F]'>
                    A 4-digit code will be sent to your phone number via SMS.
                  </p>
                </form>
              </div>

              <hr className='bg-lBlue' />
              <div className='p-6 slg:px-16 slg:pb-8 lg:pb-16'>
                <button
                  className='rounded-sm text-base btn text-white w-full px-6 py-2 slg:mt-4 lg:mt-10  uppercase
'
                  onClick={() => router.push('/registration2')}
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
          {/* eslint-disable-next-line */}
          <img
            src='../img/reg_car.png'
            alt=''
            className='w-[70%] ml-auto hidden slg:block relative slg:mt-0'
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default Register;
