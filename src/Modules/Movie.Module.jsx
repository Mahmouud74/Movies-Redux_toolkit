import React from 'react';
import { Outlet } from 'react-router';

const MovieModule = () => {
    return (
        <div>
        <Outlet></Outlet>  
        </div>
    );
};

export default MovieModule;