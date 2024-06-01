import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Products } from './Pages/Products';

import './styles/index.scss'
import { Sales } from "./Pages/Sales";

const router = createHashRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/products",
    element: <Products/>
  },
  {
    path: "/sale",
    element: <Sales/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)