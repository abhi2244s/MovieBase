import { useEffect, useState } from "react"
import api from "../components/apis/api"
import axios from "axios"

function useMovieList(...args) {
    const [loading,setLoading] = useState(false)
    const [movieList, setMovieList] = useState([])
    async function downLoadMovie(...args) {
        try {
            const urls = args.map((url) => api(url))
            console.log(urls)
            const response = await axios.all(urls.map((url) => axios.get(url)))
            console.log(response, "response")
            if (response[0].data.Error) {
                setMovieList([])
            }
            else {
                const movies = response.map((movie) => movie.data.Search)
                console.log([].concat(...movies), "concat")
                console.log(movies, "movies")
                setMovieList([].concat(...movies))
            }

        } catch (error) {
            console.log(error, "error")
        }
    }
    console.log(movieList, "list")

    useEffect(() => {
        setLoading(true)
        downLoadMovie(...args).then(()=>{
            setLoading(false)
        })
      
    }, [...args])

    return { movieList  , loading}
}

export default useMovieList;
