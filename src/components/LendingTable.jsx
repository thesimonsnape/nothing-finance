import React from 'react'
import { rows } from '../constant/index';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';

const LendingTable = () => {
  const location = useLocation();

  return (
    <div className='bg-transparent w-full h-full flex justify-center items-center '>
        <div className='w-full max-w-[1200px] rounded-t-lg border border-[#2a2a2a] shadow-lg shadow-[#3b3b3b] px-10 '>
            <div className={`my-10 flex text-white ${location.pathname === '/project' ? 'flex-col text-start ' : 'justify-between items-center'}`}>
                <h2 className='text-4xl font-semibold'>Lend or Borrow your protocol points</h2>
                <Link to='/projects' className='link-styles flex gap-2 items-center cursor-pointer'>
                    <div className='flex gap-2 items-center cursor-pointer'>
                        View Protocols <FaArrowRightLong className='translate-y-[1px]' />
                    </div>
                </Link>
            </div>
            <table className='w-full mt-10'>
                <thead className=''>
                    <tr className='text-gray-500 font-semibold'>
                        <td className='w-20 h-10 '>RANK</td>
                        <td className='w-auto h-10'>PROTOCOL</td>
                        <td className='w-fit max-w-10 h-10'>TOTAL POINTS</td>
                        <td className='w-fit max-w-20 h-10'>TOTAL USERS</td>
                        <td className='w-fit max-w-20 h-10'>YOUR POINTS</td>
                        <td className='w-20 h-10'></td>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((el, idx) => {
                        return (
                            <tr key={idx} className={`${idx % 2 === 0? 'text-white bg-[#06060d] opacity-50 ' : 'bg-[#0e0f11] opacity-50 text-white'}`}>
                                <td className='py-3'>{el.rank}</td>
                                <td className='py-3'>{el.project}</td>
                                <td className='py-3'>{el.totalPoints}</td>
                                <td className='py-3'>{el.totalUsers}</td>
                                <td className='py-3'>{el.yourPoints}</td>
                                <td className='py-3 flex gap-2 justify-center items-center'>
                                    <button className='bg-slate-100 text-gray-900 font-semibold px-4 py-1 md:px-10 md:py-3 text-[11px] md:text-base rounded-full'>Lend</button>
                                    <button className='bg-slate-100 text-gray-900 font-semibold px-4 py-1 md:px-10 md:py-3 text-[11px] md:text-base rounded-full'>Borrow</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default LendingTable;