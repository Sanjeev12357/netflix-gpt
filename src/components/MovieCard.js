// MovieCard.js
import React, { useState } from 'react';
import { IMG_CDN } from '../utils/constant';
import VideoModal from './VideoModal';
import '../style.css'; // Import your custom styles

const MovieCard = ({ posterPath, movieId }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-[200px] h-[120px] md:w-[350px] md:h-[250px] rounded-md movie-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img alt='Movie Card' src={IMG_CDN + posterPath} />

      {isHovered && <VideoModal movieId={movieId} onClose={() => setIsHovered(false)} />}
    </div>
  );
};

export default MovieCard;
