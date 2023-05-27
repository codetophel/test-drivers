import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { UploadFileOutlined } from '@mui/icons-material';
import { useRef } from 'react';
import { useRouter } from 'next/router';

function Verification1() {
  const router = useRouter();
  const filePickerRef = useRef(null);

  return (
    <main>
      <div className='bg-[#D9D9D9]'>
        <Nav />

        <div className='pt-6 bg-[#E3F6FC]'>
          <div className='px-6 py-12 slg:py-28 slg:px-24 slg:w-2/3 slg:absolute rounded-md'>
            <div className='bg-white slg:absolute mx-auto px-6 py-6 rounded-t-[40px] slg:top-[10%] shadow-lg w-full slg:w-[70%] z-20'>
              <div className='slg:px-16'>
                <h3 className=' text-sm slg:mt-5 text-[#275A7F]'>Stage 2</h3>

                <div className='flex items-center justify-between'>
                  <h3 className='text-base slg:text-2xl font-bold text-[#129CE9]'>
                    Verification
                  </h3>
                  <h3 className='text-[#129ce9] text-lg font-bold'>1/4</h3>
                </div>

                <div className='flex items-center justify-between gap-5 mt-5'>
                  <div className='h-[2px] w-1/2 bg-lBlue' />
                  <div className='h-[2px] w-1/2 bg-lBlue/30' />
                  <div className='h-[2px] w-1/2 bg-lBlue/30' />
                  <div className='h-[2px] w-1/2 bg-lBlue/30' />
                </div>

                <form className='my-10 slg:mb-5 lg:mb-32 flex items-start justify-start flex-col gap-5 capitalize'>
                  <div className='w-full'>
                    <label htmlFor='' className='text-[#275A7F] text-sm'>
                      Profile Picture
                    </label>
                    <div
                      className='flex flex-col items-center bg-[#F1F3F4] rounded-sm outline-none w-full py-6 px-4 border-dashed border-[2px] text-[#275A7F] text-xs'
                      onClick={() => filePickerRef.current.click()}
                    >
                      <input
                        type='file'
                        ref={filePickerRef}
                        hidden
                        className='border-none'
                      />
                      <UploadFileOutlined />
                      <h3>Click to upload</h3>
                      <p>(JPEG and PNG)</p>
                    </div>
                  </div>
                  <div className='w-full'>
                    <label htmlFor='' className='text-[#275A7F] text-sm'>
                      Date of Birth
                    </label>
                    <input
                      type='text'
                      className='bg-[#F1F3F4] rounded-sm outline-none w-full py-2 px-4'
                    />
                  </div>
                  <div className='w-full'>
                    <label htmlFor='' className='text-[#275A7F] text-sm'>
                      State of Origin
                    </label>
                    <input
                      type='text'
                      className='bg-[#F1F3F4] rounded-sm outline-none w-full py-2 px-4'
                    />
                  </div>
                  <div className='w-full'>
                    <label htmlFor='' className='text-[#275A7F] text-sm'>
                      Home Address
                    </label>
                    <input
                      type='text'
                      className='bg-[#F1F3F4] rounded-sm outline-none w-full py-2 px-4'
                    />
                  </div>
                </form>
              </div>

              <hr className='bg-lBlue' />
              <div className='mt-10 slg:px-16 slg:pb-4 lg:pb-10'>
                <button
                  className='rounded-sm text-base btn text-white w-full px-6 py-2  uppercase
'
                  onClick={() => router.push('/verification2')}
                >
                  Save and Proceed
                </button>
              </div>
            </div>
          </div>
          {/* eslint-disable-next-line */}
          <img
            src='../img/reg_car.png'
            alt=''
            className='w-[70%] ml-auto hidden slg:block relative slg:mt-[16%]'
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default Verification1;
