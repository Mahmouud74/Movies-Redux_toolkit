import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moviesActions } from '../redux/store';
import { TextField } from '@mui/material';
import MultiActionAreaCard from './ui/card';
import LabelBottomNavigation from './ui/Nav';

const Movies = () => {
    let movies = useSelector(state=>state.movies);
    const dispatch=useDispatch();
    useEffect(()=>{
      let apiUrl=`http://localhost:3000/results`;
      axios.get(apiUrl).then((res)=>{
                dispatch(moviesActions.addMovies(res.data));
            })
    },[])
    return (
      <>
        <div className="row d-flex justify-content-center">
          {/* <div className="col-md-12 d-flex justify-content-center my-3">
            <TextField required color='info' id="outlined-basic" label="Outlined" variant="outlined" className='w-100' />
          </div> */}
            {movies.length&&movies.map(movie =>
            <div className="col-md-4 my-2" key={movie.id}> 
                <MultiActionAreaCard  test={movie.title} img={movie.backdrop_path} id={movie.id} overview={movie.overview}></MultiActionAreaCard> 
            </div>
            )}
        </div>
      </>
    )
};

export default Movies;