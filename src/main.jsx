import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Movies from './components/movies.jsx'
import AddMovies from './components/AddMovies.jsx'
import MovieDetails from './components/MovieDetails.jsx'

// const routes = createBrowserRouter([
//   {
//     path: '/', element: <App />, children: [
//       {path:"/",element:  <Navigate to="/movies" /> },
//       { path: '/movies', element: <MoviesFun></MoviesFun> },
//       { path: ':id', element: <MovieDetail></MovieDetail> },
//       { path: '/add', element: <AddMovie></AddMovie> },
//     ]
//   },
//   { path: '*', element: <Error></Error> }
// ])
const routes = createBrowserRouter([
  {path:'/',element:<App /> , children:[
    {path:'/' , element:<Navigate to="/movies"></Navigate>},
    {path:"/movies",element:<Movies></Movies>},
    {path:"/add",element:<AddMovies></AddMovies>},
    {path:"/:id",element:<MovieDetails></MovieDetails>}
  ]}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
      <RouterProvider router={routes}>
       <App />
      </RouterProvider>
     </Provider> 
  </React.StrictMode>
  )
