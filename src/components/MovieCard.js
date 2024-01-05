
import { IMG_CDN } from '../utils/constant';

import '../style.css'; // Import your custom styles
import { Link } from 'react-router-dom';

const MovieCard = ({ posterPath, movieId }) => {
  return (
    <div
      className={`w-[200px] h-[120px] md:w-[350px] md:h-[250px] rounded-md movie-card`}
      
    >
    <Link to={"/browse/" + movieId}>
      <img alt='Movie Card'   className='rounded-xl' src={IMG_CDN + posterPath}/>
      </Link>
      
    </div>
  );
};

export default MovieCard;