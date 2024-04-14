import React, {useState} from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import google from '../assets/google.png'
import fb from '../assets/Vector.png'

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const {register, 
         formState: {errors},
        handleSubmit} = useForm()

  const onsubmit = (data) => {
       console.log(data)
  }
  return (
    <div className='flex flex-col gap-y-8 w-11/12 mx-auto'>
        <h1 className='text-[20px] font-semibold mt-4 '>Welcome Back</h1>
        <form onSubmit={handleSubmit(onsubmit)} className='flex flex-col gap-y-8'>
        <input type='email'
          placeholder='Email'
          id='email'
          name='email'
          className='form-style w-full '
          {...register('email', {required:true})}
        />
        {
          errors.email && (
            <span className='ml-2 -mt-7 text-xs text-rose-600'>Email is required</span>
          )
        }

      <div className='relative'>
      <input 
          type={showPassword ? ("text") : ("password")}
          placeholder='Password'
          name='password'
          className='form-style w-full'
          {...register('password', {required:true})}
        />
           {
          errors.password && (
            <span className='ml-2 -mt-7 text-xs text-rose-600'>Password is required</span>
          )
        }
         <span onClick={ () => setShowPassword((prev) => !prev)}
                className='absolute right-6 top-[10px] cursor-pointer'>
                  {
                    showPassword ? 
                    (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : 
                    (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)
                  }
               
                </span>
      </div>
                <Link to='/forgot-password'> 
                      <p className='text-xs text-gray-500 underline text-start font-semibold -mt-6'>
                       Forgot your Password?</p>
                </Link>

                <button type='submit'
                 onClick={() => navigate('/goals')}
                className='text-white mt-20 bg-gradient-to-b from-[#7B91FF]  to-[#95BEFF] rounded-xl p-2'>
                Sign In
                </button>
        </form>

        <div className='text-center'>Or</div>

        <div className='flex gap-x-2 justify-center'>
        <div className='border-[1.5px] p-2 rounded-lg border-gray-400'>
        <img src={google}/>
        </div>
        <div className='border-[1.5px] p-2 px-3 rounded-lg border-gray-400'>
          <img src={fb}/>
        </div>
        </div>
        <p className='text-[12px] mb-4 font-medium underline mx-auto'>Don’t have an account yet? <span className='text-blue-400 cursor-pointer underline'
        onClick={() => navigate('/signup')}>Create an account</span></p>

    </div>
  )
}

export default Login