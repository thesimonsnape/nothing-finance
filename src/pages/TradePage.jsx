import React from 'react'
import NavBar from '../components/NavBar'
import TradingTable from '../components/TradingTable';
// import { FaArrowRightLong } from "react-icons/fa6";
// import { Link } from 'react-router-dom';

const TradePage = () => {
  return (
    <div className='flex justify-center min-h-screen px-7 md:px-20'>
      <NavBar />
      <div className='w-full max-w-[1200px] mt-20'>
          <div className='mt-12 flex flex-col gap-2 w-full text-white px-4 md:px-10 py-5 items-start justify-center rounded-lg shadow-[#211f3e] shadow-md'>
          <h2 className='text-xl md:text-2xl text-slate-100 font-semibold'>Protocols can open staking programs before the token generation event to reduce circulating supply. </h2>
          <p className='text-sm font-medium text-slate-300'>Users can stake their xP points and earn yield on their xPs. </p>
          {/* <div className='flex items-center w-full gap-2'>
            <span className='text-6xl text-[#6459e3]'>{'Nothing DEX'}<b className='text-[10px] text-[white]'>A decentralized DEX</b></span>
          </div>
          <br />
          <Link to={`#`} className='hover:underline link-styles flex gap-2 items-center cursor-pointer'>
              <div className='flex gap-2 items-center cursor-pointer'>
                  Register here <FaArrowRightLong className='translate-y-[2px]' />
              </div>
          </Link> */}
        </div>
        <div className='mt-12'>
          <TradingTable />
          <br />
        </div>
      </div>
      <br />
    </div>
  )
}

export default TradePage;