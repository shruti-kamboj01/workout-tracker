import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import {  useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import fb from "../assets/Vector.png";
import line from '../assets/Line.png'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onsubmit = (data) => {
    console.log(data);
     navigate('/goals')
   
  };
  return (
    <div className="flex flex-col gap-y-8 w-11/12 mx-auto">
      <h1 className="text-[20px] font-semibold mt-4 ">Create an account</h1>
      <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-y-8">
        
      <input
          type="text"
          placeholder="First Name"
          id="firstname"
          name="firstname"
          className="form-style w-full "
          {...register("firstname", { required: true })}
        />
        {errors.firstname && (
          <span className="ml-2 -mt-7 text-xs text-rose-600">
            FirstName is required.
          </span>
        )}

        <input
          type="text"
          placeholder="Last Name"
          id="lastName"
          name="lastName"
          className="form-style w-full "
          {...register("lastName", { required: true })}
        />
        {errors.lastName && (
          <span className="ml-2 -mt-7 text-xs text-rose-600">
            LastName is required.
          </span>
        )}
        
        
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          className="form-style w-full "
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="ml-2 -mt-7 text-xs text-rose-600">
            Email is required.
          </span>
        )}

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            className="form-style w-full"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="ml-2 -mt-7 text-xs text-rose-600">
              Password is required.
            </span>
          )}
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-6 top-[10px] cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </div>
      <div>
      <div className="flex gap-x-3">
      <input type="checkbox"
            id="checkbox"
            name="checkbox"
            {...register("checkbox", {required: true})}
        />
       
        <p className="text-gray-400 font-semibold text-[12px]"> By proceeding, I agree to all <span className="text-blue-400 underline">T&C</span> and <span className="text-blue-400 underline">Privacy Policy</span></p>
       
      </div>
      {errors.checkbox && (
            <span className="ml-2 -mt-7 text-xs text-rose-600">
               Please check the T&C.
            </span>
          )}
      </div> 
     
    


        <button
          type="submit"
          className="text-white mt-20 bg-gradient-to-b from-[#7B91FF]  to-[#95BEFF] rounded-xl p-2"
          
        >
          Create an account
        </button>
      </form>
       <div className="flex justify-center gap-x-3 w-11/12 mx-auto">
            <img src={line} className="h-[1px]"/>

            <p className='-mt-3'>Or</p>
            <img src={line} className="h-[1px]"/>
            
       </div>
      

        <div className='flex gap-x-2 justify-center'>
        <div className='border-[1.5px] p-2 rounded-lg border-gray-400'>
        <img src={google}/>
        </div>
        <div className='border-[1.5px] p-2 px-3 rounded-lg border-gray-400'>
          <img src={fb}/>
        </div>
        </div>
        <p className='text-[12px] mb-4 font-medium underline mx-auto'>Already have an account? <span className='text-blue-400 cursor-pointer underline'
        onClick={() => navigate('/login')}>Login</span></p>
    </div>
  );
};

export default SignUp;
