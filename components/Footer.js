import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className='bottom-0 bg-darkNav my-6 px-4 py-6 flex items-start justify-around text-sm text-white'>
      <div className='flex flex-col items-start gap-4 w-1/4'>
        <Image
          src='/img/logoo.png'
          width={150}
          height={200}
          loading='lazy'
          alt='test-logo'
        />

        <p className='text-justify text-footerLink'>
          We believe your transit moments should offer some comfort, a good time
          to relax and unwind from work. As Lagosians, we do thins by ourselves,
          but we know it is great to have someone tend to you while you are on
          the move...
        </p>

        <h3 className='font-bold'>Powered by zeno</h3>
      </div>

      <div className='flex items-start gap-28 text-white'>
        {/* footer menu */}
        <div>
          <ul className='flex flex-col items-start gap-4'>
            <li className='font-bold uppercase'>Explore</li>
            <li className='text-footerLink'>How it works</li>
            <li className='text-footerLink'>Partners</li>
            <li className='text-footerLink'>Help & FAQ</li>
            <li className='text-footerLink'>Privacy Policy</li>
            <li className='text-footerLink'>About Zeno</li>
          </ul>
        </div>

        {/* contact us */}
        <div className='flex flex-col gap-4'>
          <h3 className='font-bold uppercase'>Contact Us</h3>

          <p className='text-footerLink'>
            House 62,Kajola, 64 Campbell St,<br></br> Lagos state
          </p>

          <p className='text-footerLink'>(+234) 909 000 0793</p>

          <p className='text-footerLink'>Support@lagosride.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
