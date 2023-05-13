import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { moviesActions } from '../../redux/store';
import Icon from '@mui/material/Icon';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import axios from 'axios';
import { DeleteForever } from '@mui/icons-material';
import { purple } from '@mui/material/colors';
import { Link, useParams } from 'react-router-dom';

export default function MultiActionAreaCard({test,img,id,overview}) {
    let movies = useSelector(state=>state.movies);
    let params = useParams();
    const dispatch = useDispatch();
    function deleteMovie(e){
        console.log(e.target.id);
        let apiUrl = `http://localhost:3000/results/${e.target.id}`
        axios.delete(apiUrl).then((res) => {
        })    
        let i = 0
        movies.find((element, idx) => {
            i = idx;
            return +element.id === +e.target.id;
        })
        movies = [...movies];
        movies.splice(i,1);
        dispatch(moviesActions.deleteMovie(movies));
    }


  return (
    <Card sx={{  color:purple[500], borderRadius:'20px' ,paddingBottom:"10px"}} >
      <CardActionArea>
        <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/original/${img}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {test}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           { overview }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='d-flex justify-content-between'>
          {(!params['id']&&
          <Link to={`/${id}`} className='text-decoration-none'>
            <Button variant="contained" sx={{bgcolor:purple[500],":hover":{bgcolor:"rgb(212, 209, 209)",color:purple[500]}}}  >
                  View
            </Button>
          </Link>)
          ||
          <Link to={`/`} className='text-decoration-none'>
            <Button variant="contained" sx={{bgcolor:purple[500],":hover":{bgcolor:"rgb(212, 209, 209)",color:purple[500]}}}  >
                  Back
            </Button>
          </Link>
          }

        <Button variant="contained" color="error" id={id} onClick={deleteMovie}>
                Delete
        </Button>
      </CardActions>
    </Card>
  );
}