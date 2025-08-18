import React from 'react'
import image from '../assets/RegistrationImage.png'
import gicon from '../assets/googleicon.png'
const Login = () => {
  return (
    <div className="w-full h-screen bg-[#F4F7FF] flex">
      <div className="w-[50%] p-12">
        <img src="/TaskCoLogo.png" alt="TaskCo Logo" className="w-[25%] object-contain " />
        <h1 className='text-[64px] font-bold'>Welcome Back!</h1>
        <h2 className='font-bold text-[#6B6B6B] text-xl'>Please enter login detail below</h2>
        <br />
        <form className="flex flex-col">
            <input type="text" placeholder="Enter the email" className="pl-7 w-full h-[80px] rounded-[16px] border"/>
            <input type="password" placeholder="Enter the password" className="pl-7 w-full h-[80px] rounded-[16px] border mt-[40px]"/>
            
            <div className="flex justify-end mt-4">
                <p className="text-[#4E4E4E] font-bold cursor-pointer">Forgot Password?</p>
            </div>
            <input type="submit" value="Submit" className="bg-[#0773D7] font-bold text-white pl-7 w-full h-[80px] rounded-[16px] mt-[40px] hover:bg-[#2887E0] cursor-pointer"/>
        </form>
        <br />  
        <div className="flex items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="mx-4 text-black font-bold">Or continue</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <br />
        <button className="w-full h-[89px] flex items-center justify-center gap-3 border border-black rounded-2xl py-3 hover:bg-gray-100 transition cursor-pointer">
          <img src={gicon} alt="Google Logo" className="w-5 h-5" />
          <span className="font-medium text-black">Log in with Google</span>
        </button>
        <br />
        <h1 className='text-center'>Don't have an account? <span className='text-blue-500 underline underline-offset-1 cursor-pointer'>Sign Up</span></h1>
      </div>
      <div className="w-[50%] bg-black-200 p-12">
        <div className='w-full h-full'>
            <img src={image} alt="" className='w-full h-full object-cover rounded-2xl' />
        </div>
      </div>

    </div>
  )
}

export default Login
