import React from 'react'
import Header from './Header'
import useNowPlayinMovies from '../hooks/useNowplayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRated';
import useUpcomingMovies from '../hooks/useUpcoming';
import GPTSeach from './GPTSeach';
import { useSelector } from 'react-redux';



const Browser = () => {
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
    //fetch data from tmdb api and update store 

    useNowPlayinMovies();
    usePopularMovies(); 
    useTopRatedMovies(); 
    useUpcomingMovies();

  return (
    <div>
        <Header/>
        {
          showGptSearch?(<GPTSeach/>):(<><MainContainer/>
          <SecondaryContainer/></>)

        }
        
        
        {/*
        Main Container
            -videobackground
            -Videotitle
        Secondary Container
            -Movielist *n
             -card*n
    */}
    </div>
  )
}

export default Browser