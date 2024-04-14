import React from 'react'
import { useNavigate } from 'react-router-dom'
import image from '../assets/image.png'
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
    const navigate = useNavigate()
  return (
    <div className='mr-2'>
        <div className='text-right cursor-pointer text-blue-500 underline text-base font-medium'
        onClick={()=>navigate('/login')}>Skip</div>
         
        <div className='mt-8 flex justify-center'>
            <img src={image}/>
        </div>

        <div className='mx-auto ml-2'>
          <p className='font-semibold text-[20px]'>Track Your Goal</p>
          <p className='text-gray-500 text-base font-medium'>Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals </p>
        </div>
        
        <div className='w-fit mt-10 rounded-full bg-gradient-to-b from-[#7B91FF] ml-72 p-4'>
          <button onClick={() => navigate('./page2')}>
         <IoIosArrowForward size={24} className='mt-1'/>
          </button>
        </div>
    </div>
  )
}

export default Home