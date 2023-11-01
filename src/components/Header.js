import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const navigate=useNavigate();
    const user=useSelector((store)=>store.user);
    const handlesignout=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/')
          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });
    }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img
        className='w-44 bg-transparent'
        src='https://imgs.search.brave.com/58xq76kBx0bPsgZKamGSryxiqdxKGUPI5WkUGsMLbsE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDQvTmV0ZmxpeC1M/b2dvLTcwMHgzOTQu/cG5n'
        alt="logo"
        />
        {user && (<div className='flex p-4'>
        <img 
        className='w-12 h-12 '
        src='https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229'
        alt="user icon"/>
        <button onClick={handlesignout} className='font-bold text-white'>Sign Out</button>
    </div>)}
    </div>
  )
}

export default Header