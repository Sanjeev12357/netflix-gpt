// Movielist.js
import React, { useState } from 'react';
import MovieCard from './MovieCard';
import VideoModal from './VideoModal';

const Movielist = ({ title, movies }) => {
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleMovieCardClick = (movieId) => {
    setSelectedMovieId(movieId);
  };

  const handleCloseModal = () => {
    setSelectedMovieId(null);
  };

  return (
    <div className='p-6 h-full '>
      <h1 className='text-3xl text-white font-bold px-2 py-2'>{title}</h1>
      <div className='flex overflow-x-auto overflow-y-hidden '>
        <div className='flex gap-[15px]'>
          {movies?.map((movie) => (
            <div key={movie.id} onClick={() => handleMovieCardClick(movie.id)}>
              <MovieCard movieId={movie.id} posterPath={movie.poster_path} />
            </div>
          ))}
        </div>
      </div>
      {selectedMovieId && <VideoModal movieId={selectedMovieId} onClose={handleCloseModal} />}
    </div>
  );
};

export default Movielist;
