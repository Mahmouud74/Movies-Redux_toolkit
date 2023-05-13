import * as redux from "redux"
import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {movies:[]};
const moviesSlice = createSlice({name:'moviesSlice',initialState,reducers:{
    logg(){
        console.log("first reducer");
    },
    addMovies(latestState,action){
        latestState.movies=action.payload;
    },
    deleteMovie(latestState,action){
        latestState.movies=action.payload;
    }
}})

const store = redux.createStore(moviesSlice.reducer);

export const moviesActions= moviesSlice.actions;
export default store;
