import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from './Movielist';
import MovieCard from './MovieCard';
import { IMG_CDN } from '../utils/constant';

const MovieSuggestiongpt = () => {
    const {movieResults,movieNames}=useSelector(store=>store.gpt);
   
    if(!movieNames && !movieResults) return null;

  



  return (
    <div className="p-4 m-4 bg-black opacity-90 text-white">
      <div>
        <div className="flex overflow-x-auto overflow-y-hidden ">
          <div className="flex gap-[15px]">
            {movieResults?.map((movie) => (
              <div
                key={movie.id}
                className="w-[100px] h-[150px] hover:bg-red-900 transition-all duration-300 ease-in flex flex-col items-center justify-center  rounded-md border-x-slate-400 shadow-xl"
              >
                <div className='h-[20px] text-sm text-ellipsis overflow-hidden'>{movie.title}</div>
                <img
                  alt={movie.title}
                  className="rounded-xl w-[100px] h-[100px]"
                  src={IMG_CDN + movie?.poster_path}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieSuggestiongpt