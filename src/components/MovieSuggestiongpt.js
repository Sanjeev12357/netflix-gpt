import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from './Movielist';

const MovieSuggestiongpt = () => {
    const {movieResults,movieNames}=useSelector(store=>store.gpt);
   
    if(!movieNames) return null;



  return (
    <div className='p-4 m-4 bg-black opacity-90 text-white'>
        <div>
            {movieNames.map((movieName,index )=><Movielist 
                key={movieName}
                 title={movieName}
                  movies={movieResults[index]}
                  />)}        
            
        </div>
    </div>
  )
}

export default MovieSuggestiongpt