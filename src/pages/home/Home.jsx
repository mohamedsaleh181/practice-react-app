import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext';
import { movieContext } from '../../context/Movie';
import { SearchContext } from '../../context/Search';

const Home= ()=>{
    let {addToFav, favIds} = useContext(movieContext)
    let {cartIds, addToCart} = useContext(CartContext);
    let {movieToShow} = useContext(SearchContext)
    return(
    <>
        {
        movieToShow.map((movie,i) => {
            return (
                <div key={i} className="card">
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">{movie.plot}</p>
                        <button onClick={()=>{addToFav(movie)}} className= {favIds.includes(movie.id)?'btn btn-danger':'btn btn-primary'}>{favIds.includes(movie.id)?'Remove from Fav': 'Add To Fav'}</button>
                        <button onClick={()=>{addToCart(movie)}} className= {cartIds.includes(movie.id)?'btn btn-danger':'btn btn-primary'}>{cartIds.includes(movie.id)?'Remove from Cart': 'Add To Cart'}</button>
                    </div>
                </div>
            )
        })
    }
    </>
    )
}
export default Home;