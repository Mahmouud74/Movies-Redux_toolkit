import { TextField ,Button} from '@mui/material';
import { purple } from '@mui/material/colors';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moviesActions } from '../redux/store';
import { useNavigate } from 'react-router';
const AddMovies = () => {
    let navigate = useNavigate();
    let movies = useSelector(state=>state.movies);
    let dispatch=useDispatch();
    const addMovie=(e)=>{
        e.preventDefault();
        let apiUrl = `http://localhost:3000/results/`
        axios.post(apiUrl, {...inputData,backdrop_path: "/ovM06PdF3M8wvKb06i4sjW3xoww.jpg"}).then((res) => {
             movies = [...movies, inputData]
            dispatch(moviesActions.addMovies(movies));
            setInputData({ title: "", overview: "" })

        })
        navigate('/')
    }
    const onChangeInputs = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value });
        console.log(inputData);
        // console.log(inputData);
    }
    const [inputData, setInputData] = useState({ title: "", overview: "" });
    return (
        <>
        <div className='row d-flex justify-content-center p-5'>
            <div className="col-md-12">
                <div className="col-md-12 d-flex justify-content-center my-3">
                    <TextField required  id="title"  label="Title " name='title' value={inputData.title} onChange={onChangeInputs} variant="outlined" className='w-100' />
                </div>
                <div className="col-md-12 d-flex justify-content-center my-3">
                    <TextField required  id="overview"  label="overview " name='overview' value={inputData.overview} onChange={onChangeInputs} variant="outlined" className='w-100' />
                </div>
                <div className="col-md-12 d-flex justify-content-center">
                <Button variant="contained"  sx={{paddingX:"20px",bgcolor:purple[500] , ":hover":{bgcolor:purple[300],border:"2px solid black"}}} onClick={addMovie}>
                    Add
                </Button>
                </div>
            </div>
        </div>
        </>
    );
};

export default AddMovies;