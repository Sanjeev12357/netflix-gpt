import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO, useravatar } from '../utils/constant';

const Header = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector((store)=>store.user);
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
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img
        className='w-44 bg-transparent'
        src={LOGO}
        alt="logo"
        />
        {user && (<div className='flex p-4'>
        <img 
        className='w-12 h-12 '
        src={useravatar}
        alt="user icon"/>
        <button onClick={handlesignout} className='font-bold text-white'>Sign Out</button>
    </div>)}
    </div>
  )
}

export default Header