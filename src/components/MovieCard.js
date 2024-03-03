
import { IMG_CDN } from '../utils/constant';

import '../style.css'; // Import your custom styles
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMovies } from '../utils/heartSlice';

const MovieCard = ({ posterPath, movieId }) => {
  const dispatch=useDispatch();
  
  return (
    
    <div
      className={`w-[200px] h-[120px] md:w-[350px] md:h-[250px] rounded-md movie-card`}
      
    >
    <button className='bg-white rounded-md px-4 py-1' onClick={()=>dispatch(addMovies(movieId))}  >Add</button>
    <Link to={"/browse/" + movieId}>
      <img alt='Movie Card'   className='rounded-xl' src={IMG_CDN + posterPath}/>
      </Link>
      
    </div>
  );
};

export default MovieCard;