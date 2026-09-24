import React from 'react'
import logo from '../assets/logo.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <div>
        <div className='mx-15 mt-25 flex items-center justify-between'>
            <div className='flex items-center gap-2 pb-5'>
                <Image src={logo} alt='logo' className='w-5 h-5' />
                <span className='uppercase font-bold text-white'>fitlog</span>
            </div>
            <div className='text-slate-400'>
                &copy; 2026 FitLog - Workout Library. Train Hard log honest
            </div>
        </div>
    </div>
  )
}

export default Footer