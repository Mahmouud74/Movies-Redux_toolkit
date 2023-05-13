import './App.css'
import { Outlet } from 'react-router'
import LabelBottomNavigation from './components/ui/Nav'
import MovieModule from './Modules/Movie.Module'

function App() {

  return (
    <>
    <LabelBottomNavigation></LabelBottomNavigation>
    <div className="container mt-5">
      <MovieModule></MovieModule>   
    </div>

    </>
  )
}

export default App
