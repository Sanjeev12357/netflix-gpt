import React from 'react';
import Movielist from './Movielist';
import { useSelector } from 'react-redux';
import '../css/style.css';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);

  const handleMovieCardClick = (movieId) => {
    console.log('Clicked Movie ID:', movieId);
    // Add any other logic you need when a movie card is clicked
  };

  return (
    <div className='bg-black'>
      <div className='mt:0 md:-mt-40 ml-4 md:pl-12 relative z-20'>
        <Movielist
          title={'Now Playing'}
          movies={movies.addNowPlayingMovies}
          onMovieCardClick={handleMovieCardClick}
        />
        <Movielist
          title={'Trending'}
          movies={movies.addTopMovies}
          onMovieCardClick={handleMovieCardClick}
        />
        <Movielist
          title={'Popular'}
          movies={movies.popularMovies}
          onMovieCardClick={handleMovieCardClick}
        />
        <Movielist
          title={'Upcoming Movies'}
          movies={movies.addUpcomingMovies}
          onMovieCardClick={handleMovieCardClick}
        />
        <Movielist
          title={'Horror Movies'}
          movies={movies.addNowPlayingMovies}
          onMovieCardClick={handleMovieCardClick}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
