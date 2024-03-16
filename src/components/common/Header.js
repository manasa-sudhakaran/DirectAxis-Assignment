import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "math", fontSize: "28px", fontWeight: 900}}>
            E Store
          </Typography>
          <Tooltip title="Favorites" placement="top" enterDelay={500} leaveDelay={200}>
          <Button color="inherit"s><FavoriteIcon style={{color: "red"}} onClick={() => navigate('/favorites')}/></Button>
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
