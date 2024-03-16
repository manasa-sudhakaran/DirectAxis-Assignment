# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### About E store

# E Store Application

This project is a React.js web application that displays a list of products, allowing users to filter, sort, search, and mark products as favorites. It utilizes Redux for state management and Material UI (MUI) for the UI framework. Products are fetched from a static JSON file for simplicity.

## Features

- **Display Products**: Products are displayed in a grid or list view, showing the product name, price, and image.
- **Filter Products**: Users can filter products based on categories such as electronics, clothing, books, etc., using query parameters.
- **Sort Products**: Allows sorting of products by price (low to high or high to low) and other criteria.
- **Pagination/Infinite Scrolling**: Handles large lists of products efficiently.
- **Search Functionality**: Users can search for products by name or other criteria.
- **Favorites**: Users can mark products as favorites, which is managed globally using Redux/Context API.
- **Error Handling & Loading States**: Implements proper error handling and loading indicators for API requests.
- **Routing**: Uses React Router for navigation and includes a product detail page.
- **State Management**: Utilizes Redux for state management across the application.

## Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (Recommended version: [Node.js 14.x or newer](https://nodejs.org/))
- npm (Node Package Manager, comes with Node.js installation)

## Setup & Running the Project Locally

1. Clone the repository:
   git clone https://github.com/yourusername/product-display-app.git](https://github.com/manasa-sudhakaran/DirectAxis-Assignment.git)https://github.com/manasa-sudhakaran/DirectAxis-Assignment.git
2. Navigate to the project directory if required:
   cd projetdirectory
3. Install dependencies
   npm install
4. start the development server
   npm start
5.Open your web browser and visit http://localhost:3000 to view the application. (port may be different if already port is in use)

### Project Structure
     public/: Contains the static assets, including the product.json file.
     src/
          routes.js : Define the routes here.
          api/ApiService.js : Contains API calls and handling
          app/ : contain the Redux hook and store configuration
          hooks/ : custom hook for fetching products
          pages/ : contain page to display home page, favorite page and detail product page
          components/
              common/ : Reusable components like Header, Footer, 
              ProductCard.js and ProductGrid.js files
          features/
              favorites/favoritesSlice.js : Contain slice for favorite product functionality
              products/productsSlice.js: Contains slice for product data and operations 


  
