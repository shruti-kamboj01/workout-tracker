import React from 'react'
import { useNavigate } from 'react-router-dom'
import image from '../assets/image2.png'
import { IoIosArrowForward } from "react-icons/io";

const Page2 = () => {
  const navigate = useNavigate()
  return (
    <div className='mr-2'>
    <div className='text-right text-blue-500 cursor-pointer underline text-base font-medium'
    onClick={()=>navigate('/login')}>Skip</div>
     
    <div className='mt-8 flex justify-center'>
        <img src={image}/>
    </div>

    <div className='mx-auto ml-2 mt-20'>
      <p className='font-semibold text-[20px]'>Get Burn</p>
      <p className='text-gray-500 text-base font-medium'>Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever </p>
    </div>
    
    <div className='w-fit  mt-20 rounded-full bg-gradient-to-b from-[#7B91FF] ml-72 p-4'>
      <button onClick={() => navigate('/login')}>
     <IoIosArrowForward size={24} className='mt-1'/>
      </button>
    </div>
</div>
  )
}

export default Page2