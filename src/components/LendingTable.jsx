import React from 'react'
import { rows } from '../constant/index';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';
import BlastLogo from '../assets/logo/blast_logo.png'
import AarkLogo from '../assets/logo/aark_logo.jpg';
import HyperlookLogo from '../assets/logo/hyperlook.png';

const LendingTable = () => {
  const location = useLocation();

  return (
    <div className='bg-transparent w-full h-full flex justify-center items-center '>
        <div className='w-full max-w-[1200px] rounded-t-lg border border-[#2a2a2a] shadow-md shadow-[#3b3b3b] px-10 '>
            <div className={`my-10 flex text-white ${location.pathname === '/project' ? 'flex-col text-start ' : 'justify-between items-center'}`}>
                <h2 className='text-4xl font-semibold'>Lend or Borrow your protocol points</h2>
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
                        <th className='text-center'>TOTAL POINTS</th>
                        <th className='text-center'>TOTAL USERS</th>
                        <th className='text-center'>YOUR POINTS</th>
                        <th className='text-center'>SUPPLY APY</th>
                        <th className='text-center'>BORROW APY</th>
                        <th className='text-center'></th>
                    </tr>
                    {rows.map((el, idx) => {
                        return (
                            <tr key={idx} className={`text-center ${idx % 2 === 0? 'text-white bg-[#06060d]' : 'bg-[#0e0f11] text-white'}`}>
                                <td className='py-3 flex gap-0 items-center justify-items-start opacity-80'>
                                <img src={
                                        el.logo === 'blast'
                                            ? BlastLogo
                                            : el.logo === 'aark'
                                                ? AarkLogo
                                                : HyperlookLogo
                                    } alt='logo' className='text-center w-10 h-10 p-2'/>
                                   {el.project}
                                </td>
                                <td className='py-3 opacity-80 text-center'>{el.totalPoints} PTS</td>
                                <td className='py-3 opacity-80 text-center'>{el.totalUsers}</td>
                                <td className='py-3 opacity-80 text-center'>{el.yourPoints}</td>
                                <td className='py-3 opacity-80 text-center'>{el.lendingAPY}</td>
                                <td className='py-3 opacity-80 text-center'>{el.borrowAPY}</td>
                                <td className='py-3'>
                                    <button to={`/project/${el.rank}`} className='text-center hover:underline link-styles flex gap-2 items-center cursor-pointer opacity-100'>
                                        <div className='flex gap-2 items-center text-center cursor-pointer opacity-100'>
                                            Lend
                                        </div>
                                    </button>
                                </td>
                                <td className='py-3'>
                                    <button to={`/project/${el.rank}`} className='hover:underline link-styles flex gap-2 items-center cursor-pointer opacity-100'>
                                        <div className='flex gap-2 items-center cursor-pointer opacity-100'>
                                            Borrow
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

export default LendingTable;