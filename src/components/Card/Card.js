import React,{useState} from 'react';
import './card.css';

const Card = ({ movies }) => {
    const [shopped,addshop]= useState([])
    function handlle(movie){
        addshop(shopped=>[...shopped,movie]);
        localStorage.setItem('shoppingList',JSON.stringify(shopped));
        console.log(shopped);
    }

    return (

        <div className="cardlist__movies">
            {movies.filter(movie => movie.Poster).map((movie, index) => (
                <div className="card" key={index}>
                    <img
                        className="movie__image"
                        src={movie.Poster}
                        alt="postal"
                    />
                    <div className="flex__card">
                        <p className="heading">{movie.Title}</p>
                        <p className="paragraph">Release Year : {movie.Year}</p>
                   
                        <button className="btn btn-warning" onClick={()=>handlle(movie)}>Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;
