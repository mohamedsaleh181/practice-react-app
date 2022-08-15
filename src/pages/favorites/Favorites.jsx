import React, { useContext } from "react";

import { movieContext } from '../../context/Movie';

const Favorites = ()=>{
    let {favList, removeFav} = useContext(movieContext)
    return<>
        {
        favList.map((movie,i) => {
            return (
                <div key={i} className="card">
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">{movie.plot}</p>
                        <button onClick={()=>{removeFav(movie)}} className="btn btn-danger">Remove</button>
                    </div>
                </div>
            )
        })
    }
    </>
}
export default Favorites;