import React from 'react'
import Movielist from './Movielist';
import MovieCard from './MovieCard';
import { useSelector } from 'react-redux';
import '../css/style.css'

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies);
  // console.log("Popular"+movies?.popularMovies);
  return (
    movies.addNowPlayingMovies &&(
    <div className=' bg-black '>
    <div className='-mt-52 pl-12 relative z-20'>
    <Movielist title={"Now Playing"} movies={movies.addNowPlayingMovies}/>
    <Movielist title={"Trending"} movies={movies.addTopMovies}/>
    <Movielist title={"Popular"} movies={movies.popularMovies}/>
    <Movielist title={"Upcoming Movies"} movies={movies.addUpcomingMovies}/>
    <Movielist title={"Horror Movies"} movies={movies.addNowPlayingMovies}/>
    </div>
    </div>
  ))
}

export default SecondaryContainer;