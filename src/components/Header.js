import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO, useravatar } from '../utils/constant';
import { togglesGptSearchView } from '../utils/gptSlic';
import { CiHeart } from 'react-icons/ci';

const Header = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector((store)=>store.user);
    const showGptSearch=useSelector((store)=>store.gpt.showGptSearch);
    const handlesignout=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          
          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,email,displayName} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName}));
                
              navigate('/browse');
            } else {
                dispatch(removeUser());
                navigate('/');
               
            }
          });
          ///unsubscribe when components unmounts
          return ()=>unsubscribe();
    },[])

    const handlegptSearch=()=>{
      dispatch(togglesGptSearchView());
    }
  return (
    <div className='absolute w-screen px-8 py-2  bg-gradient-to-b from-black z-10 flex items-center justify-center   md: justify-between '>
        <img
        className='w-44 mx-auto md:mx-0 bg-transparent'
        src={LOGO}
        alt="logo"
        />
        {user && (<div className='flex items-center justify-center gap-[10px] p-2'>

        <button onClick={handlegptSearch} className='hidden md:inline-block py-2  px-4  mx-4 my-2 h-10 text-black rounded-xl bg-gray-200'>{showGptSearch?"HomePage":"🔍Search"}</button>
        
        <Link to='/browse/heart' className='bg-gray-200 text-black hover:bg-black hover:text-white duration-300 ease-in-out transition-all flex items-center justify-center  w-10 h-10 rounded-full shadow-xl'><CiHeart/></Link>
        <button onClick={handlesignout} className=' text-black px-4 py-2 bg-gray-200 rounded-xl'>Sign Out</button>
    </div>)}
    </div>
  )
}

export default Header