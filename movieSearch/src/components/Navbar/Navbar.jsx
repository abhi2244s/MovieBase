import React, { useRef, useState } from 'react'
import useMovieList from '../../hooks/useMovieList'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../assets/logo.jpg"
import { IoIosCloseCircleOutline, IoIosMenu, IoMdClose } from "react-icons/io"
const Navbar = () => {
    const navigate = useNavigate()
    const resultRef = useRef()
    const [searchTerm, setSearhTerm] = useState("")
    const { movieList, loading } = useMovieList(!searchTerm ? "avengers" : searchTerm)

    const handleMouseCliked = (e, movie) => {
        console.log(e.target)
        console.log(movie)
        navigate(`/movie/${movie}`)
    }
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <nav className=" sticky top-0 bg-[#191e26] w-full z-20  start-0 dark:border-gray-600 text-white">
                <div className='flex items-center justify-between h-[60px] md:w-5/6 mx-auto w-full'>
                    <div className='md:w-[20%]  w-[50%]'>
                        <Link to="/" className='flex items-center space-x-3'>
                            <div>
                                <img src={logo} className='w-[30px] h-[30px]' />
                            </div>
                            <div>
                                <p className='text-[24px]'>Movie Base</p>
                            </div>
                        </Link>
                    </div>
                    <div className='w-[50%] relative md:flex hidden'>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full" placeholder="Search Movie" required
                            onFocus={() => {
                                resultRef.current.style.display = 'block'
                            }}
                            onBlur={() => {
                                resultRef.current.style.display = 'none'
                            }}
                            autoComplete='off'
                            onChange={(e) => {
                                setSearhTerm(e.target.value)
                            }} />
                        <div className='absolute shadow  w-full bg-white rounded p-3 h-[200px] overflow-y-auto text-black mt-10' style={{ display: "none" }} ref={resultRef}>
                            {loading ? (<p>Loading...</p>) : (<><p>Auto complete results ...</p>
                            {movieList.length > 0 && movieList.map(movie => <>
                                <div className='border border-gray-400 p-2 m-2 cursor-pointer hover:bg-slate-400' onMouseDown={(e) => handleMouseCliked(e, movie.imdbID)}>

                                    {movie.Title}
                                </div></>)}</>)}
                        </div>
                    </div>

                    <div className='w-[15%] md:flex hidden'>
                        {/* <label class="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span class="ms-3 text-sm font-medium">Theme</span>
                        </label> */}
                    </div>
                    <div className='w-[20%] md:hidden flex ' onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (<IoMdClose size={30} />) : (<IoIosMenu size={30} />)}


                        {/* IoIosCloseCircleOutline  */}
                    </div>
                </div>

            </nav>
            {isOpen && (<div className='bg-[#191e26] w-full z-20  start-0 dark:border-gray-600 text-white p-5'>
                <div className='w-[50%] relative'>
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full" placeholder="Search Movie" required
                        onFocus={() => {
                            resultRef.current.style.display = 'block'
                        }}
                        onBlur={() => {
                            resultRef.current.style.display = 'none'
                        }}
                        autoComplete='off'
                        onChange={(e) => {
                            setSearhTerm(e.target.value)
                        }} />
                    <div className='absolute shadow  w-full bg-white rounded p-3 h-[200px] overflow-y-auto text-black z-50' style={{ display: "none" }} ref={resultRef}>
                        {loading ? (<p>Loading...</p>) : (<><p>Auto complete results ...</p>
                            {movieList.length > 0 && movieList.map(movie => <>
                                <div className='border border-gray-400 p-2 m-2 cursor-pointer hover:bg-slate-400' onMouseDown={(e) => handleMouseCliked(e, movie.imdbID)}>

                                    {movie.Title}
                                </div></>)}</>)}
                    </div>
                </div>

                <div className='w-[15%] flex mt-8'>
                    {/* <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span class="ms-3 text-sm font-medium">Theme</span>
                    </label> */}
                </div>
            </div>)}

        </>
    )
}

export default Navbar
