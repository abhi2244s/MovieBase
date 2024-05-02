import React from 'react'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ Title, Year, Type, imdbID, Poster }) => {
     const naviagate  =useNavigate()
    function handleMovie(){
       naviagate(`/movie/${imdbID}`)
    }
    return (
        <>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer mt-12" onClick={handleMovie}>
               
                    <img className="rounded-t-lg w-full" src={Poster} alt=""/>
              
                <div className="p-5">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{Title}</h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{Year}</p>

                    <span>Type - </span>
                    <span>{Type}</span>
                </div>
            </div>

        </>
    )
}

export default MovieCard
