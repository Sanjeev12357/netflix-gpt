// useMovie.js
import { useDispatch } from "react-redux";
import { addNewVideo } from "../utils/movieSlice";
import { options } from "../utils/constant";
import { useEffect } from "react";

const useMovie = (movieId) => {
  const dispatch = useDispatch();

  // Fetch trailer video
  const getMovieVideos = async () => {
    try {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options);
      const json = await data.json();
     // console.log(json);

      const filteredData = json.results.filter(video => video.type === 'Trailer');
      const trailer = filteredData.length ? filteredData[0] : json.results[0]; // Corrected line
     // console.log(trailer);

      dispatch(addNewVideo(trailer));
    } catch (error) {
      console.error("Error fetching movie videos:", error);
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, [dispatch, movieId]);

  // It's a good practice to return something from a hook
  return null; // You can return any value or nothing based on your requirements
};

export default useMovie;
