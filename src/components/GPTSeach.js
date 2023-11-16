import React from 'react'
import SearchBar from './SearchBar'
import MovieSuggestiongpt from './MovieSuggestiongpt'
const GPTSeach = () => {
  return (
    <div >
    <div className=' fixed -z-10'>
        <img
        className=' h-[100vh] w-[100vw]'
        src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="netfliximg"
        />
        </div>
        <SearchBar/>
        <MovieSuggestiongpt/>
    </div>
  )
}

export default GPTSeach