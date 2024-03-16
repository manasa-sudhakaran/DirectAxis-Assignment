const PRODUCTS_URL = '/product.json';

/**
 * Fetch all products.
 * @returns {Promise<Array>} A promise that resolves to an array of products.
 */
export const fetchProducts = async () => {
  try {
    const response = await fetch(PRODUCTS_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    return await response.json();
  } catch (error) {
    console.error('There was a problem fetching the products:', error);
    throw error;
  }
};

/**
 * Filter products by category.
 * @param {Array} products - The array of products to filter.
 * @param {String} category - The category to filter by.
 * @returns {Array} The filtered products.
 */
export const filterProductsByCategory = (products, category) => {
  return products.filter(product => product.category === category);
};

/**
 * Sort products by price.
 * @param {Array} products - The array of products to sort.
 * @param {String} order - The order to sort by ("asc" for ascending, "desc" for descending).
 * @returns {Array} The sorted products.
 */
export const sortProductsByPrice = (products, order = 'asc') => {
  return products.sort((a, b) => {
    return order === 'asc' ? a.price - b.price : b.price - a.price;
  });
};

/**
 * Search products by name.
 * @param {Array} products - The array of products to search.
 * @param {String} query - The search query.
 * @returns {Array} The products that match the search query.
 */
export const searchProductsByName = (products, query) => {
  return products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
};

