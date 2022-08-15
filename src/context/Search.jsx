import React , {createContext, useState, useContext} from 'react'
import { movieContext } from './Movie';



export const SearchContext = createContext(0);

export const SearchContextProvider = ({children})=>{

    let {movies} = useContext(movieContext)
    const [movieToShow, setMovieToShow] = useState(movies)
    const search = (e)=>{
        let value = e.target.value
        let showData = movies.filter((movie)=>{
            if(value === ''){
                return movie
            }else if (movie.title.toLowerCase().includes(value.toLowerCase())){
                return movie
            }
        })
        setMovieToShow(showData)
    }



    return <SearchContext.Provider value={{search,movieToShow}}>
        {children}
    </SearchContext.Provider>
}