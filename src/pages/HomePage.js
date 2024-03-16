import React, { useState, useMemo } from 'react';
import useProducts from '../hooks/useProducts';
import ProductGrid from '../components/ProductGrid';
import { Box, Button, Menu, MenuItem, TextField, FormControl, InputLabel, Select } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const HomePage = () => {
  const { products, loading, error } = useProducts();
  const [sortOrder, setSortOrder] = useState('lowToHigh');
  const [category, setCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    handleClose();
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const filteredAndSortedProducts = useMemo(() => {
    return products
      .filter(product => category ? product.category === category : true)
      .filter(product => searchQuery ? product.name.toLowerCase().startsWith(searchQuery) : true)
      .sort((a, b) => sortOrder === 'lowToHigh' ? a.price - b.price : b.price - a.price);
  }, [products, sortOrder, category, searchQuery]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error fetching products: {error}</p>;

  return (
    <Box sx={{ padding: 2 }}>
        <TextField
          label="Search Products"
          variant="outlined"
          fullWidth
          onChange={handleSearchChange}
          style={{maxWidth:"720px", backgroundColor: "white"}}
        />
      <Box style={{ display: 'flex',  flexWrap: 'wrap', justifyContent: "space-between", margin: "10px", alignItems: "center" }}>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{backgroundColor: "black", color: "white", width: "120px", height: "30px", textTransform: "none"}}>
          Filters <span style={{marginTop: "6px"}}><FilterAltIcon /></span>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleCategoryChange({ target: { value: '' } })}>All</MenuItem>
          <MenuItem onClick={() => handleCategoryChange({ target: { value: 'electronics' } })}>Electronics</MenuItem>
          <MenuItem onClick={() => handleCategoryChange({ target: { value: 'clothing' } })}>Clothing</MenuItem>
          <MenuItem onClick={() => handleCategoryChange({ target: { value: 'books' } })}>Books</MenuItem>
          <MenuItem onClick={() => handleCategoryChange({ target: { value: 'fitness'}})}>Fitness</MenuItem>
          {/* Add more categories as needed */}
        </Menu>
        <FormControl variant="outlined">
          <InputLabel>Sort By</InputLabel>
          <Select
            value={sortOrder}
            onChange={handleSortChange}
            label="Sort By"
            style={{backgroundColor: "#e5e5e5", borderRadius: "10px"}}
          >
            <MenuItem value="lowToHigh">Price: Low to High</MenuItem>
            <MenuItem value="highToLow">Price: High to Low</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <ProductGrid products={filteredAndSortedProducts} />
    </Box>
  );
};

export default HomePage;
