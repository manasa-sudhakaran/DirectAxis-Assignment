import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addFavorite, removeFavorite } from '../features/favorites/favoritesSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    console.log(product, "product")
    const favorites = useSelector((state) => state.favorites.favorites);
    const isFavorite = favorites.some(favorite => favorite.id === product.id);
    const [addfav, setAddfav] = useState(isFavorite);
    useEffect(() => {
        setAddfav(isFavorite);
      }, [isFavorite]);
  
      const handleFav = (e) => {
          e.stopPropagation(); // Prevent navigation when clicking on the favorite icon
          if(addfav) {
              dispatch(removeFavorite(product));
          } else {
              dispatch(addFavorite(product));
          }
          setAddfav(!addfav);
      };

  return (
    <Card sx={{ maxWidth: 345, cursor: "pointer", maxHeight: "320px" }} elevation={10}>
        <div  onClick = {() => navigate(`/product/${product.id}`)}>
      <CardMedia
        component="img"
        sx={{ height: 140, width: 140, display: "inline" }}
        style={{marginTop: "30px"}}
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
      </CardContent>
      </div>
      <CardActions style={{display: "flex", justifyContent: "space-between"}}>
        <Button size="small" onClick = {(e) => {e.stopPropagation(); navigate(`/product/${product.id}`)}}>See More</Button>
        <Button size="small" onClick={(e) => handleFav(e)}><FavoriteIcon style={{color: addfav ? 'red' : '#cfcfcf'}}/></Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
