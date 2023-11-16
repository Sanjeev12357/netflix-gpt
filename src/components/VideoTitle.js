import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen  aspect-video pt-[25%] px-6 md:px-24 absolute text-white bg-gradient-to-r '>
        <h1 className='text-2xl md:text-6xl font-bold '>{title}</h1>
        <p className='py-6 text-lg hidden md:inline-block w-1/2'>{overview}</p>
        <div >
            <button className='bg-white hidden md:inline-block text-black p-4 px-12 text-xl  rounded-md hover:opacity-80 transition-all ease-in-out duration-300'>▶️Play</button>
            <button  className='mx-2 hidden md:inline-block bg-gray-800 text-white p-4 px-12 text-xl opacity-70  rounded-md hover:bg-gray-500 transition-all ease-in-out duration-300'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle