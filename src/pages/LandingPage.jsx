import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Logo from '../assets/logo/nothing-finance.jpeg'
import { Link } from 'react-router-dom';
import BlastLogo from '../assets/logo/blast_logo.png'

const LandingPage = () => {
  return (
    <div className='w-full text-white flex flex-col justify-between '>
        <div className='flex justify-center items-center flex-col min-h-screen'>
            <div className='flex items-center'>
                <img src={Logo} alt='logo' className='w-12 h-12'/>
                <h1 className='text-2xl font-bold'>&nbsp;Nothing Finance</h1>
            </div>
            <div className='mt-10 text-center'>
                <h2 className='text-5xl font-semibold leading-tight tracking-wide flex justify-center gap-0 items-center'>
                    Coming soon on <span className='flex items-center justify-center gap-0'>
                        <img src={BlastLogo} alt='logo' className='text-center w-30 h-30 p-2 mr-0 pr-0'/>Blast network
                    </span>
                </h2>
            </div>
        </div>
    </div>
  )
}

export default LandingPage