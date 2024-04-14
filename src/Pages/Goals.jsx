import React from 'react'
import { useForm } from "react-hook-form";
import {  useNavigate } from "react-router-dom";

const Goals = () => {

    const {
        register,
        handleSubmit,
      } = useForm();

      const onsubmit = (data) => {
        console.log(data);
       
      };

      const navigate = useNavigate();
  return (
    <div className='max-auto w-11/12'>
    <h1 className='text-[20px] font-semibold text-center mt-10 mb-4'> What are your goals? </h1>

     <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-y-4 ml-5">
     <div className="flex justify-between form-style" >
     <p className="text-black font-semibold text-[12px]">Weight Loss</p>
      <input type="checkbox"
            id="checkbox"
            name="checkbox"
            {...register("checkbox", {required: true})}
        />
    </div>
    <div className="flex justify-between form-style" >
     <p className="text-black font-semibold text-[12px]">Muscle Gain</p>
      <input type="checkbox"
            id="checkbox2"
            name="checkbox2"
            {...register("checkbox2", {required: true})}
        />
    </div>
    <div className="flex justify-between form-style" >
     <p className="text-black font-semibold text-[12px]">Flexibility and Mobility</p>
      <input type="checkbox"
            id="checkbox3"
            name="checkbox3"
            {...register("checkbox3", {required: true})}
        />
    </div>
    <div className="flex justify-between form-style" >
     <p className="text-black font-semibold text-[12px]">General Fitness</p>
      <input type="checkbox"
            id="checkbox4"
            name="checkbox4"
            {...register("checkbox4", {required: true})}
        />
    </div>
    <div className="flex justify-between form-style" >
     <p className="text-black font-semibold text-[12px]">Event - specific training</p>
      <input type="checkbox"
            id="checkbox5"
            name="checkbox5"
            {...register("checkbox5", {required: true})}
        />
    </div>
    <div className="flex justify-between form-style" >
     <p className="text-black font-semibold text-[12px]">Mindfulness and Mental Health</p>
      <input type="checkbox"
            id="checkbox6"
            name="checkbox6"
            {...register("checkbox6", {required: true})}
        />
    </div>

    <button
          type="submit"
          className="text-white mb-6 mt-20 bg-gradient-to-b from-[#7B91FF]  to-[#95BEFF] rounded-xl p-2"
          onClick={() => navigate('/schedule')}
        >
          Confirm
        </button>
     </form>




    
    </div>
  )
}

export default Goals