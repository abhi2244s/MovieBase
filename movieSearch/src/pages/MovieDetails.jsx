import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api, { searchMovieById } from '../components/apis/api'
import axios from 'axios'
import MovieCard from '../components/MovieCard/MovieCard'
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import Spinner from '../components/Spinner/Spinner'
const MovieDetails = () => {
  const [loading, setLoading] = useState(false)
  const [movie, setMovie] = useState(null)
  const { id } = useParams()
  console.log(id, "id")
  const fetchMovieId = async () => {
    const { data } = await axios.get(searchMovieById(id))
    console.log(data, "moviedetails")
    setMovie(data)
  }

  useEffect(() => {
    setLoading(true)
    fetchMovieId().then((data) => {
      setLoading(false)
    })
  }, [id])
  return (
    <>
      {loading ? (<Spinner />) : (<div className='bg-[#364f65]  pb-[20px]'>
        <div className='w-5/6 mx-auto  flex justify-between text-white md:flex-row flex-col'>
          {movie && <MovieCard
            Title={movie.Title}
            Year={movie.Year}
            Type={movie.Type}
            Poster={movie.Poster}
            imdbID={movie.imdbID}

          />}
          {movie && <div className='md:w-[50%] w-full mt-24 gap-12'>
            <div>
              Plot : {movie.Plot}
            </div>
            <div className='mt-5'>
              Actors : {movie.Actors}
            </div>
            <div className='mt-5'>
              Genre : {movie.Genre.split(',').map((genre => {
                return <span key={genre} className='bg-gray-800 border rounded-lg text-white mr-5 p-3 px-5 py-3'>{genre}</span>
              }))}
            </div>
            <div className='mt-5'>
              <Rating items={10} value={Math.floor(movie.imdbRating)} />
            </div>
          </div>}
        </div>
      </div>)}
    </>
  )
}

export default MovieDetails
