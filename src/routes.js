import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import ProductsDetailPage from './pages/ProductsDetailPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/product/:productId" element={<ProductsDetailPage />} />
    </Routes>
  );
};

export default AppRoutes;
