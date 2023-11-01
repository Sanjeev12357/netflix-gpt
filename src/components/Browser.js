import React from 'react'
import Header from './Header'
import useNowPlayinMovies from '../hooks/useNowplayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';



const Browser = () => {
    //fetch data from tmdb api and update store 
    useNowPlayinMovies();

  return (
    <div>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
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