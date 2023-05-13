import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import MultiActionAreaCard from './ui/card';

const MovieDetails = () => {
    let params = useParams();
    let movies = useSelector(state=>state.movies);
    let movie = movies.find((movie)=>movie.id==params['id']);
    console.log(movie);
    return (
        <div className='row d-flex justify-content-center'>
            <div className="col-md-6 d-flex justify-content-center">
            {movie&&
                <MultiActionAreaCard  test={movie.title} img={movie.backdrop_path} id={movie.id} overview={movie.overview}></MultiActionAreaCard> 
            }
            </div>
        </div>
    );
};

export default MovieDetails;