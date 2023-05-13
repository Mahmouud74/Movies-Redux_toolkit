import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import classes from '../../Nav.module.css'
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import { Link, useNavigate } from 'react-router-dom';
import { purple } from '@mui/material/colors';
import AddCircleIcon from '@mui/icons-material/AddCircle';
export default function LabelBottomNavigation() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState('movies');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if(newValue==='movies'){
        navigate('/movies');
    }
    else if(newValue==='Add Movie'){
        navigate('/add');
    }
  };

  return (

    <BottomNavigation sx={{ width: "100%" ,bgcolor:purple[900],color:'white'}} showLabels  value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Movies"
        value="movies"
        icon={<MovieCreationIcon />}
        sx={{color:'white'}}
      />
      <BottomNavigationAction
        label="Add Movie"
        value="Add Movie"
        icon={<AddCircleIcon />
        }
        sx={{color:'white'}}
      />

    </BottomNavigation>
  );
}
