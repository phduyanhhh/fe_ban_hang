import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
// page
import HomePage from "./pages/Home/index.jsx";
import RegisterPage from "./pages/Register/index.jsx";
import ProductBrand from "./pages/ProductBrand/index.jsx";
import LoginPage from "./pages/Login/index.jsx";
import ProductDetail from "./pages/ProductDetail/index.jsx";
import CartPage from "./pages/Cart/index.jsx";

import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [      
      {
        path: '/home',
        element: <HomePage />
      },
      {
        path: '/nike',
        element: <ProductBrand />
      },
      {
        path: '/adidas',
        element: <ProductBrand />
      },
      {
        path: '/vans',
        element: <ProductBrand />
      },
      {
        path: '/converse',
        element: <ProductBrand />
      },
      {
        path: '/new-balance',
        element: <ProductBrand />
      },
      {
        path: '/palladium',
        element: <ProductBrand />
      },
      {
        path: '/register',
        element: <RegisterPage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/converse/:slug',
        element: <ProductDetail />
      },
      {
        path: '/palladium/:slug',
        element: <ProductDetail />
      },
      {
        path: '/new-balance/:slug',
        element: <ProductDetail />
      },
      {
        path: '/vans/:slug',
        element: <ProductDetail />
      },
      {
        path: '/adidas/:slug',
        element: <ProductDetail />
      },
      {
        path: '/nike/:slug',
        element: <ProductDetail />
      },
      {
        path: '/cart',
        element: <CartPage />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <ToastContainer />
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);