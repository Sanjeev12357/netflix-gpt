import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { options } from "../utils/constant";
import { useEffect } from "react";



const useNowPlayinMovies=()=>{
    const dispatch=useDispatch();

    const getNowPlayingMovies=async()=>{
      const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', options);
      const json=await data.json();
    //   console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
  
    };
    useEffect(()=>{
        getNowPlayingMovies();
    },[]);
}

export default useNowPlayinMovies;