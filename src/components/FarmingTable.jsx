import React from 'react'
import { rows } from '../constant/index';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';
import BlastLogo from '../assets/logo/blast_logo.png'
import AarkLogo from '../assets/logo/aark_logo.jpg';
import HyperlookLogo from '../assets/logo/hyperlook.png';

const FarmingTable = () => {
  const location = useLocation();

  return (
    <div className='bg-transparent w-full h-full flex justify-center items-center '>
        <div className='w-full max-w-[1200px] rounded-t-lg border border-[#2a2a2a] shadow-md shadow-[#3b3b3b] px-10 '>
            <div className={`my-10 flex text-white ${location.pathname === '/project' ? 'flex-col text-start ' : 'justify-between items-center'}`}>
                <h2 className='text-4xl font-semibold'>Farm your protocol points</h2>
                <Link to='/projects' className='hover:underline link-styles flex gap-2 items-center cursor-pointer'>
                    <div className='flex gap-2 items-center cursor-pointer'>
                        View Protocols <FaArrowRightLong className='translate-y-[1px]' />
                    </div>
                </Link>
            </div>
            <table className='w-full mt-10'>
                <tbody>
                    <tr className='text-gray-500 font-semibold text-center'>
                        <th className='text-start'>PROTOCOL</th>
                        <th className='text-center'>APY</th>
                        <th className='text-center'>TOTAL REWARDS</th>
                        <th className='text-center'>TOTAL USERS</th>
                        <th className='text-center'>YOUR POINTS</th>
                        
                        <th className='text-center'></th>
                    </tr>
                    {rows.map((el, idx) => {
                        return (
                            <tr key={idx} className={`text-center ${idx % 2 === 0? 'text-white bg-[#06060d]' : 'bg-[#0e0f11] text-white'}`}>
                                <td className='py-3 text-center opacity-80 flex justify-start items-center'>
                                   <img src={
                                        el.logo === 'blast'
                                            ? BlastLogo
                                            : el.logo === 'aark'
                                                ? AarkLogo
                                                : HyperlookLogo
                                    } alt='logo' className='text-center w-10 h-10 p-2'/>
                                   {el.project}
                                </td>
                                <td className='py-3 text-center opacity-80 '>{el.apy}</td>
                                <td className='py-3 text-center opacity-80 '>{el.totalRewards} PTS</td>
                                <td className='py-3 text-center opacity-80 '>{el.totalUsers}</td>
                                <td className='py-3 text-center opacity-80 '>{el.yourPoints} PTS</td>
                                <td className='py-3 text-center'>
                                    <button to={`/project/${el.rank}`} className='hover:underline opacity-100 text-center link-styles flex gap-2 items-center cursor-pointer'>
                                        <div className='flex gap-2 text-center items-center cursor-pointer opacity-100'>
                                            Stake
                                        </div>
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                    <br />
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default FarmingTable;