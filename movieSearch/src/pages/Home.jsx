import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard/MovieCard'
import api from '../components/apis/api'
import axios from 'axios'
import useMovieList from '../hooks/useMovieList'
import Spinner from '../components/Spinner/Spinner'

const Home = () => {
    const { movieList, loading } = useMovieList("harry", "batman", "avengers")

    return (
        <>

            {/* navbar */}
            {loading ? (<Spinner />) : (<div className='bg-[#364f65] pb-[20px]'>
                <div className='w-5/6 mx-auto grid md:grid-cols-3  gap-12 grid-cols-1 '>
                    {movieList.length > 0 && movieList.map(movie => <MovieCard key={movie.imdbID} {...movie} />

                    )}
                </div>
            </div>)}


            {/* movie List */}



            {/* pagination */}
        </>
    )
}

export default Home
