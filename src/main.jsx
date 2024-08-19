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
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);