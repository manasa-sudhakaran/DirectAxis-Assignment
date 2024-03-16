import { useState, useEffect } from 'react';
import { fetchProducts } from '../api/ApiService'; // Adjust the import path as needed

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message || 'Unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []); // Dependency array left empty to run only once on component mount

  return { products, loading, error };
};

export default useProducts;
