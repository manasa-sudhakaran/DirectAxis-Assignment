import { configureStore } from '@reduxjs/toolkit';
// Import slices
import productsReducer from '../features/products/productsSlice';
import favoritesReducer from '../features/favorites/favoritesSlice';

export const store = configureStore({
  reducer: {
    // Add slices here
    products: productsReducer,
    favorites: favoritesReducer,
    // You can add more slices as needed
  },
});

