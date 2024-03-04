import React, { useEffect, useRef, useState } from 'react'
import openai from '../utils/openai';
import { options } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addGptMovieResult } from '../utils/gptSlic';





const SearchBar = () => {

    const searchText=useRef(null);
    const dispatch=useDispatch();
     const debounceTimeout = useRef(null);
   
   
    
    //search movie in tmdb
    const searhcMovieinTmdb=async(movie)=>{

        if(!movie) return null;

        const data=await fetch(`https://api.themoviedb.org/3/search/movie?query="${movie}"&include_adult=false&language=en-US&page=1`,options);
        const json=await data.json();
        //console.log(json);
        const jsonResult= json.results;
        const movieArray=jsonResult.map((m)=>m.title);
        // console.log(movieArray);
        console.log(jsonResult);
         dispatch(
           addGptMovieResult({
             movieNames: movieArray,
             movieResults: jsonResult,
           })
         );

       
    }

    
  const handleInputChange = (value) => {
    // Do something immediately on each input change if needed
    console.log(value);

    // Clear the existing timeout if any
    clearTimeout(debounceTimeout.current);

    // Set a new timeout for 500 milliseconds
    debounceTimeout.current = setTimeout(() => {
      searhcMovieinTmdb(value);
    }, 500);
  };

    
    // const handlegptSearchclick=async()=>{
    //     console.log(searchText.current.value);

    //     const gptQuery="Act as a Movie Recommendation system and suggest some movies for the query : "+searchText.current.value + "only give me names of 5 movies, comma seprated like the example result given ahead. Example Result:Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    //     //make ana api call to gpt api and get movie results
    //     const gptResults=await openai.chat.completions.create({
    //         message:[{role:'user',content:gptQuery}],
    //         model:'gpt-3.5-turbo',
    //     });
    //     if(!gptResults.choices){console.log("error")};

    //     console.log(gptResults.choices?.[0]?.message?.content);
    //     const gptMovies=gptResults.choices?.[0]?.message?.content.split(',');

    //     //for each movie i will search tmdb api
    //     const promiseArray= gptMovies.map(movie=>searhcMovieinTmdb(movie));
    //     //[Promis,promise,promise,promise,promise]

    //     const tmdbResults=await Promise.all(promiseArray);
    //     console.log(tmdbResults);

    //     dispatch(addGptMovieResult({movieName:gptMovies,movieResults:tmdbResults}));


        

    // }
    const handlegptSearchclick=async()=>{
      //  console.log(searchText.current.value);
     
      searhcMovieinTmdb(searchText.current.value);
      
          
    }
    return (
      <div className="pt-[15%] flex justify-center">
        <form
          className="bg-black grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            // onChange={()=>{
            //      handlegptSearchclick();
            // }}
            onChange={(e) => handleInputChange(e.target.value)}
            type="text"
            className="p-4 m-4 col-span-9 rounded-lg"
            placeholder="what would yo like to watch today?"
          ></input>
        </form>
      </div>
    );
}

export default SearchBar;

