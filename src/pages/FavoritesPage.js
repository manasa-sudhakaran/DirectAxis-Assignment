import React from 'react';
import { useAppSelector } from '../app/hooks';
import ProductGrid from '../components/ProductGrid';

const FavoritesPage = () => {
  const favorites = useAppSelector((state) => state.favorites.favorites);

  return (
    <div>
      <h2>Favorite Products</h2>
      {favorites.length > 0 ? (
      <ProductGrid products={favorites} />
      ) : (
        <p>No favorite products added.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
