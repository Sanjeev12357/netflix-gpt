import React, { useEffect } from 'react'
import Login from './Login'
import Browser from './Browser'
import { Router, createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom';
import MovieDetailsPage from './MovieDetailsPage';
import Heart from './heart/Heart';


const Body = () => {

    const appRouter=createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browser/>
        },
        {
          path: "/browse/:movieId",
          element: <MovieDetailsPage/>,
        },
        {
          path:'/browse/heart',
          element:<Heart/>
        }
    ]);



  return (
    <div>
       <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body