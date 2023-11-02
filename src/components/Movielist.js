import React from 'react'
import MovieCard from './MovieCard'
import '../css/style.css'

const Movielist = ({title,movies}) => {
    // console.log(movies);
    // console.log(title);
    
  return (
    <div className='p-6'>
    <h1 className='text-3xl text-white font-bold px-2'>{title}</h1>
    <div className='flex overflow-x-auto overflow-y-hidden '>
    
    <div className='flex '>
   { movies?.map(movie=> <MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
        
    </div>
    </div>
        
    
       
        
    </div>
  )
}

export default Movielist