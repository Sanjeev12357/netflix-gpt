import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { options } from "../utils/constant";
import { useEffect } from "react";

const useMovietrailer=(movieId)=>{
    const dispatch=useDispatch();

    

    //fetfch trailer video 
    const getMovieVideos=async()=>{
        const data=await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options);
        const json=await data.json();
        // console.log(json);

        const filterData=json.results.filter(video=>video.type=='Trailer');
        const trailer=filterData.length ? filterData[0]:json.result[0];
        // console.log(trailer);
      
        dispatch(addTrailerVideo(trailer));
    };
    useEffect(()=>{
        getMovieVideos();
    },[])
}

export default useMovietrailer;