import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './page/Home';
import NotFound from './page/NotFound';
import NewProduct from './page/NewProduct';
import AllProducts from './page/AllProducts';
import ProductDetail from './page/ProductDetail';
import MyCart from './page/MyCart';
import ProtectedRouter from './page/ProtectedRouter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/products/new', element: <ProtectedRouter requireAdmin><NewProduct /> </ProtectedRouter> },
      { path: '/products', element: <AllProducts /> },
      { path: '/products/:id', element: <ProductDetail /> },
      { path: '/cart', element: <ProtectedRouter><MyCart /></ProtectedRouter> },
    ]

  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
