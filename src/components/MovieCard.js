
import { IMG_CDN } from '../utils/constant';

import '../style.css'; // Import your custom styles
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMovies } from '../utils/heartSlice';
import {CiHeart} from 'react-icons/ci'
import { useState } from 'react';
import { Toast } from '@chakra-ui/react';

const MovieCard = ({ posterPath, movieId }) => {
  const dispatch=useDispatch();
  const [isbutton,setIsButton]=useState(false);
  //console.log(isbutton);
 
  
  return (
    <div
      className={`w-[200px] h-[120px] md:w-[350px] md:h-[250px] rounded-md movie-card`}
    >
      <button
        className={`bg-white rounded-md px-4 py-1 hover:bg-black hover:translate-x-4  hover:text-white ${!isbutton?'bg-black':'bg-black'} transition-all duration-300 ease-in-out`}
        disabled={isbutton}
        onClick={() =>{
          setIsButton(true);
          alert("added");
          //console.log(isbutton);
           Toast({
             title: "Added to Favourites",
             status: "success",
             duration: 5000,
             isClosable: true,
             position: "Top",
           });
           dispatch(addMovies({ movieId, posterPath }));
         
          
          
          }}
      >
        <CiHeart />
      </button>
      <Link to={"/browse/" + movieId}>
        <img
          alt="Movie Card"
          className="rounded-xl"
          src={IMG_CDN + posterPath}
        />
      </Link>
    </div>
  );
};

export default MovieCard;