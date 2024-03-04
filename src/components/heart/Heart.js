import React from 'react'
import { Link } from 'react-router-dom';
import { IMG_CDN } from '../../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { removeMovies } from '../../utils/heartSlice';

const Heart = () => {
    const movies=useSelector(state=>state.heart.heart);
    console.log(movies);
    const dispatch=useDispatch();
    
  return (
    <div className=" grid grid-rows-2 px-[20px] grid-flow-col gap-4  bg-gradient-to-r from-indigo-500 w-full py-10  ">
      {movies.map((movie) => (
        <div key={movie.movieId} className=" mr-4">
          <div className=" h-[120px md:w-[250px] md:h-[250px] rounded-md px-4 py-10 movie-card">
            <Link to={"/browse/" + movie.movieId}>
              <img
                alt="Movie Card"
                className="rounded-xl w-[300px] h-[200px]"
                src={IMG_CDN + movie.posterPath}
              />
            </Link>
          </div>
          <button
            onClick={() => dispatch(removeMovies(movie.movieId))}
            className="text-white w-fit px-4 py-2 bg-black rounded-md shadow-xl mt-4"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Heart