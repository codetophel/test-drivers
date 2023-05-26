import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Overview () {
  const router = useRouter();

  return (
    <main>
      <div className='bg-[#D9D9D9]'>
        <Nav />

        <div className='p-6 lg:py-10 lg:px-24 lg:pb-32'>
          <Image
            src='/img/chaffeur.png'
            width={700}
            height={300}
            loading='lazy'
            alt='car'
            className='overview-img mx-auto car-shadow lg:block hidden relative'
          />

          <Image
            src='/img/chaffeur.png'
            width={350}
            height={200}
            loading='lazy'
            alt='car'
            className='overview-img mx-auto drop-shadow-lg lg:hidden relative'
          />

          <div className='lg:rounded-t-[43px] max-w-[350px] bg-[#F1F3F4] lg:max-w-fit mx-auto p-6 lg:pr-20 lg:py-6 lg:absolute lg:bottom-[12%] lg:left-[10%]'>
            <h3 className='text-lg lg:text-2xl font-bold text-[#129CE9]'>
              Become a <br /> Lagosride driver
            </h3>
            <p className=' text-sm lg:mt-5 text-[#275A7F]'>
              Join the latest wave in transportation for Lagos State.
            </p>

            <div className='flex items-center gap-5 mt-5 lg:mt-10'>
              <button
                className='rounded-sm text-base btn text-white px-6 py-2 uppercase
          '
                onClick={() => router.push('register')}
              >
                Proceed
              </button>

              <h3 className='cursor-pointer underline uppercase text-base font-bold text-[#129CE9]'>
                Download requirement
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* overview section */}
      <div className='bg-white p-6 lg:px-24 lg:py-16'>
        <h3 className='text-lg lg:text-2xl text-[#129CE9] font-semibold'>
          LagosRide Overview
        </h3>
        <p className=' text-sm lg:text-base text-[#275A7F] mt-5 lg:mt-10 lg:w-3/4'>
          LagosRide is a mobility solution that will allow users book and share
          the cost of a ride with similar transit patterns. It will link users
          up based on their preferred pick and drop off points, each not more
          than 1km apart respectively, and a pick-up time not more than 5
          minutes apart.
          <br /> <br />
          We believe this service will contribute to a reduction in traffic
          congestion in Lagos as it will encourage ridesharing and therefore
          reduce the frequency of single-occupancy.
        </p>

        <div className='flex items-center gap-5 mt-5 lg:mt-10'>
          <button
            className='rounded-sm text-base btn text-white px-6 py-2 uppercase
          '
            onClick={() => router.push('register')}
          >
            Proceed
          </button>

          <h3 className='cursor-pointer underline uppercase text-base font-semibold text-[#129CE9]'>
            Download requirement
          </h3>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Overview;
