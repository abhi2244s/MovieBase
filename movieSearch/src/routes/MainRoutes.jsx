import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MovieDetails from '../pages/MovieDetails'
import Home from '../pages/Home'
import Navbar from '../components/Navbar/Navbar'

const MainRoutes = () => {
  return (
    <>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </>
  )
}

export default MainRoutes
