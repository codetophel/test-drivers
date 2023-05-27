import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { useRouter } from 'next/router';

function Registration2() {
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
                  <h3 className='text-[#129ce9] text-lg font-bold'>2/2</h3>
                </div>

                <div className='flex items-center justify-between gap-5 mt-5'>
                  <div className='h-[2px] w-1/2 bg-lBlue' />
                  <div className='h-[2px] w-1/2 bg-lBlue' />
                </div>

                <form className='my-10 slg:mb-5 lg:mb-32 flex items-start justify-start flex-col gap-5 capitalize'>
                  <div className='w-full'>
                    <label htmlFor='' className='text-[#275A7F] text-sm'>
                      First Name
                    </label>
                    <input
                      type='text'
                      className='bg-[#F1F3F4] rounded-sm outline-none w-full py-2 px-4'
                    />
                  </div>
                  <div className='w-full'>
                    <label htmlFor='' className='text-[#275A7F] text-sm'>
                      Last Name
                    </label>
                    <input
                      type='text'
                      className='bg-[#F1F3F4] rounded-sm outline-none w-full py-2 px-4'
                    />
                  </div>

                  <div className='flex flex-col items-start gap-3'>
                    <label htmlFor='' className='text-[#275A7F] text-sm'>
                      Gender
                    </label>
                    <div className='flex items-center gap-5'>
                      <div className='flex items-center gap-8 bg-[#F1F3F4] rounded-sm outline-none w-full py-2 px-4'>
                        <label htmlFor='' className='text-[#275A7F] text-sm'>
                          Male
                        </label>
                        <input type='radio' className='bg-lBlue' />
                      </div>
                      <div className='flex items-center gap-8 bg-[#F1F3F4] rounded-sm outline-none w-full py-2 px-4'>
                        <label htmlFor='' className='text-[#275A7F] text-sm'>
                          FeMale
                        </label>
                        <input type='radio' />
                      </div>
                    </div>
                  </div>

                  <div className='w-full'>
                    <label htmlFor='' className='text-[#275A7F] text-sm'>
                      Email
                    </label>
                    <input
                      type='text'
                      className='bg-[#F1F3F4] rounded-sm outline-none w-full py-2 px-4'
                    />
                  </div>

                  <div className='bg-lBlue/10 p-4 w-full flex flex-col gap-5'>
                    <div className='w-full'>
                      <label htmlFor='' className='text-[#275A7F] text-sm'>
                        Password
                      </label>
                      <input
                        type='text'
                        className='bg-white rounded-sm outline-none w-full py-2 px-4'
                      />
                    </div>
                    <div className='w-full'>
                      <label htmlFor='' className='text-[#275A7F] text-sm'>
                        Comfirm Password
                      </label>
                      <input
                        type='text'
                        className='bg-white rounded-sm outline-none w-full py-2 px-4'
                      />
                    </div>
                  </div>

                  <div className='flex gap-5 items-center justify-center'>
                    <input type='radio' className='bg-lBlue' />
                    <p className='text-xs text-textBlue'>
                      {' '}
                      I accept the{' '}
                      <span className='text-xs font-semibold text-lBlue'>
                        TERMS and CONDITIONS{' '}
                      </span>{' '}
                      of use
                    </p>
                  </div>
                </form>
              </div>

              <hr className='bg-lBlue' />
              <div className='p-6 slg:px-16 slg:pb-8'>
                <button
                  className='rounded-sm text-base btn text-white w-full px-6 py-2 slg:mt-4 lg:mt-10  uppercase
'
                  onClick={() => router.push('/verification1')}
                >
                  save and Proceed
                </button>
              </div>
            </div>
          </div>
          {/* eslint-disable-next-line */}
          <img
            src='../img/reg_car.png'
            alt=''
            className='w-[70%] ml-auto hidden slg:block relative slg:mt-[37%] lg:mt-[30%]'
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default Registration2;
