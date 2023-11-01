import React, { useState ,useRef} from 'react'
import Header from './Header'
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from 'firebase/auth';
import {auth} from "../utils/firebase"
import { checkValidData } from '../utils/validate';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
//react arrow function component export

const Login = () => {
    const navigate=useNavigate();
    const [isSignInform,setIsSignInForm]=useState(true);
    const [errormessage,setErrorMessage]=useState(null);
    const dispatch=useDispatch();
    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);

    const toggleSignInform=()=>{
        setIsSignInForm(!isSignInform);
    }
    const handlebuttonclick=(e)=>{
        e.preventDefault();
        //validate the form data
        // console.log(email.current.value);
        // console.log(password.current.value);
        const message=checkValidData(email.current.value,password.current.value);
        // console.log(message);
        setErrorMessage(message);
        if(message) return;
        //sign in sign up
        if(!isSignInform){
            
            //sign up logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
    // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
            displayName: name.current.value
          }).then(() => {
            const {uid,email,displayName} = auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}));
            console.log(name.current.value);
            navigate('/browse')
            // ...
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message);
            // ...
          });
        console.log(user);
        navigate('/browse');
        // ...
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+errorMessage);
        // ..
    });

        }else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
        // Signed in 
            const user = userCredential.user;
            console.log(user);
            navigate('/browse');
        // ...
         })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+errorMessage);
        });
        }
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
                className='p-2 my-4 w-full bg-gray-700'
                ref={name}
                />
               )}

            <input type="text"
            placeholder='Email Address'
            className='p-2 my-4 w-full bg-gray-700'
            ref={email}/>
          
            <input type="password"
            placeholder='password'
            ref={password}
            className='p-2 my-4 w-full bg-gray-700'/>
            <p className='text-red-500 font-bold'>{errormessage}</p>
            <button className='py-4 my-4 bg-red-700 w-full' onClick={handlebuttonclick}>{isSignInform? "Sign In":"Sign Up"}</button>
            <p className='py-4 cursor-pointer'  onClick={toggleSignInform}>{isSignInform? "New to Netflix ?Sign Up Now":"Already registered? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login