import React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useProducts from '../hooks/useProducts';

const ProductsDetailPage = () => {
  const { productId } = useParams();
  console.log(productId, "Productid")
  const { products, loading, error } = useProducts();
if (loading) return <p>Loading products...</p>;
if (error) return <p>Error fetching products: {error}</p>;
const  product = products[productId-1]
  console.log(product, "Product")
  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {product.name}
      </Typography>
      <Box>
        <img src={product.image} alt={product.name} style={{ maxWidth: "100%"}} />
      </Box>
      <Typography variant="h5" color="text.secondary">
        ${product.price}
      </Typography>
      <Typography variant="body1" paragraph>
        Category: {product.category}
      </Typography>
      <Typography variant="body1" paragraph>
        Description: {product.description}
      </Typography>
    </Box>
  );
};

export default ProductsDetailPage;
