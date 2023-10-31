import React, { useState } from 'react'
import Header from './Header'
//react arrow function component export

const Login = () => {
    const [isSignInform,setIsSignInForm]=useState(true);
    const toggleSignInform=()=>{
        setIsSignInForm(!isSignInform);
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img
        className='h-[100vh] w-[100vw]'
        src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="netfliximg"
        />
        </div>
        <form className='absolute p-12 bg-black w-1/2 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 '>
            <h1 className='font-bold text-3xl p-2 my-4'>{isSignInform? "Sign In":"Sign Up"}</h1>

            {!isSignInform &&(
                <input type="text"
                placeholder='Enter Name'
                className='p-2 my-4 w-full bg-gray-700'/>
               )}
               
            <input type="text"
            placeholder='Email Address'
            className='p-2 my-4 w-full bg-gray-700'/>
          
            <input type="password"
            placeholder='password'
            className='p-2 my-4 w-full bg-gray-700'/>
            <button className='py-4 my-4 bg-red-700 w-full'>{isSignInform? "Sign In":"Sign Up"}</button>
            <p className='py-4 cursor-pointer'  onClick={toggleSignInform}>{isSignInform? "New to Netflix ?Sign Up Now":"Already registered? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login