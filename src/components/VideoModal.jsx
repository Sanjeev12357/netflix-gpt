import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useMovie from '../hooks/useMovie';

const VideoModal = ({ movieId, onClose }) => {
  useMovie(movieId);

  const trailerVideo = useSelector((store) => store.movies?.newVideo);

  return (
    <div className='video-modal-overlay' onClick={onClose}>
      <div className='video-modal' onClick={(e) => e.stopPropagation()}>
        <span className='close' onClick={onClose}>
          &times;
        </span>
        <iframe
          className='w-full h-full aspect-video'
          src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=0`}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModal;