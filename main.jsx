import { StrictMode,useState } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Cart from './assets/Components/Cart.jsx'
import App from './App.jsx'
import './index.css'
import Home from './assets/Components/Home.jsx'
const checking = () => {
  console.log("adasdf");

}


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
{path:"/cart",element:<Cart />},
  {path:"/Home",element:<Home />},
  {path:"/",element:<Home/>}

    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
